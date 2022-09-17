import React from "react";

type infoProduct = {
  name?: string;
  price?: number;
}

const Sku = ( {name, price}: infoProduct) => {
  return (
    <React.Fragment>
        <div className="card--product"> {name}</div>
        <div className="card--price"> {price} </div>
    </React.Fragment>
  );
}

export { Sku };