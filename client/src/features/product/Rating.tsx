import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { products } from '../../testproducts';

const Rating = () => {
  // Komplett neu machen
  let avgRating: number = 0;
  products[0].ratings.forEach((rating) => {
    avgRating += rating.value;
  });
  avgRating /= products[0].ratings.length;
  // Four &nbsp; = one hidden star
  avgRating *= 4;

  return (
    <div className="relative flex h-6">
      <div className="">
        <div className="absolute flex -right-9 z-10 bg-white whitespace-pre">
          {[...Array(avgRating)].map((whitespace) => ' ')}
        </div>
        <div className="absolute flex -left-10 z-20">
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
        <div className="absolute flex -left-10 z-0">
          {/* loop */}
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      </div>
      <p className="absolute left-10 bottom-1">(20)</p>
    </div>
  );
};

export default Rating;
