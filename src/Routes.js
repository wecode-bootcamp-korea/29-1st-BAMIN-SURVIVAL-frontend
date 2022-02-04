import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';

function Router() {
  return (
    <BrowserRouter>
    <Nav />
      <Routes />
    </BrowserRouter>
  );
}

export default Router;
