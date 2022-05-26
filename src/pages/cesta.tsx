import React, { useContext, useState } from 'react';

import ProductToCart from '@/components/productToCart';
import { MainContext } from '@/contexts/MainContexts';
import Layout from '@/templates/Layout';
import ModalOrder from '@/components/ModalOrder';
import { Button } from 'antd';

export const Cesta = () => {
  const values = useContext(MainContext);
  console.log(values);
  const [openModal, setOpenModal] = useState(false);

  const total = values.cart.reduce(
    (prev, cartProduct) => prev + cartProduct.amount * cartProduct.productPrice,
    0
  );
  const amount = values.cart.reduce(
    (prev, cartProduct) => prev + cartProduct.amount,
    0
  );
  return (
    <Layout>
      {openModal && <ModalOrder setOpenModal={setOpenModal}/>} 
  
      <div className="m-auto flex w-3/6 flex-col py-6 px-3 text-xs lg:w-7/12 md:w-full sm:w-full xs:w-full">
        <h3 className="mb-4 items-center text-base uppercase">
          Productos de la compra
        </h3>
        <div>
          <div className="flex justify-between">
            <p>{amount} artículos</p>
            <p className="tracking-wide">{`${total} EUR`}</p>
          </div>
          <div className="flex justify-between">
            <p>Envíos</p>
            <p>calculados en el pago</p>
          </div>
          <div className="mt-4 flex justify-between text-base">
            <p className="uppercase tracking-wide">total</p>
            <p className="tracking-wide">{`${total} EUR`}</p>
          </div>

          <div className='flex m-auto justify-center'>
            <Button
            className='mt-8 sm:h-4 px-4 mb-8'
              type="primary"
              disabled={values.cart.length === 0}
              onClick={() => {
                if (values.cart.length !== 0){
                  setOpenModal(true);
                }  
              }}
            >
              {values.cart.length !== 0 ? 'Comprar' : 'Añade productos'}
            </Button> 
          
          </div>
         
        </div>
        {values.cart.map((cartProduct) => {
          const product = values.products.find(
            (prod) => prod.key === cartProduct.productKey
          );
          if (!product) {
            throw Error();
          }
          return (
            <ProductToCart
              key={product.key}
              image={product.variations[0]?.images[0] || ''}
              name={product.name}
              colorName={cartProduct.color.name}
              color={cartProduct.color.code}
              size={cartProduct.size}
              units={cartProduct.amount}
              price={product.price}
              onClick={() => values.removeProductCart(product.key)}
              onAmountUpdate={(newAmount) =>
                values.updateProductCartAmount(product.key, newAmount)
              }
            />
          );
        })}
      </div>
       
    </Layout>
  );
};

export default Cesta;
