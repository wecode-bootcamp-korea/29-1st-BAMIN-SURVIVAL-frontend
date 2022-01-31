import React from 'react';
import './ProductBasicImg.scss';

const ProductBasicImg = ({ itemImg, toggleModal }) => {
  return (
    <div className="InfoImgBox">
      <img
        className="productImg"
        src={itemImg}
        alt="제품이미지"
        onClick={toggleModal}
      />
    </div>
  );
};

export default ProductBasicImg;
