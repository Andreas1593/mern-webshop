import { useRef } from 'react';
import { BsCart4 } from 'react-icons/bs';

import CartItem from './CartItem';
import {
  selectCartItems,
  selectIsOpen,
  selectTotalPrice,
  selectTotalQty,
} from './cartSlice';
import { useAppSelector } from '../../hooks';
import useClickOutsideCart from '../../hooks/useClickOutsideCart';

const Cart = () => {
  const isOpen = useAppSelector(selectIsOpen);
  const cartItems = useAppSelector(selectCartItems);
  const totalQty = useAppSelector(selectTotalQty);
  const totalPrice = useAppSelector(selectTotalPrice);

  const wrapperRef = useRef<any>(null);
  useClickOutsideCart(wrapperRef);

  const baseClasses = `fixed top-0 right-0 w-72 md:w-96 h-screen overflow-y-scroll z-40 p-3
                      text-center shadow-[inset_0px_0px_40px_#F7CDE588] bg-white
                      transition ease-in-out duration-300`;

  return (
    <div
      ref={wrapperRef}
      className={isOpen ? `${baseClasses}` : `${baseClasses} translate-x-full`}
    >
      <div className="">
        <h2 className="inline text-3xl font-semibold">Your Cart</h2>
        <BsCart4
          size={28}
          className="text-rose-500 inline absolute top-4 right-5"
        />
      </div>
      <p className="text-xl">
        ({totalQty === 1 ? `${totalQty} article` : `${totalQty} articles`})
      </p>

      {cartItems &&
        cartItems.map((cartItem) => (
          <CartItem cartItem={cartItem} key={cartItem.product.id} />
        ))}

      {cartItems.length > 0 && (
        <div className="text-left pt-3">
          <h3 className="text-xl font-semibold">Order Summary</h3>
          <p className="inline-block w-full">
            Subtotal:{' '}
            <span className="float-right">${totalPrice.toFixed(2)}</span>
          </p>
          <p className="inline-block w-full">
            Shipping: <span className="float-right">$5.00</span>
          </p>
          <h3 className="inline-block w-full text-xl font-semibold">
            Total: <span className="float-right">${totalPrice.toFixed(2)}</span>
          </h3>
        </div>
      )}

      {cartItems.length === 0 && (
        <button className="bg-rose-300 text-2xl font-semibold text-center mt-16">
          Shop now
        </button>
      )}
    </div>
  );
};

export default Cart;
