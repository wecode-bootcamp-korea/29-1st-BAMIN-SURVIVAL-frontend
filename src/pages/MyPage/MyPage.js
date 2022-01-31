import React from 'react';
import './MyPage.scss';

const MyPage = () => {
  return (
    <div className="myPage">
      <main className="myPageMain">
        <div className="myPageContent">
          <div className="myPageHeader">
            <p className="niceToMeetYou">반가워요,</p>
            <p className="point">포인트</p>
            <div className="memberGrade">
              <p>임채현님의</p>
              <p>회원등급은 일반회원그룹 입니다.</p>
            </div>
            <div className="recentOrderInfo">
              <div className="recentOrderTitle">
                <h3>진행 중인 주문</h3>
                <p>최근 30일 내에 진행중인 주문정보입니다.</p>
                <button className="btnMoreRecentOrder">+ 더보기</button>
              </div>
              <table className="tableRecentOrder">
                <thead>
                  <tr>
                    <th>날짜/주문번호</th>
                    <th>상품명/옵션</th>
                    <th>상품금액/수량</th>
                    <th>확인/리뷰</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="5">
                      <p className="noData">조회내역이 없습니다.</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyPage;
