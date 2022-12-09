import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

import getProduct from '../../../common/getProduct';

import { IProduct } from '../../../models';

export interface ProductsState {
  products: IProduct[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ProductsState = {
  products: [],
  status: 'idle',
};

// export const getProductAsync = createAsyncThunk(
//   'products/getProduct',
//   async (id: string, thunkAPI) => {
//     const response = await getProduct(id);
//     return response as IProduct;
//   },
//   {
//     condition: (id, { getState, extra }) => {
//       const { products } = getState();
//       const fetchStatus = products.requests[id];
//       if (fetchStatus === 'fulfilled' || fetchStatus === 'loading') {
//         return false;
//       }
//     },
//   }
// );

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      if (!state.products.some((product) => product.id === action.payload.id))
        state.products.push(action.payload);
    },
    addProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getProductAsync.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(getProductAsync.fulfilled, (state, action) => {
  //       state.status = 'idle';
  //       addProduct(action.payload);
  //     })
  //     .addCase(getProductAsync.rejected, (state) => {
  //       state.status = 'failed';
  //     });
  // },
});

export const { addProduct, addProducts } = productsSlice.actions;

export const selectProduct = (state: RootState, id: string) => {
  let product = state.products.products.find((product) => product.id === id)!;
  if (product) return product;
  else
    return {
      id: '',
      name: '',
      brand: '',
      category: '',
      description: '',
      price: 0,
      images: [],
    };
};
export const selectAllProducts = (state: RootState) => {
  return state.products.products;
};

export default productsSlice.reducer;
