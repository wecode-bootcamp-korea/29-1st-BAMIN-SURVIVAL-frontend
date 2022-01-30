import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Mainpage/Main';
import Detailpage from './pages/Detailpage/Detailpage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} exact={true} />
        <Route path="/detailpage/:id" element={<Detailpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
