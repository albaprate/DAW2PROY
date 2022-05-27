import React from 'react';
import { IColor, IProduct } from '@/types';
interface IColorButtonProps {
  color: IColor,
  product: IProduct[],
  setSelectedColor: () => void;
  colors: IColor[]
}

const ColorButton = (props: IColorButtonProps) => {

  return (
    <div
        onClick={() => {
            props.color.active = true;
            props.setSelectedColor(props.color);
            props.colors.forEach(color2 => {
              if (color2.name !== props.color?.name){
                  color2.active = false;
              }
            })
        }}

        key={`product-${props.product.keys}-color-${props.color.name}`}
        className={`mr-1 my-2 rounded-full ${
        props.color.active === true ? 'border border-black' : ''
        } p-0.5`}
        >
        <div
          className={`w-3 h-3 rounded-full `}
          style={{
              backgroundColor: `${props.color.code}`,
          }}
        />
    </div>
      

    
  );
}

export default ColorButton;
