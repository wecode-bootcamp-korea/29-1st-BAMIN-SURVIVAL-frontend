import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import MainTest from './pages/Shinung/MainTest';
import Nav from './pages/Shinung/Nav/Nav';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <MainTest />
      <Routes />
    </BrowserRouter>
  );
}

export default Router;
