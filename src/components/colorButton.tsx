import React from 'react';
import { IColor} from '@/types';
interface IColorButtonProps {
  color: IColor,
  productKey: number,
  setSelectedColor: (color: IColor) => void;
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

        key={`product-${props.productKey}-color-${props.color.name}`}
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
