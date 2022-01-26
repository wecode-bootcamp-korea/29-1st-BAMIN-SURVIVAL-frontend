import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ itemName, price, itemImg, sale, green, discount }) => {
  console.log(discount);
  return (
    <div className="itemBox">
      <Link to="/">
        <img className="itemImg" alt="제픔이미지" src={itemImg} />
      </Link>
      <Link to="/">{itemName}</Link>
      <span>{discount ? price * discount * 0.01 : price}원</span>
      {sale ? <i className="fas fa-check-circle" /> : null}
      {green ? <i className="fas fa-check-circle" /> : null}
    </div>
  );
};

export default Item;
