import { Link } from 'react-router-dom';

import { extractImagePaths } from '../../common/utils';

import { IProduct } from '../../models';

interface productProps {
  product: IProduct;
}

const ProductCard = ({ product }: productProps) => {
  const { id, name, price, brand } = product;
  const imagePaths = extractImagePaths(product);

  return (
    <div className="group relative">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img
          src={imagePaths[0]}
          alt="Product"
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link to={`/product/${id}`} state={{ product: product }}>
              <span aria-hidden="true" className="absolute inset-0"></span>
              {name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{brand}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
