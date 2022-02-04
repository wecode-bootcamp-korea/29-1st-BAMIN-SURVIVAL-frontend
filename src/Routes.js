import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './pages/Nav/Nav';
import MyPage from './pages/MyPage/MyPage';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
