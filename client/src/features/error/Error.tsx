import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div className="text-center pt-36 pb-72">
      <h1 className="text-7xl font-semibold text-slate-800 mb-2">Oops!</h1>
      <p className="text-lg font-medium text-slate-700 mb-10">
        404 - Page not found
      </p>
      <Link
        to="/"
        className="px-3 py-1 text-2xl font-medium bg-rose-300 rounded"
      >
        Home
      </Link>
    </div>
  );
}
