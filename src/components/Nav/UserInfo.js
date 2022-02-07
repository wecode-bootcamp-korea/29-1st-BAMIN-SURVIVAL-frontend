import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserInfo = () => {
  const handleLogOUt = () => {
    localStorage.removeItem('token');
    window.location.replace('/');
  };

  return (
    <ul className="userInfoList">
      {localStorage.getItem('token') ? (
        <li>
          <span className="userName">리치</span>
          <span className="userPoint">
            <p className="pointImage">P</p>
            1,000,000
          </span>
          <span className="txtBar" />
        </li>
      ) : (
        <li>
          <Link to="/login" className="logIn">
            로그인
          </Link>
          <span className="txtBar" />
        </li>
      )}

      {localStorage.getItem('token') ? (
        <li>
          <Link to="/" className="logOut" onClick={handleLogOUt}>
            로그아웃
          </Link>
          <span className="txtBar" />
        </li>
      ) : (
        <li>
          <Link to="/signup" className="navSignUp">
            회원가입
          </Link>
          <span className="txtBar" />
        </li>
      )}

      <li>
        <Link to="/mypage" className="navMyPage">
          마이페이지
        </Link>
        <span className="txtBar" />
      </li>

      <li>
        <Link to="/cart" className="navMyCart">
          장바구니
        </Link>
      </li>
      <span className="cartCount">100</span>
    </ul>
  );
};

export default UserInfo;