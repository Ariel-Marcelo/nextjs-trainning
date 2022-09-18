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
        const newItem = { 
          id: action.payload.id, 
          count: action.payload.count,
          price: action.payload.price,
          name: action.payload.name,
          image: action.payload.image,
          sku: action.payload.sku
        };
        return [...state, newItem];
      }
    case "REMOVE_SHOPPING_CART":
      const myItem = state.find((item) => item.id == action.payload.id); 
      console.log("this is myItem: ", myItem);
      if ( myItem && myItem.count > 0 ) {
        return (
          state.map( 
            (item) => { 
              if (item.id == action.payload.id) {
                item.count -= 1; 
              } 
               return item; 
            }
          )
        );
      } else {  
        if (myItem) {
          return [
            ...state.filter((item) => item.id !== action.payload.id),
          ];
        }
      }
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