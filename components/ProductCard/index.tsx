import React from "react";
type ProductCardProps = {
  children: JSX.Element;
  image: string;
}
const ProductCard = ({children, image }: ProductCardProps) => {
  return (
    <div className="product-card">
      <img src={image}/>
      <div className="product-card__sell-card">
        {children}
      </div>
    </div>
  );
}

export { ProductCard };