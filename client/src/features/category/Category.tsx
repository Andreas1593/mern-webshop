import { Link, useParams } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';

import ProductCard from '../product/ProductCard';

// Sort!
import { capitalize } from '../../common/utils';
import { useAppSelector } from '../../hooks';
import { selectAllProducts } from '../admin/allProducts/productsSlice';

const Category = () => {
  var { category } = useParams();

  // load category items
  // Temp
  const allProducts = useAppSelector(selectAllProducts);
  const categoryProducts = allProducts.filter((product) => {
    return product.category === category;
  });

  return (
    <div className="px-4 py-2">
      <div>
        <Link to="/" className="inline">
          Home
        </Link>
        <HiChevronRight className="inline" />
        <Link to={`/category/${category}`} className="inline">
          {capitalize(category!)}{' '}
          <span className="text-sm">({categoryProducts.length})</span>
        </Link>
      </div>

      <div className="max-w-2xl lg:max-w-[94rem]">
        <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {categoryProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
