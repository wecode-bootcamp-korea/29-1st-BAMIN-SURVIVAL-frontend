import React, { useState, useEffect } from 'react';
import './MyPage.scss';
import MyPageHeader from './MyPageHeader/MyPageHeader';
import RecentOrderList from './RecentOrderList/RecentOrderList';
import NoDataOrder from './NoData/NoDataOrder';
import NoDataProduct from './NoData/NoDataProduct';
import ProductsList from '../Mainpage/MainComponents/ProductsList/ProductsList';

const MyPage = () => {
  const [memberData, setMemberData] = useState({});
  const [recentOrders, setRecentOrders] = useState([]);
  const [recentProducts, setRecentProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/MyPage/ORDER_DATA.json')
      .then(res => res.json())
      .then(res => setRecentOrders(res));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/MyPage/MEMBER_DATA.json')
      .then(res => res.json())
      .then(res => setMemberData(res));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/MyPage/RECENT_PRODUCT_DATA.json')
      .then(res => res.json())
      .then(res => setRecentProducts(res));
  }, []);

  const isOrderExists = recentOrders.length > 0;
  const isProductExists = recentProducts.length > 0;

  return (
    <div className="myPage">
      <main className="myPageMain">
        <MyPageHeader point={memberData.point} nickname={memberData.nickname} />
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
              {isOrderExists ? (
                <RecentOrderList recentOrder={recentOrders} />
              ) : (
                <NoDataOrder />
              )}
            </tbody>
          </table>
        </div>
        <div className="productRecentSeen">
          <div className="recentTitle">
            <h3>
              최근 본 상품
              <span>{memberData.nickname}님께서 본 최근 상품입니다.</span>
            </h3>
          </div>
          {isProductExists ? (
            <ProductsList
              className="recentProductsList"
              products={recentProducts.slice(-4)}
            />
          ) : (
            <NoDataProduct />
          )}
        </div>
      </main>
    </div>
  );
};

export default MyPage;
