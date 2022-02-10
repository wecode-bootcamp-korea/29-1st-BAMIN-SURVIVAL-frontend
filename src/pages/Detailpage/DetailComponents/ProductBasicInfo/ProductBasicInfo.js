import React from 'react';
import './ProductBasicInfo.scss';

const ProductBasicInfo = ({ name, price, discount_rate, discount_price }) => {
  return (
    <>
      <h3 className="productName">{name}</h3>
      {discount_rate ? (
        <div className="productPriceBox">
          <span className="pdPriceTag">정가</span>
          <span className="pdOriginalPrice">
            {typeof price === 'number' ? price.toLocaleString() + '원' : null}
          </span>
        </div>
      ) : null}

      <div className="productPriceBox">
        <span className="pdPriceTag">판매가격</span>
        <span className="pdPrice">
          {typeof price === 'number'
            ? discount_price.toLocaleString() + '원'
            : null}
        </span>
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
