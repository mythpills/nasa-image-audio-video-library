import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";
import ImageAsset from "./ImageAsset";

const config = {
  title: "someTitle",
  href: "https://testSite/thumb1.jpg",
};

const item = {
  data: [{ title: config.title }],
  links: [
    {
      href: config.href,
    },
  ],
};

const renderComponent = () => {
  return render(
    <ThemeProvider theme={{}}>
      <ImageAsset item={item} />
    </ThemeProvider>
  );
};

test("renders the ImageAsset with correct attributes", async () => {
  renderComponent();
  expect(screen.getByRole("img")).toHaveAttribute("src", config.href);
  expect(screen.getByRole("img")).toHaveAttribute("alt", config.title);
});
