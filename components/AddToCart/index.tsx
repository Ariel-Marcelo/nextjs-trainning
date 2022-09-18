import React from "react";
import { GlobalCountContex } from "@components/Context";
import { Types } from "@components/reducers";

type AppToCartProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  sku: string;
};

const AddToCart = ({
  id,
  name,
  price,
  image,
  sku,
}: AppToCartProps): JSX.Element => {
  const [counter, setCounter] = React.useState(1);
  const { dispatch } = React.useContext(GlobalCountContex);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCounter(Number(event.target.value));
  };
  
  const onSubmit = () => {
    dispatch({ type: Types.ADD_FOR_SALE, payload: { count: counter } });
    dispatch({
      type: Types.ADD_SHOPPING_CART,
      payload: {
        id: id,
        count: counter,
        name: name,
        price: price,
        image: image,
        sku,
      },
    });
  };

  return (
    <div className="add-to-cart">
      <input type="number" min="1" onChange={onChange} value={counter} />
      <button onClick={onSubmit}> Add to Cart </button>
    </div>
  );
};

export { AddToCart };
