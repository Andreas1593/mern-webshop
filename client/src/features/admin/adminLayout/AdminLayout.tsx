import { Outlet } from 'react-router-dom';

import Footer from '../../layout/Footer';
import AdminNavbar from './AdminNavbar';
import AdminTopbar from './adminTopbar';

const AdminLayout = () => {
  return (
    <>
      <AdminTopbar />
      <AdminNavbar />
      <main className="min-h-screen p-5">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AdminLayout;
