import React from 'react';

const ShippingInfo = () => {
  return (
    <div className="shippingInfo">
      <h4 className="shippingInfoTitle">배송안내 </h4>
      <p className="shippingInfoContent">· 배송사 : CJ대한통운</p>
      <p className="shippingInfoContent">
        · 배송비 : 2,500원 (3만원 이상 구매 시무료배송)
      </p>
      <p className="shippingInfoContent">
        도서, 산간 일부지역은 배송비가 추가될 수 있습니다.
      </p>
      <p className="shippingInfoContent">
        · 배송기간 : 오후 1시 이전 결제완료시 당일 출고 (영업일 기준)
      </p>
      <p className="shippingInfoContent">
        단, 상품의 재고 상황, 배송량, 배송 지역에 따라 배송일이 추가로 소요될 수
        있는 점 양해 부탁드립니다.
      </p>
    </div>
  );
};

export default ShippingInfo;
