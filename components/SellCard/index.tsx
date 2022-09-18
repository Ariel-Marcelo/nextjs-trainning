import React from "react";
import { AddToCart } from "../AddToCart";

type AppProps = {
  name: string;
  price: number;
  sku: string;
  children: JSX.Element;
};

const SellCard = ({ name, price, sku, children }: AppProps): JSX.Element => {
  return (
    <React.Fragment>
      <div className="sell-card--product">
        {" "}
        <h2> {name} </h2>
      </div>
      <div className="sell-card--price"> {price} </div>
      <div className="sell-card--sku">
        {" "}
        <p> SKU: {sku} </p>
      </div>
      {children}
    </React.Fragment>
  );
};

export { SellCard };
