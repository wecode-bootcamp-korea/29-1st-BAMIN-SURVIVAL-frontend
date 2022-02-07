import React from 'react';
import './OrderComplete.scss';

const OrderComplete = () => {
  return (
    <section className="orderComplete">
      <div className="completeHeader">
        <div className="completeTitle">주문완료</div>
        <div className="completeProcess">
          <span className="completeBefore">01 장바구니</span>
          <span>
            <i className="fas fa-chevron-right" />
          </span>
          <span className="completeNow">02 주문완료</span>
        </div>
      </div>

      <div className="completeOrder">주문이 완료되었습니다.</div>

      <div className="completeButton">
        <button className="completeMain" onClick={() => {}}>
          메인으로
        </button>
        <button className="completeMyPage" onClick={() => {}}>
          주문확인
        </button>
      </div>
    </section>
  );
};

export default OrderComplete;
