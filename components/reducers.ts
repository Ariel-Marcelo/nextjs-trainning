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
  switch (action.type) {
    case "ADD_SHOPPING_CART":
      return [
        ...state,
        {
          id: action.payload.id,
          count: action.payload.count,
        },
      ];
    case "REMOVE_SHOPPING_CART":
      return [
        ...state.filter((item) => item.id !== action.payload.id),
      ];
  }
};

const forSaleReducer = (
  state: number, 
  action: ProductActions | ShoppingCartActions
  ) => {
  switch (action.type) {
    case "ADD_FOR_SALE":
      return state + action.payload.count;
    case "REMOVE_FOR_SALE":
      return state - 1;
  }
}

export { productReducer, forSaleReducer };