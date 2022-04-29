import React, { useContext } from 'react';

import ProductToCart from '@/components/productToCart';
import { MainContext } from '@/contexts/MainContexts';
import Layout from '@/templates/Layout';

export const Cesta = () => {
  const values = useContext(MainContext);
  console.log(values);
  // const [openModal, setOpenModal] = useState(false);

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
          <button
            className="mt-6 mb-3 w-full bg-black  py-3 text-white"
            onClick={() => {
              // setOpenModal(true);
            }}
          >
            Comprar
          </button>
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
              color={cartProduct.color.name}
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
      {/*  {openModal && <ModalOrder setOpenModal={setOpenModal} />} */}
    </Layout>
  );
};

export default Cesta;
