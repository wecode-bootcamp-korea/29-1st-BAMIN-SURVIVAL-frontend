import React from 'react';
import './NoDataOrder.scss';

const NoDataOrder = () => {
  return (
    <tr>
      <td colSpan="5" className="noDataOrder">
        <p className="noDataText">최근 주문된 상품이 없습니다.</p>
      </td>
    </tr>
  );
};

export default NoDataOrder;
