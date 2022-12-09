import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className="bg-rose-200 rounded-b-md text-center text-sm p-1 text-red-800">
      Get 5% off for subscribing to our{' '}
      <Link to="/" className="underline">
        Newsletter
      </Link>
      !
    </div>
  );
};

export default Topbar;
