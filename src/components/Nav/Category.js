import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = ({ category }) => {
  return (
    <NavLink
      to={category.url}
      className={({ isActive }) =>
        isActive ? 'categoryActive' : 'categoryTitle'
      }
    >
      <li>{category.title} </li>
    </NavLink>
  );
};

export default Category;
