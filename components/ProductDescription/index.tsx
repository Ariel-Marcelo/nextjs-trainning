import React from "react";

type ProductDescriptionType = {
  description: string;
}
const ProductDescription = ({description}: ProductDescriptionType) => {
  return (
    <div className="product-card__description">
        <h3> About this avocado</h3>
        <hr></hr>
        <p>{description}</p>
      </div>
  );
}

export { ProductDescription };