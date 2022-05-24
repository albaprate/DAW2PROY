import React from 'react';

/* const ColorButton = ({color, product, setSelectedColor, colors}) => {
    //const [activeColor, setActiveColor] = useState(false);
    console.log(color);
  return (
    
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
                className={`mr-1 mb-3 rounded-full ${
                    color.active === true ? 'border border-black' : ''
                } p-0.5`}
                
              >
                <div
                  className={`w-3 h-3 rounded-full`}
                  style={{
                    backgroundColor: `${color.code}`,
                  }}
                />
              </div>
    
  );
}
 */
export default ColorButton;
