import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Navbar from './Navbar';
import Topbar from './Topbar';

const Layout = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
