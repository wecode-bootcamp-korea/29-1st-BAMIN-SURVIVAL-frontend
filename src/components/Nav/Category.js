import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
  const [linkBtn, setLinkBtn] = useState('all');
  const [isBtnActive, setIsBtnActive] = useState(category.btnActive);
  const changeLinkBtn = e => {
    setLinkBtn(e.target.name);
    setIsBtnActive(!isBtnActive);
  };

  return (
    <li>
      <Link
        to={
          linkBtn === 'all'
            ? `main?&offset=0`
            : `main?category=${category.name}&limit=16&offset=0`
        }
        className={isBtnActive ? 'categoryActive' : 'categoryTitle'}
        onClick={changeLinkBtn}
        name={category.name}
      >
        {category.title}
      </Link>
    </li>
  );
};

export default Category;
