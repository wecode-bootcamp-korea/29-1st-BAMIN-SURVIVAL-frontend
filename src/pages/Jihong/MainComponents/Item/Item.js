import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ itemName, price, itemImg }) => {
  return (
    <div className="itemBox">
      <Link to="/">
        <img className="itemImg" alt="제픔이미지" src={itemImg} />
      </Link>
      <Link to="/">{itemName}</Link>
      <span>{price}원</span>
    </div>
  );
};

export default Item;
