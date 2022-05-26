import React from 'react';

const ColorButton = ({color, product, setSelectedColor, colors}) => {
    //const [activeColor, setActiveColor] = useState(false);
    console.log(color);
  return (
    <div className='flex flex-row'>
        <div
                onClick={() => {
                  color.active = true;
                  setSelectedColor(color);
                  colors.forEach(color2 => {
                    if (color2.name !== color?.name){
                      color2.active = false;
                    }
                  })
                  
                  //setActiveColor(true);
                }}
                key={`product-${product.key}-color-${color.name}`}
                className={`mr-1 my-2 rounded-full ${
                    color.active === true ? 'border border-black' : ''
                } w-5 h-5 flex`}
                
              >
                <div
                  className={`w-5 h-5 rounded-full p-0.5`}
                  style={{
                    backgroundColor: `${color.code}`,
                  }}
                />
              </div>
    </div>
      

    
  );
}

export default ColorButton;
