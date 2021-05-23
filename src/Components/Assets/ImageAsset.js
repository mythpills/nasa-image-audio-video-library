import React from "react";
import { Box } from "@cruk/cruk-react-components";

const ImageAsset = ({ item }) => {
  return (
    <Box className="card">
      <img src={item.links[0].href} alt={item.data[0].title} />
    </Box>
  );
};

export default ImageAsset;
