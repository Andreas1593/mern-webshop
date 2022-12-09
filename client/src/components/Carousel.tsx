import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import 'tw-elements';

type CarouselProps = {
  images: string[];
};

const Carousel = ({ images }: CarouselProps) => {
  return (
    <div
      id="carousel"
      className="carousel slide relative w-11/12 h-96"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        {images &&
          images.map((image, idx) => (
            <button
              type="button"
              data-bs-target="#carousel"
              data-bs-slide-to={idx}
              className={idx === 0 ? 'active' : ''}
              style={{
                backgroundColor: 'grey',
                width: 10,
                height: 10,
                borderRadius: '100%',
              }}
              aria-current="true"
              aria-label={`Slide ${idx}`}
              key={idx}
            ></button>
          ))}
      </div>

      <div className="carousel-inner relative flex items-center h-5/6 overflow-hidden">
        {images &&
          images.map((image, idx) => (
            <div
              className={
                idx === 0
                  ? 'carousel-item active relative float-left w-full'
                  : 'carousel-item relative float-left w-full'
              }
              key={idx}
            >
              <img src={image} className="w-fit h-fit mx-auto" alt="..." />
            </div>
          ))}
      </div>
      <button
        className="-left-1 w-auto carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <AiOutlineLeft color="grey" size={20} />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="-right-1 w-auto carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <AiOutlineRight color="grey" size={20} />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
