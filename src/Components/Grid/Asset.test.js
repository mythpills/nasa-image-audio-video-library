import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";
import Asset from "./Asset";

const config = {
  title: "someTitle",
  href: "https://testSite/thumb1.jpg",
  url: "https://testSite/auddio.mp3",
};

const getItem = (media) => {
  return {
    data: [{ title: config.title, media_type: `${media}` }],
    links: [
      {
        href: config.href,
      },
    ],
    url: config.url,
  };
};

const renderComponent = (item) => {
  return render(
    <ThemeProvider theme={{}}>
      <Asset item={item} />
    </ThemeProvider>
  );
};

test("renders the image asset based on prop", async () => {
  const item = getItem("image");
  renderComponent(item);
  expect(screen.getByRole("img")).toHaveAttribute("src", config.href);
});

test("renders the audio asset based on prop", async () => {
  const item = getItem("audio");
  renderComponent(item);
  expect(screen.getByTestId("audioControls")).toHaveAttribute(
    "src",
    config.url
  );
});

test("renders the video asset based on prop", async () => {
  const item = getItem("video");
  renderComponent(item);
  expect(screen.getByTestId("videoControls")).toHaveAttribute(
    "src",
    config.url
  );
});
