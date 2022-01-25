import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
  return (
    <li>
      <Link to={category.url} className="categoryTitle">
        {category.title}
      </Link>
    </li>
  );
};

export default Category;
