import React from 'react';

import { FooterSection } from './FooterSection';

export const Footer = () => {
  return (
    <footer className=" mt-20 border-t border-black  px-3 uppercase">
      <div className="container m-auto max-w-6xl">
        <div className="flex flex-wrap">
          <FooterSection
            title="empresa"
            items={[
              {
                name: 'Quiénes somos',
                url: '/aboutUs',
              },
              {
                name: 'oficinas',
                url: '/offices',
              },
              {
                name: 'trabaja con nosotros',
                url: '/workWithUs',
              },
            ]}
          />
          <FooterSection
            title="ayuda"
            items={[
              {
                name: 'FAQ',
                url: '/questions',
              },
              {
                name: 'envío',
                url: '/shipping',
              },
              {
                name: 'pago',
                url: '/payment',
              },
            ]}
          />
           <FooterSection
            title="síguenos"
            items={[
              {
                name: 'instagram',
                url: 'https://www.instagram.com/',
              },
              {
                name: 'twitter',
                url: 'https://twitter.com/?lang=es',
              },
              {
                name: 'facebook',
                url: 'https://es-es.facebook.com/',
              },
              {
                name: 'pinterest',
                url: 'https://www.pinterest.es/',
              },
            ]}
          />
          <FooterSection
            title="políticas"
            items={[
              {
                name: 'políticas de privacidad',
                url: '#',
              },
              {
                name: 'configuración de cookies',
                url: '#',
              },
            ]}
          />
         
        </div>
      </div>
    </footer>
  );
};
