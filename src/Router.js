import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Main from './pages/Mainpage/Main';
import Detailpage from './pages/Detailpage/Detailpage';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} exact={true} />
        <Route path="/products/:id" element={<Detailpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
