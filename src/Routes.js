import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import MainTest from './pages/Shinung/MainTest';
import Nav from './pages/Shinung/Nav/Nav';
import LoginBaeminSurvival from './pages/Shinung/Pages/LogIn/Login';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      {/* <MainTest /> */}
      <Routes>
        <Route path="/login" element={<LoginBaeminSurvival />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
