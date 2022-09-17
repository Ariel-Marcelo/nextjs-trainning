import React from 'react';
import { GlobalCountContex } from '@components/Context';
import { Types } from '@components/reducers';

type AppToCartProps = {
  id: string;
}

const AddToCart = ({id}: AppToCartProps): JSX.Element => {
  const [ counter, setCounter ] = React.useState(1);
  const { state, dispatch } = React.useContext(GlobalCountContex);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCounter( Number(event.target.value) );
  }
  const onSubmit = () => {
    dispatch({type: Types.ADD_FOR_SALE, payload: {count: counter}})
    dispatch({ type: Types.ADD_SHOPPING_CART, payload: { id: id, count: counter } });
  }
  const print = () => {
    console.log(state);
  }

  return (
    <div className='add-to-cart'>
      <input type="number" min="1" onChange={onChange} value={counter}/> 
      <button onClick={onSubmit}> Add to Cart </button>
      <button onClick={print}> STATE </button>
    </div>
  );
}




export { AddToCart };
