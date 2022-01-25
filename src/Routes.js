import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import Footer from './pages/Shinung/Footer/Footer';
import Nav from './pages/Shinung/Nav/Nav';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Footer />
      <Routes />
    </BrowserRouter>
  );
}

export default Router;
