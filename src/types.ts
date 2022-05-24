export interface IDesigner {
  key: number;
  name: string;
  products: IProduct[];
}


export interface IProduct {
  key: number;
  name: string;
  price: number;
  salePrice?: number | null;
  variations: IProductVariation[];
}

export interface IProductVariation {
  key: number;
  size: string;
  color: IColor;
  images: string[];
}

export interface IColor {
  name: string;
  code: string;
  active: boolean;
}

export interface ICartProduct {
  amount: number;
  size: string;
  color: IColor;
  productKey: IProduct['key'];
  productPrice: IProduct['price'];
}

export interface IPayment {
  key: number;
  name: string;
  image: string;
}