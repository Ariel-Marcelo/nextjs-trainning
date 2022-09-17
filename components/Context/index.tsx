import React from "react";
import { productReducer, forSaleReducer } from "@components/reducers";

const initialState = {
  forSale: 0, 
  items: []
};

const  GlobalCountContex = React.createContext<{
  state: initialStateType;
  dispatch: React.Dispatch<ProductActions | ShoppingCartActions>;
}>({
  state: initialState,
  dispatch: () => null
});


const mainReducer = ({forSale, items}: initialStateType, action: ProductActions |  ShoppingCartActions ) => ({
  forSale: forSaleReducer(forSale, action),
  items: productReducer(items, action)
});

const GlobalCountProvider  = ({ children }: ChildrenType) => {

  const [state, dispatch] = React.useReducer(mainReducer, initialState);

  return (
    <GlobalCountContex.Provider value={{state, dispatch}}>
      {children}
    </GlobalCountContex.Provider>
  );
}

export { GlobalCountContex, GlobalCountProvider };
