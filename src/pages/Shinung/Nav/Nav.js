import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import CATEGORY from './NavCategoryData';
import Category from './Category';
import RecentSearch from './RecentSearch/RecentSearch';
import './Nav.scss';
import UserInfo from './UserInfo';
import Search from './Search';

const Nav = () => {
  const [navSize, setnavSize] = useState('10rem');
  // const [navColor, setnavColor] = useState('transparent');
  const [searchInput, setSearchInput] = useState(true);
  const [cartCount, setCartCount] = useState(100);
  const [modal, setModal] = useState(false);
  const [categories, setCategories] = useState(CATEGORY);
  const [inputValue, setInputValue] = useState('');

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setSearchInput(false) : setSearchInput(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  const onSubmit = e => {
    const value = e.target.value;
    setInputValue([...inputValue, value]);
    e.preventDefault();
  };

  return (
    <div className="nav">
      <div className="navTop">
        <div className="userInfo">
          <UserInfo cartCount={cartCount} />
        </div>
      </div>

      <div className={searchInput ? 'navMiddle' : 'disapear'}>
        <img alt="logo" src="/images/Shinung/logo.png" className="navLogo" />
        {/* {searchInput && <Search onSubmit={onSubmit} />} */}

        {modal && <RecentSearch value={inputValue} />}
      </div>

      {searchInput || (
        <div className="scrollLogo">
          <img alt="logo" src="/images/Shinung/logo.png" className="scroll" />
        </div>
      )}

      <div className="navBottom">
        <ul className="categoryList">
          {categories.map((category, i) => (
            <Category category={category} key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
