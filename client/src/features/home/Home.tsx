import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { selectAllProducts } from '../admin/allProducts/productsSlice';
import ProductCard from '../product/ProductCard';
import { useAppSelector, useCheckMobileScreen } from '../../hooks/index';
import useGetProductsIntoStore from '../../hooks/useGetProductsIntoStore';

import heroBannerLarge from '../../assets/heroBannerLarge.jpg';
import heroBannerSmall from '../../assets/heroBannerSmall.jpeg';
import './Home.css';

const Home = () => {
  const [heroBannerLoaded, setHeroBannerLoaded] = useState(false);
  const isMobile = useCheckMobileScreen();

  // Replace with getting only relevant products
  const allProducts = useAppSelector(selectAllProducts);
  const getProductsIntoStore = useGetProductsIntoStore();

  useEffect(() => {
    // Load all products only once
    if (!allProducts.length) {
      getProductsIntoStore();
    }
  }, [allProducts.length, getProductsIntoStore]);

  return (
    <>
      <div className="relative w-full">
        {!heroBannerLoaded && <div className="w-screen h-96 my-0.5"></div>}
        <img
          src={isMobile ? heroBannerLarge : heroBannerSmall}
          alt="Hero Banner"
          onLoad={() => setHeroBannerLoaded(true)}
        />
        <h1 className="absolute top-7 left-4 md:left-8 text-5xl font-bold">
          New Summer Collection
        </h1>
        <Link
          to="/category/summer-collection"
          className="absolute bottom-8 left-4 md:left-8 rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
        >
          Shop Now
        </Link>
      </div>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
          Highlights
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {allProducts &&
            allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>

      {/* Marquee, useful for the product page later on
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            <div>EINS</div>
            <div>ZWEI</div>
            <div>DREI</div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home;
