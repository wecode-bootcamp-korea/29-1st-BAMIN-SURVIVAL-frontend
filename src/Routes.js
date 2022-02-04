import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import Nav from './pages/Nav/Nav';
import Footer from './pages/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
