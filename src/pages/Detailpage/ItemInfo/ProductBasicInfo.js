import React from 'react';
import './ProductBasicInfo.scss';

const ProductBasicInfo = ({ itemName, discount, price, salePrice }) => {
  return (
    <>
      <h3 className="productName">{itemName}</h3>
      {discount ? (
        <div className="productPriceBox">
          <span className="pdPriceTag">정가</span>
          <span className="pdOriginalPrice">
            {price.toLocaleString() + '원'}
          </span>
        </div>
      ) : null}

      <div className="productPriceBox">
        <span className="pdPriceTag">판매가격</span>
        <span className="pdPrice">{salePrice.toLocaleString() + '원'}</span>
      </div>

      <div className="shippingInfoBox">
        <span className="shippingInfo">배송정보</span>
        <div className="shippingContents">
          <span className="content">2,500원 (3만원 이상 구매시 무료)</span>
          <span className="content">오후 1시 당일 배송마감</span>
        </div>
      </div>
    </>
  );
};

export default ProductBasicInfo;
