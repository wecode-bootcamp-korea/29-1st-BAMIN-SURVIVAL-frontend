import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CATEGORY from './NavCategoryData';
import Category from './Category';
import RecentSearch from './RecentSearch/RecentSearch';
import './Nav.scss';

const Nav = () => {
  const [cartCount, setCartCount] = useState(100);
  const [modal, setModal] = useState(false);
  const [categories, setCategories] = useState(CATEGORY);

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
          <div className="cartCount">{cartCount}</div>
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
            className="searchInput"
          />
          <button type="sumbmit" className="searchIcon">
            <i className="fas fa-search" />
          </button>
        </form>
        {modal && <RecentSearch value={inputValue} />}
      </div>
      <div className="headerCategory">
        <ul>
          {categories.map((category, i) => (
            <Category category={category} key={i} />
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
