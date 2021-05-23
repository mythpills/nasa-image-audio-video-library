import React from "react";
import Asset from "./Asset";
import {Loader} from "@cruk/cruk-react-components"

export const AssetGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Loader/>
  ) : (
    <section className='cards'>
      {items.map((item, index) => (
        <Asset key={`item-${index}`} item={item} />
      ))}
    </section>
  );
};
