import React from 'react';
import { Link } from 'react-router-dom';
import './MyPageNav.scss';

const MyPageNav = ({ content, path }) => {
  return (
    <li className="myPageNav">
      <Link to={`/${path}`}>{content}</Link>
    </li>
  );
};

export default MyPageNav;
