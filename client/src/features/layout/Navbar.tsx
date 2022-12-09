import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import Cart from '../cart/Cart';
import CategoryMenu from '../category/CategoryMenu';
import { selectIsOpen } from '../cart/cartSlice';
import { toggleCart } from '../cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';

import logo from '../../assets/logo.png';

const Navbar = () => {
  const isOpen = useAppSelector(selectIsOpen);
  const dispatch = useAppDispatch();

  return (
    <header>
      <div className="flex justify-between p-3 px-5 md:p-5">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-10 h-10" />
        </Link>

        <CategoryMenu />

        <div
          className={
            isOpen
              ? '-translate-x-72 transition ease-in-out duration-300'
              : 'transition ease-in-out duration-300'
          }
        >
          <button
            id="cartButton"
            className="mt-1 w-10 h-10 rounded-full bg-rose-400 hover:ring-2 hover:ring-rose-200"
            onClick={() => {
              dispatch(toggleCart());
            }}
          >
            <HiOutlineShoppingBag
              size={isOpen ? 25 : 27}
              id="cartButtonIcon"
              className={
                isOpen
                  ? 'text-white mb-1 ml-1 duration-200 pl-2'
                  : 'text-white mb-1 ml-[7px] duration-200'
              }
            />
          </button>
        </div>

        <Cart />
      </div>
    </header>
  );
};

export default Navbar;
