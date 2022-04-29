import React from 'react';

import Image from 'next/image';

interface IGalleryProduct {
  key: number;
  id: number;
  url: string;
  name: string;
  price: string;
}
export const ProductCard = (props: IGalleryProduct) => {
  return (
    <>
      <div className="h-auto">
        <Image
          key={props.id}
          alt=""
          src={props.url}
          layout="responsive"
          width="500"
          height="600"
          className="object-cover duration-300 hover:scale-150 hover:opacity-50 "
        />
        <div className="flex justify-center p-0 text-sm uppercase ">
          <div className="flex flex-wrap ">
            <h3 className="mb-1 mr-3 font-medium text-gray-900">
              {props.name}
            </h3>
            <p className="mb-1  font-medium text-gray-900">{props.price}</p>
          </div>
        </div>
      </div>
    </>
  );
};
