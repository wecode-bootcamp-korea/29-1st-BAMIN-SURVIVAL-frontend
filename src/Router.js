import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

import Cart from './pages/Cart/Cart';
import OrderComplete from './pages/OrderComplete/OrderComplete';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/complete" element={<OrderComplete />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
