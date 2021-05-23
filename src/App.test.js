import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import App from "./App";
import { updateUrl, fetchItems } from "./api/index";

jest.mock("./api/index");

const config = {
  items: {
    data: {
      collection: {
        items: [
          {
            links: [
              {
                href:
                  "https://images-assets.nasa.gov/image/KSC-2012-2734/KSC-2012-2734~thumb.jpg",
              },
            ],
          },
        ],
      },
    },
  },
  updatedItems: {
    data: {
      collection: {
        items: [
          {
            links: [
              {
                href:
                  "https://images-assets.nasa.gov/image/KSC-2012-2734/KSC-2012-2734~thumb.jpg",
              },
            ],
          },
        ],
      },
    },
  },
  typeVal: (ele, val) => {
    return waitFor(() => {
      fireEvent.change(ele, {
        target: {
          value: val,
        },
      });
    });
  },
};

test("renders app", () => {
  render(<App />);

  const header = screen.getByText(/cruk technical exercise - react/i);
  const keywordsInput = screen.getByText(/keywords/i);
  const mediaTypeInput = screen.getByText(/media type/i);
  const yearStartInput = screen.getByText(/year start/i);
  const submitButton = screen.getByRole("button");

  expect(header).toBeInTheDocument();
  expect(keywordsInput).toBeInTheDocument();
  expect(mediaTypeInput).toBeInTheDocument();
  expect(yearStartInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test("makes the correct api calls to fetch data for component", async () => {
  fetchItems.mockResolvedValueOnce(config.items);
  updateUrl.mockResolvedValueOnce({
    ...config.items,
    url: "http://someWebsite/1.jpg",
  });
  render(<App />);
  const keywords = screen.getAllByRole("textbox")[0];
  const mediaType = screen.getByRole("combobox");
  const yearStart = screen.getAllByRole("textbox")[1];
  const submit = screen.getByRole("button");

  await config.typeVal(keywords, "sun");
  await config.typeVal(mediaType, "image");
  await config.typeVal(yearStart, "2000");
  await waitFor(() => {
    fireEvent.click(submit);
  });

  expect(fetchItems).toHaveBeenCalledWith({
    keywords: "sun",
    mediaType: "image",
    yearStart: "2000",
  });
  expect(updateUrl).toHaveBeenCalledWith([
    {
      links: [
        {
          href:
            "https://images-assets.nasa.gov/image/KSC-2012-2734/KSC-2012-2734~thumb.jpg",
        },
      ],
    },
  ]);
});
