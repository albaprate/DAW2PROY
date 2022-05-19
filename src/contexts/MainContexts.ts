import React from 'react';

import { ICartProduct, IProduct , IPayment, IDesigner} from '@/types';

interface IMainContext {
  designers: IDesigner[];
  products: IProduct[];
  cart: ICartProduct[];
  payMethods: IPayment[];
  addProductToCart: (product: ICartProduct) => void;
  updateProductCartAmount: (productKey: number, newAmount: number) => void;
  removeProductCart: (key: number) => void;
}

export const MainContext = React.createContext<IMainContext>({
  designers: [],
  products: [],
  cart: [],
  payMethods: [],
  addProductToCart: () => {},
  updateProductCartAmount: () => {},
  removeProductCart: () => {},
});
