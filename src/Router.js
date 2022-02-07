import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Main from './pages/Mainpage/Main';
import Detailpage from './pages/Detailpage/Detailpage';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Nav from './pages/Nav/Nav';
import Footer from './pages/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} exact={true} />
        <Route path="/products/:id" element={<Detailpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
