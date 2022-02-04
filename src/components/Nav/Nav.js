import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CATEGORIES from './CategoryData';
import Category from './Category';
import './Nav.scss';
import UserInfo from './UserInfo';
import Search from './Search';

const Nav = () => {
  const [user, setUser] = useState([]);

  const [searchInput, setSearchInput] = useState(true);

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setSearchInput(false) : setSearchInput(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  useEffect(() => {
    fetch('');
  }, [user]);

  return (
    <div className="nav">
      <div className="navTop">
        <div className="userInfo">
          <UserInfo />
        </div>
      </div>

      <div className={searchInput ? 'navMiddle' : 'hideNavMiddle'}>
        <div className="nothing" />
        <Link to="/">
          <img alt="logo" src="/images/Shinung/logo.png" className="navLogo" />
        </Link>
        {searchInput && <Search />}
      </div>

      {searchInput || (
        <div className="scrollLogo">
          <Link to="/">
            <img alt="logo" src="/images/Shinung/logo.png" className="scroll" />
          </Link>
        </div>
      )}

      <div className="navBottom">
        <ul className="categoryList">
          {CATEGORIES.map((CATEGORY, i) => (
            <Category category={CATEGORY} key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
