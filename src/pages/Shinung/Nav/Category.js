import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const Category = ({ category }) => {
  const { id } = useLocation();

  console.log(id);

  return (
    <li className="active">
      <Link to={category.url} className="categoryTitle categoryActive">
        {category.title}
      </Link>
    </li>
  );
};

export default Category;
