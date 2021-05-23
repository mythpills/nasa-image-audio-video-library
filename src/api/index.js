import axios from "axios";

export const updateUrl = async (items) => {
  const updateItems = async (item) => {
    return axios.get(item.href).then((resp) => {
      return { ...item, url: resp.data[0] };
    });
  };
  return Promise.all(items.map((item) => updateItems(item)));
};
export const fetchItems = async (query) => {
  return axios.get("https://images-api.nasa.gov/search", {
        params: {
          keywords: query.keywords,
          media_type: query.mediaType,
          ...(query.yearStart ? { year_start: query.yearStart } : {}),
        },
      });
};
