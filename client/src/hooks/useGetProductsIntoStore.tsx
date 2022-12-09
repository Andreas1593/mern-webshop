import axios from 'axios';

import { useAppDispatch } from '.';
import { addProducts } from '../features/admin/allProducts/productsSlice';

import { IProduct } from '../models';

const useGetProductsIntoStore = () => {
  const dispatch = useAppDispatch();

  const getProductsIntoStore = () => {
    axios.get('http://localhost:5000/admin/product').then(({ data }) => {
      var allProducts: IProduct[] = [];

      for (let product of data) {
        const _product: IProduct = {
          id: product._id,
          name: product.name,
          brand: product.brand,
          category: product.category,
          description: product.description,
          price: product.price,
          images: product?.images,
        };
        allProducts.push(_product);
      }
      dispatch(addProducts(allProducts));
    });
  };

  return getProductsIntoStore;
};

export default useGetProductsIntoStore;
