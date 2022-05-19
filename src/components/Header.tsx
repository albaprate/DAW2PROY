import React, { useContext } from 'react';

import { ShoppingOutlined } from '@ant-design/icons';
import Link from 'next/link';

import { MainContext } from '@/contexts/MainContexts';

import { HeaderItem } from './HeaderItem';

export const Header = () => {
  const values = useContext(MainContext);

  console.log(values.cart);

  return (
    <div className="flex justify-between p-5 uppercase">
      <div className="flex items-center">
        <ul className="flex flex-wrap text-sm">
          <li className="mr-6">{/* <button type="button">Menu</button> */}</li>
          <li className="mr-6">
            <Link href="/">
              <a className="font-lexend text-4xl text-black">Fa-e</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-start">
        <ul className="flex flex-wrap text-sm">
          <HeaderItem url="/products" name="diseñadores" />
          {/*   <HeaderItem url="/sesioninit" name="iniciar sesión" /> */}
          <Link href="/cesta">
            <a className="flex items-center border-none text-gray-700 hover:text-gray-900">
              <ShoppingOutlined className="mr-0.5 text-sm" />
              <span>
                {values.cart.reduce(
                  (prev, cartProduct) => prev + cartProduct.amount,
                  0
                )}
              </span>
            </a>
          </Link>
        </ul>
      </div>
    </div>
  );
};
