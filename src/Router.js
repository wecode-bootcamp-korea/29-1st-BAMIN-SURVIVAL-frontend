import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginBaeminSurvival from './pages/Chaehyun/LoginBaeminSurvival';
import SignUpBaeminSurvival from './pages/Chaehyun/SignUpBaeminSurvival';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-BS" element={<LoginBaeminSurvival />} />
        <Route path="/signup-BS" element={<SignUpBaeminSurvival />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
