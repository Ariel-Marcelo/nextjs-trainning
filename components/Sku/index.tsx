import React from "react";

type infoProduct = {
  name?: string;
  price?: number;
}

const Sku = ( {name, price}: infoProduct) => {
  return (
    <React.F