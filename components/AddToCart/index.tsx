import React from 'react';

const AddToCart = () => {
  return (
    <div className='add-to-cart'>
      <input type="number" min="1"/> 
      <button> Add to Cart </button>
    </div>
  );
}

export { AddToCart };
