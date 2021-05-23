import React from "react";
import ImageAsset from "../Assets/ImageAsset";
import AudioAsset from "../Assets/AudioAsset";
import VideoAsset from "../Assets/VideoAsset";

const Asset = ({ item }) => {
  const media_type = item.data[0].media_type;
  switch (media_type) {
    case "image":
      return <ImageAsset item={item} />;
    case "audio":
      return <AudioAsset item={item} />;
    case "video":
      return <VideoAsset item={item} />;
    default:
      <div></div>;
  }
};

export default Asset;
