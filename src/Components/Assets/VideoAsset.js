import React from "react";
import { Box } from "@cruk/cruk-react-components";

const VideoAsset = ({ item }) => {
  return (
    <Box className="card">
      <video controls>
        <source data-testid="videoControls" src={item.url} type="video/mp4" preload="none" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </Box>
  );
};

export default VideoAsset;
