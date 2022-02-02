import React from 'react';
import './ProductBasicImg.scss';

const ProductBasicImg = ({ product_img, toggleModal }) => {
  return (
    <div className="InfoImgBox">
      <img
        className="productImg"
        src={product_img}
        alt="제품이미지"
        onClick={toggleModal}
      />
    </div>
  );
};

export default ProductBasicImg;
