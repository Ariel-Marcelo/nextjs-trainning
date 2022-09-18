import React from 'react';
import { GlobalCountContex } from '@components/Context';
import { Types } from '@components/reducers';

type AppToCartProps = {
  id: string;

  count: number;
}

const DispatchToCart = ({id, count}: AppToCartProps): JSX.Element => {
  const { dispatch } = React.useContext(GlobalCountContex);

  const onDispatch = () => {
    dispatch({type: Types.REMOVE_FOR_SALE})
    dispatch({ type: Types.REMOVE_SHOPPING_CART, payload: { id: id} });
  }

  return (
    <div className='dispatch-to-cart'>
      <input  type="text" readOnly value={count}/> 
      <button onClick={onDispatch}> Dispatch to Cart </button>
    </div>
  );
}




export { DispatchToCart };
