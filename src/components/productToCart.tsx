import React from 'react';

import { DeleteOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import Image from 'next/image';

interface IProductToCart {
  key: number;
  image: string;
  alt?: string;
  name: string;
  colorName?: string;
  color?: string;
  size?: string;
  units: number;
  price: number;
  onClick: () => void;
  onAmountUpdate: (newAmount: number) => void;
}

const ProductToCart = (props: IProductToCart) => {
  return (
    <div className=" my-3 flex justify-between text-sm xs:my-4">
      <div className="relative max-h-40  w-1/6 self-start  bg-slate-500 sm:max-h-6">
        <Image
          className="object-cover"
          layout="responsive"
          src={props.image}
          alt="hola"
          width="120"
          height="150"
        />
      </div>
      <div className=" flex w-5/6 flex-col justify-between pl-5 pt-6 sm:pt-0">
        <div className="flex justify-between">
          <div className=''>
            <h3>{props.name}</h3>
            <div className='flex align-middle'>
            <div
              className={`w-3 h-3 rounded-full`}
              style={{
                backgroundColor: `${props.color}`,
              }}
            ></div>
           {/*  <h5 className="text-xs ml-1">{props.colorName}</h5> */}
           
            </div>
           
          </div>

          <div>
            <h3>
              <DeleteOutlined className="text-sm" onClick={props.onClick} />
            </h3>
          </div>
        </div>

        <div className="mt-3 flex  justify-between">
          <div className="flex items-center">
            <p className="pr-4">
              Size:
              <span style={{ marginLeft: 5 }}>{props.size}</span>
            </p>
            <p className="pr-3">
              Units:
              <Input
                type="number"
                size="small"
                style={{ width: 60, marginLeft: 5 }}
                value={props.units}
                onChange={(newValue) =>
                  props.onAmountUpdate(Number(newValue.target.value))
                }
              />
            </p>
          </div>
          <div>{props.price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductToCart;
