export interface IProduct {
  id: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  images: IImage[];
  ratings?: IRating[];
  highlight?: boolean;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface IFormData {
  name: string;
  brand: string;
  category: string;
  description: string;
  price: number | string;
  images: IImage[];
  newImages?: IImage[];
  // TODO
  hightlight?: boolean;
}

export interface IRating {
  id: number;
  description: string;
  value: number;
}

export interface IImage {
  destination: string;
  encoding: string;
  fieldname: string;
  filename: string;
  mimetype: string;
  originalname: string;
  path: string;
  size: number;
}
