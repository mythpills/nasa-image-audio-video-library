import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";
import AudioAsset from "./AudioAsset";

const config = {
  url: "https://testSite/auddio.mp3",
  title: "someTitle",
  date: "2018-06-08T00:00:00Z",
  center: "xyz",
  nasa_id: "abc123",
};
const item = {
  data: [
    {
      title: config.title,
      date_created: config.date,
      center: config.center,
      nasa_id: config.nasa_id,
    },
  ],
  url: config.url,
};

const renderComponent = () => {
  return render(
    <ThemeProvider theme={{}}>
      <AudioAsset item={item} />
    </ThemeProvider>
  );
};

test("renders the AudioAsset correctly", async () => {
  renderComponent();
  expect(screen.getByTestId("audioControls")).toHaveAttribute("controls");
  expect(screen.getByTestId("audioControls")).toHaveAttribute(
    "src",
    config.url
  );
  expect(screen.getByText("Title:")).toBeInTheDocument();
  expect(screen.getByText("Date Created:")).toBeInTheDocument();
  expect(screen.getByText("Nasa Id:")).toBeInTheDocument();
  expect(screen.getByText(config.title)).toBeInTheDocument();
  expect(screen.getByText(config.date)).toBeInTheDocument();
  expect(screen.getByText(config.center)).toBeInTheDocument();
  expect(screen.getByText(config.nasa_id)).toBeInTheDocument();
});
