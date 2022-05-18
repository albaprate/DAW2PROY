import React from 'react';
import Layout from '@/templates/Layout';

const offices = () => {
  return (
    <Layout>
          <div className='w-1/4 m-auto mb-8'>
            <p className='text-xl uppercase'>oficinas</p>
            <p className='underline'>España - Vinaròs</p>
            <p className='mb-0'>c/ maria auxiliadora 25</p>
            <p className='mb-0'>12500 Vinaròs</p>
            <p className='mb-0'>Tel. +34 633 453 596</p>
            <p className='mb-0'>Fax 49 40 30963340</p>
            <p>Filial</p>
          </div>
    </Layout>
  );
}

export default offices;
