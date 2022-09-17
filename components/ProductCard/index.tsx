import React from "react";
type ProductCardProps = {
  children: JSX.Element;
  image: string;
  description: string;
}
const ProductCard = ({children, image, description}: ProductCardProps) => {
  return (
    <div className="product-card">
      <img src={image}/>
      <div className="product-card__sell-card">
        {children}
      </div>
      <div className="product-card__description">
        <h3> About this avocado</h3>
        <hr></hr>
        <p>{description}</p>
      </div>
    </div>
  );
}

export { ProductCard };