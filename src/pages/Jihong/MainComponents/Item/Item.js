import React from 'react';

const Item = ({ itemName, price, itemImg }) => {
  return (
    <div className="itemBox">
      <img className="itemImg" alt="제픔이미지" src={itemImg} />
      <a href="/#">{itemName}</a>
      <span>{price}</span>
    </div>
  );
};

export default Item;
