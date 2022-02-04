import React from 'react';
import { Link } from 'react-router-dom';

const UserInfo = ({ cartCount }) => {
  const handleLogOUt = () => {
    sessionStorage.removeItem('token');
    window.location.replace('/');
  };

  return (
    <ul className="userInfoList">
      {sessionStorage.getItem('token') ? null : (
        <li>
          <Link to="/login" className="logIn">
            로그인
          </Link>
          <span className="txtBar" />
        </li>
      )}

      {sessionStorage.getItem('token') ? (
        <li>
          <Link to="/" className="logOut" onClick={handleLogOUt}>
            로그아웃
          </Link>
          <span className="txtBar" />
        </li>
      ) : (
        <li>
          <Link to="/signin" className="signUp">
            회원가입
          </Link>
          <span className="txtBar" />
        </li>
      )}

      <li>
        <Link to="/mypage" className="myPage">
          마이페이지
        </Link>
        <span className="txtBar" />
      </li>

      <li>
        <Link to="/cart" className="cart">
          장바구니
        </Link>
      </li>
      <span className="cartCount">{cartCount}</span>
    </ul>
  );
};

export default UserInfo;
