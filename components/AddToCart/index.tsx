import React from 'react';
import { GlobalCountContex } from '@components/Context';
import { Types } from '@components/reducers';

type AppToCartProps = {
  id: string;
}

const AddToCart = ({id}: AppToCartProps): JSX.Element => {
  const [ counter, setCounter ] = React.useState(1);
  const { dispatch } = React.useContext(GlobalCountContex);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCounter( Number(event.target.value) );
  }
  return (
    <div className='add-to-cart'>
      <input type="number" min="1" onChange={onChange} value={counter}/> 
      <button onClick={() => { 
        dispatch({type: Types.ADD_FOR_SALE, payload: {count: counter}})
      }}> Add to Cart </button>
    </div>
  );
}




export { AddToCart };
