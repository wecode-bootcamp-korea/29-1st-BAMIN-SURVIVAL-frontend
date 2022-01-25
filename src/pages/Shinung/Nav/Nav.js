import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import RecentSearch from './RecentSearch/RecentSearch';

const Nav = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(true);
  };

  const focusOut = () => {
    setModal(false);
  };

  const [inputValue, setInputValue] = useState('');

  const onSubmit = e => {
    const value = e.target.value;
    setInputValue([...inputValue, value]);
    console.log('hello');
    e.preventDefault();
  };

  return (
    <header>
      <div className="headerTop">
        <ul className="headerTopList">
          <li>
            <Link to="/login" className="logIn">
              로그인
            </Link>
            <span className="txtBar" />
          </li>
          <li>
            <Link to="/signin" className="signUp">
              회원가입
            </Link>
            <span className="txtBar" />
          </li>
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
        </ul>
      </div>
      <div className="headerSearch">
        <img alt="logo" src="/images/Shinung/logo.png" className="logo" />
        <form action="" className="search" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="검색어를 입력해주세요"
            onClick={handleModal}
            onBlur={focusOut}
          />
          <button type="sumbmit">
            <i className="fas fa-search" />
          </button>
        </form>
        {modal && <RecentSearch value={inputValue} />}
      </div>
      <div className="headerCategory">
        <ul>
          <li>전체</li>
          <li>멘토</li>
          <li>매거진</li>
          <li>회사에서</li>
          <li>학교에서</li>
          <li>코로나에서</li>
          <li>랜덤박스</li>
          <li>커뮤니티</li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
