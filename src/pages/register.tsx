import React from 'react';

import { RegistrationForm } from '@/components/RegistrationForm';
import Layout from '@/templates/Layout';

const register = () => {
  return (
    <Layout>
      <div className="flex min-w-min flex-col items-center">
        <p className="font-semibold uppercase">Registro</p>
        <RegistrationForm></RegistrationForm>
      </div>
    </Layout>
  );
};

export default register;
