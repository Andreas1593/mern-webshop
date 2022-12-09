import { Link, NavLink } from 'react-router-dom';
import { BiExit } from 'react-icons/bi';

import { useCheckMobileScreen } from '../../../hooks';

import logo from '../../../assets/logo.png';

const AdminNavbar = () => {
  const isMobile = useCheckMobileScreen();

  return (
    <header>
      <div className="flex justify-between items-center py-4 px-4 mx-auto md:w-1/2">
        <Link to="/admin">
          <img src={logo} alt="Logo" className="w-10 h-10" />
        </Link>
        <NavLink
          to="/admin/product"
          className={({ isActive }) =>
            isActive
              ? 'w-20 h-7 bg-rose-200 rounded-lg text-center pt-[3.5px] hover:bg-rose-100 underline'
              : 'w-20 h-7 bg-rose-200 rounded-lg text-center pt-[3.5px] hover:bg-rose-100'
          }
        >
          <p className="font-medium text-sm">Products</p>
        </NavLink>
        <NavLink
          to="/admin/placeholder"
          className={({ isActive }) =>
            isActive
              ? 'w-24 h-7 bg-rose-200 rounded-lg text-center pt-[3.5px] hover:bg-rose-100 underline'
              : 'w-24 h-7 bg-rose-200 rounded-lg text-center pt-[3.5px] hover:bg-rose-100'
          }
        >
          <p className="font-medium text-sm">Placeholder</p>
        </NavLink>
        <NavLink
          to="/"
          className={
            isMobile
              ? 'w-8 h-7 bg-rose-200 rounded-lg text-center pt-[0.5px] hover:bg-rose-100'
              : 'w-36 h-7 pr-2 bg-rose-200 rounded-lg text-center pt-[0.5px] hover:bg-rose-100'
          }
        >
          <BiExit className="inline m-1" />
          {!isMobile && (
            <p className="inline font-medium text-sm">Return to Shop</p>
          )}
        </NavLink>
      </div>
    </header>
  );
};

export default AdminNavbar;
