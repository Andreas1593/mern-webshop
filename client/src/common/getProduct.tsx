import axios from 'axios';

import { IProduct } from '../models';

const getProduct = async (id: string) => {
  try {
    const { data } = await axios.get(`http://localhost:5000/product/${id}`);
    const product: IProduct = {
      id: data._id,
      name: data.name,
      brand: data.brand,
      category: data.category,
      description: data.description,
      price: data.price,
      images: data?.images,
    };
    return product;
  } catch {
    const product_1: IProduct = {
      id: '',
      name: '',
      brand: '',
      category: '',
      description: '',
      price: 0,
      images: [],
    };
    return product_1;
  }
};

export default getProduct;
