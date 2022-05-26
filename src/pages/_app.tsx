import { useCallback, useState } from 'react';

import { AppProps } from 'next/app';

import { MainContext } from '@/contexts/MainContexts';
import '../styles/global.css';
import 'antd/dist/antd.css';
import { ProductsData } from '@/data/products';
import { PayMethodsData } from '@/data/payMethods';
import { ICartProduct } from '@/types';
import { DesignersData } from '@/data/designers';


const MyApp = ({ Component, pageProps }: AppProps) => {
  const [cart, setCart] = useState<ICartProduct[]>([]);

  const updateProductCartAmount = useCallback(
    (productInCartKey: number, newAmount: number) => {
      const cartCopy = [...cart];
      const productInCart = cartCopy.find(
        (cartProduct) => cartProduct.productKey === productInCartKey
      );
      if (productInCart) {
        productInCart.amount = newAmount;
        setCart(cartCopy);
      }
    },
    [cart]
  );

  const addProductToCart = useCallback(
    (productToAdd: ICartProduct) => {
      const product = cart.find(
        (cartProduct) => cartProduct.productKey === productToAdd.productKey && cartProduct.color === productToAdd.color && cartProduct.size === productToAdd.size
      );
      if (product) {
        product.amount += productToAdd.amount;
        setCart(
          cart.map((cartProduct) => {
            if (cartProduct.productKey === productToAdd.productKey) {
              return product;
            }
            return cartProduct;
          })
        );
      } else {
        setCart([...cart, productToAdd]);
      }
    },
    [cart]
  );

  const removeProductCart = useCallback(
    (key: number) => {
      const productIWant = cart.filter(
        (cartProduct) => cartProduct.productKey !== key
      );
      setCart(productIWant);
    },
    [cart]
  );

  const removeCart = () => {
    setCart([]);
  }


  return (
    <MainContext.Provider
      value={{
        designers: DesignersData,
        products: ProductsData,
        cart,
        removeCart,
        payMethods: PayMethodsData,
        addProductToCart,
        removeProductCart,
        updateProductCartAmount,
      }}
    >
      <Component {...pageProps} />
    </MainContext.Provider>
  );
};

export default MyApp;
