import { useEffect, useLayoutEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { HiChevronRight } from 'react-icons/hi';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { selectProduct } from '../admin/allProducts/productsSlice';
import Carousel from '../../components/Carousel';
import { addItem, incItemQty, selectCartItems } from '../cart/cartSlice';
import ErrorPage from '../error/Error';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Rating from './Rating';
import getProduct from '../../common/getProduct';
import { capitalize, extractImagePaths } from '../../common/utils';

import { ICartItem } from '../../models';

const Product = () => {
  const [qty, setQty] = useState(1);

  const navigate = useNavigate();

  const location = useLocation();
  const id = location.pathname.replace('/product/', '');

  const dispatch = useAppDispatch();
  var product = useAppSelector((state) => selectProduct(state, id));

  useEffect(() => {
    if (product.name === '') {
      getProduct(id).then((_product) => {
        product = _product;
        if (product.name === '') navigate('/product/404');
      });
    }
  }, []);

  const imagePaths = extractImagePaths(product);

  const cartItems = useAppSelector(selectCartItems);
  const cartItem: ICartItem = {
    product: product,
    quantity: qty,
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = () => {
    const checkProductInCart = cartItems.find(
      (cartItem) => cartItem.product.id === product.id
    );
    if (checkProductInCart) {
      dispatch(incItemQty(cartItem));
    } else {
      dispatch(addItem(cartItem));
    }
    toast.success('Product added to cart');
  };

  return (
    <div className="flex flex-col items-center">
      <div className="self-start px-4 py-2">
        <Link to="/" className="inline">
          Home
        </Link>
        <HiChevronRight className="inline" />
        <Link to={`/category/${product.category}`} className="inline">
          {capitalize(product.category)}
        </Link>
        <HiChevronRight className="inline" />
        <Link to={`/product/${product.id}`} className="inline">
          {product.name}
        </Link>
      </div>

      <Carousel images={imagePaths} />
      <h2 className="font-medium text-xl">{product.name}</h2>
      <h4>${product.price}</h4>
      <p>{product.description}</p>
      <Rating />
      <div className="quantity">
        <h3>Quantity:</h3>
        <p className="flex">
          <span className="p-2" onClick={() => qty > 1 && setQty(qty - 1)}>
            <AiOutlineMinus />
          </span>
          <span className="pt-1">{qty}</span>
          <span className="p-2" onClick={() => qty < 10 && setQty(qty + 1)}>
            <AiOutlinePlus />
          </span>
        </p>
      </div>
      <button
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        onClick={() => handleAddToCart()}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
