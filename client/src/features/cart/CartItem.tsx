import { useState } from 'react';

import { useAppDispatch } from '../../hooks';
import { removeItem, updateItemQty } from './cartSlice';
import { extractImagePaths } from '../../common/utils';

import { ICartItem } from '../../models';

interface cartItemProps {
  cartItem: ICartItem;
}

const CartItem = ({ cartItem }: cartItemProps) => {
  const { name, price, brand } = cartItem.product;
  const qty = cartItem.quantity;
  const imagePaths = extractImagePaths(cartItem.product);
  const amounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const dispatch = useAppDispatch();

  const [fade, setFade] = useState(false);

  return (
    <>
      <div
        className={
          fade ? 'flex mt-6 mb-4 animate-removeCartItem' : 'flex mt-6 mb-4'
        }
      >
        <img
          src={imagePaths[0]}
          alt="Product"
          className="w-1/3 h-fit pt-2"
        ></img>
        <div className="text-left px-3 w-2/3">
          <h2 className="font-semibold text-xl">{name}</h2>
          <p className="text-slate-800">{brand}</p>
          <div className="flex justify-between items-center">
            <p className="text-slate-800">
              ${(price * cartItem.quantity).toFixed(2)}
            </p>
            <select
              className="p-1.5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
              value={qty}
              onChange={(e) => {
                if (e.target.value === '0') {
                  setFade(true);
                  setTimeout(() => {
                    dispatch(removeItem(cartItem));
                  }, 1400);
                } else
                  dispatch(
                    updateItemQty({
                      ...cartItem,
                      quantity: parseInt(e.target.value),
                    })
                  );
              }}
            >
              <option value="0">0x</option>
              {amounts.map((amount) => (
                <option value={amount} key={amount}>
                  {amount}x
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartItem;
