import React from "react";
import Link  from "next/link";

type AppProps = {
  id: string;
  name: string;
  price: number;
  image: string;
};

const ShoppingCard = ({id, name, price, image }: AppProps) => {

  return (
    <div className="card-container">
      <Link href={`/product/${id}`}>
        <a> <img src={image} alt="" /> </a>
      </Link>
      <div className="card--product"> {name}</div>
      <div className="card--price"> {price} </div>
    </div>
  );
}

export { ShoppingCard };