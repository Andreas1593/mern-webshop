import { Link } from 'react-router-dom';

import {
  Facebook,
  Instagram,
  Twitter,
  Github,
  Dribbble,
} from '../../components/logos/index';

import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-100 via-[#ffe0f0] to-gray-100">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img src={logo} className="mr-5 h-6 sm:h-9" alt="logo" />
            <p className="max-w-xs mt-4 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              accusantium.
            </p>
            <div className="flex mt-8 space-x-6 text-gray-600">
              <Facebook />
              <Instagram />
              <Twitter />
              <Github />
              <Dribbble />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <Link className="hover:opacity-75" to="">
                  About
                </Link>
                <Link className="hover:opacity-75" to="/admin">
                  Admin Login
                </Link>
                <Link className="hover:opacity-75" to="">
                  Meet the Team
                </Link>
                <Link className="hover:opacity-75" to="">
                  History
                </Link>
                <Link className="hover:opacity-75" to="">
                  Careers
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Services</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <Link className="hover:opacity-75" to="">
                  1on1 Coaching
                </Link>
                <Link className="hover:opacity-75" to="">
                  Company Review
                </Link>
                <Link className="hover:opacity-75" to="">
                  Accounts Review
                </Link>
                <Link className="hover:opacity-75" to="">
                  HR Consulting
                </Link>
                <Link className="hover:opacity-75" to="">
                  SEO Optimisation
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Helpful Links</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <Link className="hover:opacity-75" to="">
                  Contact
                </Link>
                <Link className="hover:opacity-75" to="">
                  FAQs
                </Link>
                <Link className="hover:opacity-75" to="">
                  Live Chat
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <Link className="hover:opacity-75" to="">
                  Privacy Policy
                </Link>
                <Link className="hover:opacity-75" to="">
                  Terms &amp; Conditions
                </Link>
                <Link className="hover:opacity-75" to="">
                  Returns Policy
                </Link>
                <Link className="hover:opacity-75" to="">
                  Accessibility
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-800">© 2022 Company Name</p>
      </div>
    </footer>
  );
};

export default Footer;
