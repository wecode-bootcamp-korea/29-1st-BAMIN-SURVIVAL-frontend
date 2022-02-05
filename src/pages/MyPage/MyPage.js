import React, { useState, useEffect } from 'react';
import './MyPage.scss';
import Footer from '../Footer/Footer';
import MyPageHeader from './MyPageHeader';
import RecentOrder from './RecentOrder';

const MyPage = () => {
  const [recentOrders, setRecentOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/data/MyPage/ORDER_DATA.json')
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
              <tr>
                {recentOrders.map(data => {
                  const {
                    id,
                    date,
                    order_number,
                    image_url,
                    name,
                    option,
                    price,
                    quantity,
                    order_state,
                  } = data;
                  return (
                    <RecentOrder
                      key={id}
                      date={date}
                      orderNumber={order_number}
                      img={image_url}
                      name={name}
                      option={option}
                      price={price}
                      quantity={quantity}
                      orderState={order_state}
                    />
                  );
                })}
              </tr>
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
      <Footer />
    </div>
  );
};

export default MyPage;
