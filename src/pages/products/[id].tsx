import { useCallback, useContext, useMemo, useState } from 'react';

import { Button, Select } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { MainContext } from '@/contexts/MainContexts';
import Layout from '@/templates/Layout';
import { IColor, IProduct, IDesigner } from '@/types';

const { Option } = Select;

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const values = useContext(MainContext);

  const [selectedColor, setSelectedColor] = useState<IColor>();
  const [selectedSize, setSelectedSize] = useState();
  //const designers = <IDesigner>[]
 /*  const designers = values.designers.map((designer) => {
    return designer.products

  }) */


  // Get product information
 // let product: object = {}


/*   {values.designers.map((designer) => {
     let product = useMemo<IProduct | undefined>(() => {
      return designer.products.find((prod) => prod.key === Number(id));
    }, [designer.products, id]); 
  })} */

  
  const product = useMemo<IProduct | undefined>(() => {
    return values.products.find((prod) => prod.key === Number(id));
  }, [values.products, id]); 
  

  const colors = useMemo(() => {
    if (product) {
      const preColors = new Set<IColor>();
      product.variations.forEach((variation) => preColors.add(variation.color));
      return Array.from(preColors);
    }
    return [];
  }, [product]);

  const sizes = useMemo(() => {
    if (product && selectedColor) {
      return product.variations
        .filter((variation) => variation.color === selectedColor)
        .map((variation) => variation.size);
    }
    return [];
  }, [product, selectedColor]);

  const productImages = useMemo<string>(() => {
    if (product) {
      return product.variations[0]?.images[0] || '';
    }
    return '';
  }, [product]);

  const afegirProducteALaCistella = useCallback(
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
      <div className="flex flex-row">
        <div className="flex w-2/4 flex-col">
          <div id="image-carousel" className="">
            <Image
              key={product.key}
              alt=""
              src={productImages || ''}
              layout="responsive"
              width="500"
              height="600"
              className="object-cover duration-300  hover:opacity-50 "
            />
          </div>
          <div className=" w-1/6 bg-slate-200">
            <Image
              key={product.key}
              alt=""
              src={productImages || ''}
              layout="responsive"
              width="100"
              height="100"
              className="object-cover duration-300  hover:opacity-50 "
            />
            <Image
              key={product.key}
              alt=""
              src={productImages || ''}
              layout="responsive"
              width="100"
              height="100"
              className="object-cover duration-300  hover:opacity-50 "
            />
          </div>
        </div>

        <div id="product-information" className="flex  w-2/4 flex-col">
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          <div className="flex flex-row">
            {colors.map((color) => (
              <div
                onClick={() => {
                  setSelectedColor(color);
                }}
                key={`product-${product.key}-color-${color.name}`}
                className={`mr-1 rounded-full ${
                  selectedColor ? 'border border-black' : ''
                } p-1`}
              >
                <div
                  className={`w-5 h-5 rounded-full `}
                  style={{
                    backgroundColor: `${color.code}`,
                  }}
                />
              </div>
            ))}
          </div>
          {/* <Select
            style={{ width: 120 }}
            onChange={(value) => {
              setSelectedColor(value);
              setSelectedSize(undefined);
            }}
            value={selectedColor}
          >
            {colors.map((color) => (
              <Option
                key={`product-${product.key}-color-${color}`}
                value={color}
              >
                {color}
              </Option>
            ))}
          </Select> */}
          <Select
            style={{ width: 120 }}
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
            type="primary"
            disabled={!selectedColor || !selectedSize}
            onClick={() => {
              afegirProducteALaCistella(product, selectedColor, selectedSize);
            }}
          >
            Afegir a la cistella
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
