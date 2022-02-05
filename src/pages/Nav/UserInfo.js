import React from 'react';
import { Link } from 'react-router-dom';

const UserInfo = () => {
  const handleLogOUt = () => {
    sessionStorage.removeItem('token');
    window.location.replace('/');
  };

  return (
    <ul className="userInfoList">
      {sessionStorage.getItem('token') ? null : (
        <li>
          <Link to="/login" className="navlogIn">
            로그인
          </Link>
          <span className="txtBar" />
        </li>
      )}

      {sessionStorage.getItem('token') ? (
        <li>
          <Link to="/" className="navlogOut" onClick={handleLogOUt}>
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
