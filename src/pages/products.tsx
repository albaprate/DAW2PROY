import React, { useContext } from 'react';

import Link from 'next/link';

import { ProductCard } from '@/components/productCard';
import { MainContext } from '@/contexts/MainContexts';
import Layout from '@/templates/Layout';

const Products = () => {
  const values = useContext(MainContext);
  return (
    <Layout>
      {values.designers.map((designer) => {
        return (
          <div key={designer.key}  className="mb-40">
            <div className='flex justify-center mb-0 border-t-2  border-black'>
            <p className='text-center uppercase mb-0 lg:my-2 lg:text-base font-lexend text-2xl text-black'>{designer.name}</p>
            </div>
             
            
             <div className="mb-16 mt-0 grid grid-cols-4 gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1">
              {designer.products.map((product) => {
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
              })}
            </div> 
          </div>
         
        )
      })}
      {/* <p>diseñador 1</p>
      <div className="my-16 grid grid-cols-4 gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1">
        {values.products.map((product) => {
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
        })}
      </div> */}
    </Layout>
  );
};

export default Products;
