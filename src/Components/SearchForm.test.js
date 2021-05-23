import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";
import SearchForm from "./SearchForm";

const config = {
  expectedValue: { keywords: "sun", mediaType: "image", yearStart: "2000" },
};

let updateFormValues = () => {};
const renderComponent = () => {
  return render(
    <ThemeProvider theme={{}}>
      <SearchForm onSubmit={updateFormValues} buttonDisabled={false} />
    </ThemeProvider>
  );
};

it("submits correct values", async () => {
  updateFormValues = jest.fn();
  renderComponent();
  const keywords = screen.getAllByRole("textbox")[0];
  const mediaType = screen.getByRole("combobox");
  const yearStart = screen.getAllByRole("textbox")[1];
  const submit = screen.getByRole("button");

  await waitFor(() => {
    fireEvent.change(keywords, {
      target: {
        value: "sun",
      },
    });
  });

  await waitFor(() => {
    fireEvent.change(mediaType, {
      target: {
        value: "image",
      },
    });
  });

  await waitFor(() => {
    fireEvent.change(yearStart, {
      target: {
        value: "2000",
      },
    });
  });
  await waitFor(() => {
    fireEvent.click(submit);
  });

  expect(updateFormValues).toHaveBeenCalledWith(config.expectedValue);
});
