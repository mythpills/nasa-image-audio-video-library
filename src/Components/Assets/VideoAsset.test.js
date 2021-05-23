import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";
import VideoAsset from "./VideoAsset";

const config = {
  url: "https://testSite/video.mp4",
};
const item = {
  url: config.url,
};

const renderComponent = () => {
  return render(
    <ThemeProvider theme={{}}>
      <VideoAsset item={item} />
    </ThemeProvider>
  );
};

test("renders the AudioAsset correctly", async () => {
  renderComponent();
  expect(screen.getByTestId("videoControls")).toHaveAttribute(
    "src",
    config.url
  );
});

