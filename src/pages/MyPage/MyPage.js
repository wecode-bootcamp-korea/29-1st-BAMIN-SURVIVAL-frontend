import React from 'react';
import './MyPage.scss';

const MyPage = () => {
  return (
    <div className="myPage">
      <main className="myPageMain">
        <div className="myPageHeader">
          <p className="niceToMeetYou">반가워요,</p>
          <p className="point">포인트</p>
          <div className="memberGrade">
            <p>임채현님의</p>
            <p>회원등급은 일반회원그룹 입니다.</p>
          </div>
        </div>
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
                <th className="productName">상품명/옵션</th>
                <th>상품금액/수량</th>
                <th>주문상태</th>
                <th>확인/리뷰</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5">
                  <p className="noData">조회내역이 없습니다.</p>
                </td>
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
    </div>
  );
};

export default MyPage;
