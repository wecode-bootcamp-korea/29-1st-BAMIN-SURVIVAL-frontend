import React from 'react';
import './NoDataProduct.scss';

const NoDataProduct = () => {
  return (
    <ul>
      <li className="noDataProduct">
        <p className="noDataText">최근 본 상품이 없습니다.</p>
      </li>
    </ul>
  );
};

export default NoDataProduct;
