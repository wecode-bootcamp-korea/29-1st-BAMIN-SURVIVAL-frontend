import React from 'react';
import './Nav.scss';
import RecentSearch from './RecentSearch/RecentSearch';

const Nav = () => {
  return (
    <header>
      <div className="headerTop">
        <ul className="headerTopList">
          <li>
            <a href="/" className="logIn">
              로그인
            </a>
            <span className="txtBar" />
          </li>
          <li>
            <a href="/" className="signUp">
              회원가입
            </a>
            <span className="txtBar" />
          </li>
          <li>
            <a href="/" className="myPage">
              마이페이지
            </a>
            <span className="txtBar" />
          </li>
          <li>
            <a href="/" className="cart">
              장바구니
            </a>
          </li>
        </ul>
      </div>
      <div className="headerSearch">
        <img alt="logo" src="/images/Shinung/logo.png" className="logo" />
        <form action="" className="search">
          <input type="text" placeholder="검색어를 입력해주세요" />
          <button type="sumbmit">
            <i class="fas fa-search" />
          </button>
        </form>
        <RecentSearch />
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
