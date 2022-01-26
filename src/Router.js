import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginBaeminSurvival from './pages/Login/LoginBaeminSurvival';
import SignUpBaeminSurvival from './pages/SignUp/SignUpBaeminSurvival';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginBaeminSurvival />} />
        <Route path="/signup" element={<SignUpBaeminSurvival />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
