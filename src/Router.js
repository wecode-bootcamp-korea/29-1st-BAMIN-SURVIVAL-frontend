import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginBaeminSurvival from './pages/Chaehyun/LoginBaeminSurvival';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-BS" element={<LoginBaeminSurvival />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
