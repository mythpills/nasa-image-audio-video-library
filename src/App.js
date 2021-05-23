import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { crukTheme, Header, ErrorText } from "@cruk/cruk-react-components";
import { AssetGrid } from "./Components/Grid/AssetGrid";
import { updateUrl, fetchItems } from "./api/index";
import SearchForm from "./Components/SearchForm";
import "./App.css";

const SiteWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const App = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [query, setQuery] = useState(null);
  const [items, setItems] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [showError, setShowError] = useState();
  const updateFormValues = (values) => {
    setQuery(values);
  };

  useEffect(() => {
    const getAssets = async () => {
      setIsLoading(true);
      setButtonDisabled(true);
      const assets = await fetchItems(query);
      setIsLoading(false);
      setButtonDisabled(false);
      const firstTen = assets.data.collection.items.slice(0, 10);
      const updatedItems = await updateUrl(firstTen);
      setItems(updatedItems);
      updatedItems.length===0 ? setShowError(true) : setShowError(false);
    };
    query && getAssets();
  }, [query]);

  return (
    <ThemeProvider theme={crukTheme}>
      <SiteWrapper>
        <SearchForm
          onSubmit={updateFormValues}
          buttonDisabled={buttonDisabled}
        />
        <div className="assetsContainer">
          {items?.length > 0 ? (
            <AssetGrid isLoading={isLoading} items={items} />
          ) : null}
        </div>
        {query && showError && !isLoading && (
          <ErrorText>
            Ooops! No items. Please update your fields and try again
          </ErrorText>
        )}
      </SiteWrapper>
    </ThemeProvider>
  );
};

export default App;
