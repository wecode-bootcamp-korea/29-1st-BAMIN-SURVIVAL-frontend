import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = ({ category }) => {
  return (
    <li>
      <NavLink
        to={category.url}
        className={({ isActive }) =>
          isActive ? 'categoryActive' : 'categoryTitle'
        }
      >
        {category.title}
      </NavLink>
    </li>
  );
};

export default Category;
