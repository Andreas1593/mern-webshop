import { useEffect, RefObject } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { selectIsOpen, toggleCart } from '../features/cart/cartSlice';

const useClickOutsideCart = (ref: RefObject<any>) => {
  const isOpen = useAppSelector(selectIsOpen);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        isOpen &&
        e.target !== document.getElementById('cartButton') &&
        e.target !== document.getElementById('cartButtonIcon')
      ) {
        dispatch(toggleCart());
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, isOpen, dispatch]);
};

export default useClickOutsideCart;
