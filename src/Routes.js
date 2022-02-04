import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './pages/Nav/Nav';
import Footer from './pages/Footer/Footer';
import Cart from './pages/Cart/Cart';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default Router;
