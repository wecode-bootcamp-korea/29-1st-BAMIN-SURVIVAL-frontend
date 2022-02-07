import React from 'react';

const TotalAmount = ({ items }) => {
  const totalPrice = items
    .filter(item => item.is_check)
    .map(item => item.price * item.qty)
    .reduce((a, b) => a + b, 0);

  const checkedItem = items.filter(item => item.is_check);

  const toKRPrice = totalPrice.toLocaleString('ko-KR');
  const shipping = 2500;
  const totalAmount = (totalPrice + shipping).toLocaleString('ko-KR');

  return (
    <div className="totalAmount">
      <div className="productAmount">
        <p>
          총 <span className="itemsCount">{checkedItem.length}</span>개의
          상품금액
        </p>
        <span className="selectedProduct">{toKRPrice}</span>
        <span className="won">원</span>
      </div>
      <i className="fas fa-plus" />
      <div className="delivery">
        <p>배송비</p>
        <span className="deliveryFee">
          {checkedItem.length > 0 ? shipping : 0}
        </span>
        <span className="won">원</span>
      </div>
      <i className="fas fa-equals" />
      <div className="productTotal">
        <p>합계</p>
        <span className="finalAmount">
          {checkedItem.length > 0 ? totalAmount : 0}
        </span>
        <span className="won">원</span>
      </div>
    </div>
  );
};

export default TotalAmount;
