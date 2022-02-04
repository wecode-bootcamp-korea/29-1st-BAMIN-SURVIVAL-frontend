import React from 'react';
import './ProductBasicImg.scss';

const ProductBasicImg = ({ img, toggleModal }) => {
  return (
    <div className="InfoImgBox">
      <img
        className="productImg"
        src={img}
        alt="제품이미지"
        onClick={toggleModal}
      />
    </div>
  );
};

export default ProductBasicImg;
