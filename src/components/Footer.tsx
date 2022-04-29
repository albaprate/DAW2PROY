import React from 'react';

import { FooterSection } from './FooterSection';

export const Footer = () => {
  return (
    <footer className=" mt-20 border-t border-black  px-3 uppercase">
      <div className="container m-auto max-w-6xl">
        <div className="flex flex-wrap">
          <FooterSection
            title="company"
            items={[
              {
                name: 'about us',
                url: '#',
              },
              {
                name: 'our services',
                url: '#',
              },
              {
                name: 'privacy policy',
                url: '#',
              },
              {
                name: 'affiliate program',
                url: '#',
              },
            ]}
          />
          <FooterSection
            title="get help"
            items={[
              {
                name: 'FAQ',
                url: '#',
              },
              {
                name: 'shipping',
                url: '#',
              },
              {
                name: 'returns',
                url: '#',
              },
              {
                name: 'order status',
                url: '#',
              },
              {
                name: 'payment options',
                url: '#',
              },
            ]}
          />
          <FooterSection
            title="online shop"
            items={[
              {
                name: 'watch',
                url: '#',
              },
              {
                name: 'bag',
                url: '#',
              },
              {
                name: 'shoes',
                url: '#',
              },
              {
                name: 'dress',
                url: '#',
              },
            ]}
          />
          <FooterSection
            title="follow us"
            items={[
              {
                name: 'instagram',
                url: '#',
              },
              {
                name: 'twitter',
                url: '#',
              },
              {
                name: 'facebook',
                url: '#',
              },
              {
                name: 'pinterest',
                url: '#',
              },
            ]}
          />
        </div>
      </div>
    </footer>
  );
};
