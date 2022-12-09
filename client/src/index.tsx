import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import './index.css';

import Admin from './features/admin/Admin';
import AdminLayout from './features/admin/adminLayout/AdminLayout';
import AllProducts from './features/admin/allProducts/AllProducts';
import AddProduct from './features/admin/addProduct/AddProduct';
import Category from './features/category/Category';
import EditProduct from './features/admin/editProduct/EditProduct';
import ErrorPage from './features/error/Error';
import Home from './features/home/Home';
import Layout from './features/layout/Layout';
import Placeholder from './features/admin/placeholder/Placeholder';
import Product from './features/product/Product';
import ScrollToTop from './components/ScrollToTop';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/product/404" element={<ErrorPage />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/product" element={<AllProducts />} />
            <Route path="/admin/product/add" element={<AddProduct />} />
            <Route path="/admin/product/:id" element={<EditProduct />} />
            <Route path="/admin/placeholder" element={<Placeholder />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    <Toaster />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
