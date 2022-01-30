import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import Nav from './pages/Nav/Nav';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes />
    </BrowserRouter>
  );
}

export default Router;
