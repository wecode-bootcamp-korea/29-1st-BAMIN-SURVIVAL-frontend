import React from 'react';

const DetailTabReview = () => {
  return (
    <div className="productDetailTab">
      <ul className="tabWrraper">
        <li className="tabList">
          <a href="#detail" className="tabContent">
            상품상세정보
          </a>
        </li>
        <li className="tabList">
          <a href="#shipping" className="tabContent">
            배송안내
          </a>
        </li>
        <li className="tabList">
          <a href="#exchange" className="tabContent">
            교환 및 반품안내
          </a>
        </li>
        <li className="tabListOn">
          <a href="#review" className="tabContentOn">
            상품후기
          </a>
        </li>
        <li className="tabList">
          <a href="#inquiry" className="tabContent">
            상품문의
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DetailTabReview;
