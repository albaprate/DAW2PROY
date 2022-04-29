import React from 'react';

import { ICartProduct, IProduct } from '@/types';

interface IMainContext {
  products: IProduct[];
  cart: ICartProduct[];
  addProductToCart: (product: ICartProduct) => void;
  updateProductCartAmount: (productKey: number, newAmount: number) => void;
  removeProductCart: (key: number) => void;
}

export const MainContext = React.createContext<IMainContext>({
  products: [],
  cart: [],
  addProductToCart: () => {},
  updateProductCartAmount: () => {},
  removeProductCart: () => {},
});
