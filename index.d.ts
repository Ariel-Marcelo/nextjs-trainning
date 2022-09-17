// Types for Context
type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};
enum Types {
  ADD_SHOPPING_CART = "ADD_SHOPPING_CART",
  REMOVE_SHOPPING_CART = "REMOVE_SHOPPING_CART",
  ADD_FOR_SALE = "ADD_FOR_SALE",
  REMOVE_FOR_SALE = "REMOVE_FOR_SALE",
}

type ProductType = {
  id: string;
  count: number;
};

type ProductPayload = {
  [Types.ADD_SHOPPING_CART]: {
    id: string;
    count: number;
  };
  [Types.REMOVE_SHOPPING_CART]: {
    id: string;
  };
};

type ProductActions =
  ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

type ShoppingCartPayload = {
    [Types.ADD_FOR_SALE]: {
      count: number
    };
    [Types.REMOVE_FOR_SALE]: undefined;
}

type ShoppingCartActions = 
  ActionMap<ShoppingCartPayload>[keyof ActionMap<ShoppingCartPayload>];

type initialStateType = {
  forSale: number,
  items: ProductType[]
}

// Types for children nodes
type ChildrenType = {
  children: React.ReactNode;
}
// Product Data
type Url = string;
type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[];

type TProductId = string;

type TProductAttributes = {
  description: string;
  shape: string;
  hardiness: string;
  taste: string;
};

type TProduct = {
  id: TProductId;
  name: string;
  sku: string;
  price: number;
  image: Url;
  attributes: TProductAttributes;
};

type TAPIAVODetailResponse = TProduct;

type TAPIAvoResponse = {
  lenght: number;
  data: TProduct[];
  error?: string;
};
