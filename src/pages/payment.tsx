import React, { useContext } from 'react';
import Layout from '@/templates/Layout';
import PayMethodCard from '@/components/payMethodCard';
import { MainContext } from '@/contexts/MainContexts';


const payment = () => {
    const values = useContext(MainContext);
  return (
    <Layout>
        <div className='w-1/4 m-auto mb-8'>
        <p className='text-xl uppercase'>MÉTODOS DE PAGO</p>
            <div className=" w-1/4  lg:w-2/4  xl:w-3/4 mb-8 grid grid-cols-2 gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1">
                {values.payMethods.map((payMethod) => {
                return (
                    <div key={payMethod.key} className="">
                   
                        <PayMethodCard
                            key={payMethod.key}
                            name={payMethod.name}
                            image={payMethod.image}
                        />
                   
                    </div>
                );
                })}
            </div>
            <p className='text-xl uppercase mt-4'>MOMENTO DEL COBRO</p>
            <p>Tu compra se cobrará en el momento en el que se envíe tu pedido.</p>
            <p>Si has pagado con Paypal o con Tarjeta Regalo, el cobro se realizará justo al finalizar la compra.</p>
            <p>Algunas entidades bancarias pueden mostrar una pre-autorización y un cargo real posterior. Este importe se desbloqueará de forma automática. Si no fuera así, te recomendamos que te pongas en contacto con tu entidad bancaria para que agilicen el desbloqueo de la pre-autorización.</p>
            
        </div>
    </Layout>
  );
}
/* {values.products.map((product) => {
    return (
      <Link key={product.key} href={`/products/${product.key}`} passHref>
        <a>
          <ProductCard
            key={product.key}
            id={product.key}
            name={product.name}
            url={product.variations[0]?.images[0] || ''}
            price={`${product.price}€`}
          />
        </a>
      </Link>
    );
  })} */
export default payment;
