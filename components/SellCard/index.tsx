import React from "react";
import { AddToCart } from "../AddToCart";

type AppProps = {
  id: string;
  name: string;
  price: number;
  sku: string;
};

const SellCard = ({ id, name, price, sku }: AppProps): JSX.Element => {
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
      <AddToCart id= {id} />
    </React.Fragment>
  );
};

export { SellCard };
