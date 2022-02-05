import React, { useState, useEffect } from 'react';
import './MyPage.scss';
import MyPageHeader from './MyPageHeader';
import RecentOrderList from './RecentOrderList';

const MyPage = () => {
  const [recentOrders, setRecentOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/MyPage/ORDER_DATA.json')
      .then(res => res.json())
      .then(res => setRecentOrders(res));
  }, []);

  return (
    <div className="myPage">
      <main className="myPageMain">
        <MyPageHeader />
        <div className="recentOrderInfo">
          <div className="recentTitle">
            <h3>
              최근 주문 정보<span>최근 30일 내에 주문하신 내역입니다.</span>
            </h3>
            <button className="btnMoreRecentOrder">+ 더보기</button>
          </div>
          <table className="tableRecentOrder">
            <thead>
              <tr>
                <th>날짜/주문번호</th>
                <th>상품명/옵션</th>
                <th>상품금액/수량</th>
                <th>주문상태</th>
                <th>확인/리뷰</th>
              </tr>
            </thead>
            <tbody>
              <RecentOrderList recentOrder={recentOrders} />
            </tbody>
          </table>
        </div>
        <div className="productRecentSeen">
          <div className="recentTitle">
            <h3>
              최근 본 상품<span>임채현님께서 본 최근 상품입니다.</span>
            </h3>
          </div>
          <p className="noData">상품이 존재하지 않습니다.</p>
        </div>
      </main>
    </div>
  );
};

export default MyPage;
