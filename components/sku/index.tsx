import React from "react";

type sku = {
  sku?: string;
}

const Sku = ( {sku}: sku) => {
  return (
    <div> {sku} hello </div>
  );
}

export { Sku };