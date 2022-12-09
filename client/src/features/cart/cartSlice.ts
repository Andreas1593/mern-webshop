import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { ICartItem } from '../../models';

export interface CartState {
  isOpen: boolean;
  items: ICartItem[];
}

const initialState: CartState = {
  isOpen: false,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    addItem: (state, action: PayloadAction<ICartItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<ICartItem>) => {
      console.log(state.items);
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload.product.id
      );
    },
    incItemQty: (state, action: PayloadAction<ICartItem>) => {
      state.items = state.items.map((cartItem) => {
        if (cartItem.product.id === action.payload.product.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + action.payload.quantity,
          };
        } else {
          return cartItem;
        }
      });
    },
    updateItemQty: (state, action: PayloadAction<ICartItem>) => {
      state.items = state.items.map((cartItem) => {
        if (cartItem.product.id === action.payload.product.id) {
          return {
            ...cartItem,
            quantity: action.payload.quantity,
          };
        } else {
          return cartItem;
        }
      });
    },
  },
});

export const { toggleCart, addItem, removeItem, incItemQty, updateItemQty } =
  cartSlice.actions;

export const selectIsOpen = (state: RootState) => state.cart.isOpen;
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectTotalQty = (state: RootState) => {
  var totalQty = 0;
  state.cart.items.forEach((item) => (totalQty += item.quantity));
  return totalQty;
};
export const selectTotalPrice = (state: RootState) => {
  var totalPrice = 0;
  state.cart.items.forEach(
    (item) => (totalPrice += item.product.price * item.quantity)
  );
  return totalPrice;
};

export default cartSlice.reducer;
