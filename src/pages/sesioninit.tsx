import React from 'react';

import { FormSesionInit } from '@/components/FormSesionInit';
import Layout from '@/templates/Layout';

const sesioninit = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <p className="font-semibold uppercase">iniciar sesión</p>

        <FormSesionInit></FormSesionInit>
      </div>
    </Layout>
  );
};

export default sesioninit;
