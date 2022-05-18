import React from 'react';

import { ICartProduct, IProduct , IPayment} from '@/types';

interface IMainContext {
  products: IProduct[];
  cart: ICartProduct[];
  payMethods: IPayment[];
  addProductToCart: (product: ICartProduct) => void;
  updateProductCartAmount: (productKey: number, newAmount: number) => void;
  removeProductCart: (key: number) => void;
}

export const MainContext = React.createContext<IMainContext>({
  products: [],
  cart: [],
  payMethods: [],
  addProductToCart: () => {},
  updateProductCartAmount: () => {},
  removeProductCart: () => {},
});
