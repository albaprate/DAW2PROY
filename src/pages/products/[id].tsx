import { useCallback, useContext, useMemo, useState } from 'react';

import { Button, Select } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ColorButton from '@/components/colorButton';

import { MainContext } from '@/contexts/MainContexts';
import Layout from '@/templates/Layout';
import { IColor, IProduct } from '@/types';

const { Option } = Select;

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const values = useContext(MainContext);

  const [selectedColor, setSelectedColor] = useState<IColor>();
  const [selectedSize, setSelectedSize] = useState();
  
  const product = useMemo<IProduct | undefined>(() => {
    return values.products.find((prod) => prod.key === Number(id));
  }, [values.products, id]);  
  
 /*  const colorExist = (colorCode:string, preColors:Array<IColor>) => {
    return preColors.find(colorObject => {
      colorObject.code === colorCode
    });
    
  } */ 
  const colors = useMemo(() => {
    if (product) {
      const preColors = new Array<IColor>();
      product.variations.forEach((variation) => 
      {
       if(!preColors.find(colorObj => colorObj.name === variation.color.name)){
        preColors.push(variation.color)
       }
       
      }); 
      return(preColors);
    }
    return [];
  }, [product]);

  const sizes = useMemo(() => {
    if (product && selectedColor) {
      console.log(selectedColor);
      return product.variations
        .filter((variation) => variation.color.name === selectedColor.name)
        .map((variation) => variation.size);
    }
    
    return [];
  }, [product, selectedColor]);


  const productImage = useMemo<string>(() => {
    if (product) {
      return product.variations[0]?.images[0] || '';
    }
    return '';
  }, [product]); 

/* 
  useEffect(() => {
    console.log("antes", colors)
   colors.forEach(color => {
     if (color.name !== selectedColor?.name){
       color.active = false;
     }
   })
   console.log("despues", colors)
  }, [selectedColor]); */
  

  const addProductToCart = useCallback(
    (productToAdd: IProduct, color?: IColor, size?: string) => {
      if (color && size) {
        values.addProductToCart({
          productKey: productToAdd.key,
          amount: 1,
          productPrice: productToAdd.price,
          size,
          color,
        });
      }
    },
    [values]
  );

  if (!product) {
    return <p>Product not found</p>;
  }


  return (
    <Layout>
      <div className="flex flex-row w-3/4 m-auto">
        <div className="flex w-2/4 flex-col">
          <div id="image-carousel" className="">
          
            <Image
              key={product.key}
              alt=""
              src={productImage || ''}
              layout="responsive"
              width="500"
              height="600"
              className="object-cover duration-300  hover:opacity-50 "
            />
          </div>
        </div>

        <div id="product-information" className="flex w-2/4 flex-col pl-8 mt-3">
          <h1 className='text-xl uppercase'>{product.name}</h1>
          <p>{`${product.price}€`}</p>
          <div className="flex flex-col">
            <p className='mb-2 mt-4'>{selectedColor?.name}</p>
            {colors.map((color) => (
              <ColorButton
                color = {color}
                product = {product}
                setSelectedColor = {setSelectedColor}
                colors = {colors}
              />
             /*  <div
                onClick={() => {
                  setSelectedColor(color);
                }}
                key={`product-${product.key}-color-${color.name}`}
                className={`mr-1 rounded-full ${
                  selectedColor ? 'border border-black' : ''
                } p-0.5`}
                
              >
                <div
                  className={`w-3 h-3 rounded-full `}
                  style={{
                    backgroundColor: `${color.code}`,
                  }}
                />
              </div> */
            ))}
            
          </div>
      
          <Select
          className='mt-4'
            style={{ width: 70 }}
            onChange={(value) => {
              setSelectedSize(value);
            }}
            value={selectedSize}
          >
            {sizes.map((size) => (
              
              <Option key={`product-${product.key}-size-${size}`} value={size}>
                {size}
              </Option>
            ))}
          </Select>
          
          <Button
          className='mt-8'
            type="primary"
            disabled={!selectedColor || !selectedSize}
            onClick={() => {
              addProductToCart(product, selectedColor, selectedSize);
            }}
          >
            Comprar
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
