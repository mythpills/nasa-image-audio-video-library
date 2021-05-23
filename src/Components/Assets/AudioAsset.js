import React from "react";
import { Box } from "@cruk/cruk-react-components";

const AudioAsset = ({ item }) => {
  return (
    <Box className="card">
      <figure>
        <audio data-testid="audioControls" controls src={item.url} preload="none">
          Your browser does not support the
          <code>audio</code> element. Here is a
          <a href={item.url}>link to the audio</a> instead.
        </audio>
        <p> <strong>Title:</strong> {item.data[0].title}</p>
        <ul>
          <li>
            <strong>Date Created:</strong> {item.data[0].date_created}
          </li>
          <li>
            <strong>Center:</strong> {item.data[0].center}
          </li>
          <li>
            <strong>Nasa Id:</strong> {item.data[0].nasa_id}
          </li>
        </ul>
      </figure>
    </Box>
  );
};

export default AudioAsset;
