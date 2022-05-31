import React from 'react';

import { ICartProduct, IProduct , IPayment, IDesigner} from '@/types';

interface IMainContext {
  designers: IDesigner[];
  products: IProduct[];
  cart: ICartProduct[];
  removeCart: () => void,
  payMethods: IPayment[];
  addProductToCart: (product: ICartProduct) => void;
  updateProductCartAmount: (productKey: number, newAmount: number) => void;
  removeProductCart: (key: number, color:object, size:string) => void;
}

export const MainContext = React.createContext<IMainContext>({
  designers: [],
  products: [],
  cart: [],
  removeCart: () => {},
  payMethods: [],
  addProductToCart: () => {},
  updateProductCartAmount: () => {},
  removeProductCart: () => {},
});
