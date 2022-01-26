import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
  return (
    <li className="active">
      <Link to={category.url} className="categoryTitle categoryActive">
        {category.title}
      </Link>
    </li>
  );
};

export default Category;
