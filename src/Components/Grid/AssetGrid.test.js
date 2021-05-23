import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { crukTheme } from "@cruk/cruk-react-components";
import { ThemeProvider } from "styled-components";
import { AssetGrid } from "./AssetGrid";

const config = {
  title: "someTitle",
  href: "https://testSite/thumb1.jpg",
  url: "https://testSite/auddio.mp3",
  isLoading: false,
  items: [
    {
      data: [{ media_type: "image" }],
      links: [
        {
          href: "https://testSite/thumb1.jpg",
        },
      ],
    },
    {
      data: [{ media_type: "image" }],
      links: [
        {
          href: "https://testSite/thumb2.jpg",
        },
      ],
    },
  ],
};

const renderComponent = (isLoading) => {
  return render(
    <ThemeProvider theme={{}}>
      <AssetGrid isLoading={isLoading} items={config.items} />
    </ThemeProvider>
  );
};

test("renders cards based on items prop", async () => {
  renderComponent(true);
  expect(screen.getByText("Loading")).toBeInTheDocument();
});

test("renders cards based on items prop", async () => {
  renderComponent(false);
  const cards = screen.getAllByRole("img");
  expect(cards).toHaveLength(2);
});

