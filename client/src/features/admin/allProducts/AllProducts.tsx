import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AiFillEdit } from 'react-icons/ai';
import { BiRefresh } from 'react-icons/bi';
import { IoMdAddCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

import { selectAllProducts } from './productsSlice';
import { useAppSelector } from '../../../hooks';
import { capitalize } from '../../../common/utils';
import useGetProducts from '../../../hooks/useGetProductsIntoStore';

const AdminAllProducts = () => {
  const [spin, setSpin] = useState(false);

  const allProducts = useAppSelector(selectAllProducts);
  const getProductsIntoStore = useGetProducts();

  useEffect(() => {
    // Load all products only once
    if (!allProducts.length) {
      getProductsIntoStore();
    }
  }, [allProducts.length, getProductsIntoStore]);

  return (
    <>
      <div className="flex justify-between">
        <Link
          to="/admin/product/add"
          className="flex justify-between items-center relative w-40 px-2 py-1 text-sm font-medium bg-rose-300 hover:bg-rose-400 rounded-md"
        >
          <IoMdAddCircle size={24} color="forestgreen" />
          <p>Add new product</p>
        </Link>
        <button
          type="button"
          className="px-2 py-1 text-sm font-medium bg-rose-300 hover:bg-rose-400 rounded-md"
          onClick={() => {
            setSpin(true);
            setTimeout(() => setSpin(false), 1000);
            getProductsIntoStore();
          }}
        >
          <BiRefresh
            size={24}
            color="forestgreen"
            className={spin ? 'animate-spin-short' : ''}
          />
        </button>
      </div>
      <table className="table-fixed w-full mt-3">
        <thead className="border-b border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-left text-slate-600">
          <tr>
            <th className="w-9 md:w-16">Edit</th>
            <th className="w-12 md:w-60 lg:w-72">ID</th>
            <th>Name</th>
            <th className="w-24 md:w-60">Category</th>
          </tr>
        </thead>
        <tbody>
          {allProducts.map((product) => {
            return (
              <tr
                key={product.id}
                className="border-b border-slate-700 p-4 pl-8 text-slate-600 odd:bg-gray-100"
              >
                <td>
                  <Link to={`/admin/product/${product.id}`}>
                    <AiFillEdit />
                  </Link>
                </td>
                <td
                  className="overflow-hidden overflow-ellipsis"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(product.id.toString())
                      .then(() => toast.success('ID copied to clipboard'));
                  }}
                >
                  {product.id}
                </td>
                <td className="overflow-hidden overflow-ellipsis">
                  {product.name}
                </td>
                <td>{capitalize(product.category)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default AdminAllProducts;
