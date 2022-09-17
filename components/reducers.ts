export enum Types {
  ADD_SHOPPING_CART = "ADD_SHOPPING_CART",
  REMOVE_SHOPPING_CART = "REMOVE_SHOPPING_CART",
  ADD_FOR_SALE = "ADD_FOR_SALE",
  REMOVE_FOR_SALE = "REMOVE_FOR_SALE",
}

const productReducer = (
  state: ProductType[], 
  action: ProductActions | ShoppingCartActions
  ) => {
  console.log("This state is product: ",state);
  switch (action.type) {
    case "ADD_SHOPPING_CART":
      console.log("payload for add shopping cart",action.payload.count);
      if ( state?.find((item)=> item.id == action.payload.id)) {
        return (
          state.map( 
            (item) => { 
              if (item.id == action.payload.id) {
                item.count += action.payload.count; 
              } 
               return item; 
            }
          )
        );
      } else {
        const newItem = { id: action.payload.id, count: action.payload.count };
        return [...state, newItem];
      }
    case "REMOVE_SHOPPING_CART":
      return [
        ...state.filter((item) => item.id !== action.payload.id),
      ];

    default:
      return state;
  }
};

const forSaleReducer = (
  state: number, 
  action: ProductActions | ShoppingCartActions
  ) => {
  console.log("This state is for sale: ",state);
  switch (action.type) {
    case "ADD_FOR_SALE":
      return state + action.payload.count;
    case "REMOVE_FOR_SALE":
      return state - 1;
    default: 
      return state;
  }
}

export { productReducer, forSaleReducer };