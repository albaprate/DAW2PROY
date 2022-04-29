import React, { useContext } from 'react';

import Link from 'next/link';

import { ProductCard } from '@/components/productCard';
import { MainContext } from '@/contexts/MainContexts';
import Layout from '@/templates/Layout';

const Products = () => {
  const values = useContext(MainContext);
  return (
    <Layout>
      <p>diseñador 1</p>
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
      </div>
    </Layout>
  );
};

export default Products;
