import React from 'react';
import MyPageNav from './MyPageNav';
import './MyPageNavList.scss';

const MyPageNavList = () => {
  return (
    <div className="myPageNavList">
      <div className="myPageNavHeader">
        <h2 className="text">마이페이지</h2>
      </div>
      <ul>
        <strong>쇼핑정보</strong>
        {MYPAGE_NAV_DATA1.map(data => {
          const { id, content, path } = data;
          return <MyPageNav key={id} content={content} path={path} />;
        })}
      </ul>
      <ul>
        <strong>회원정보</strong>
        {MYPAGE_NAV_DATA2.map(data => {
          const { id, content, path } = data;
          return <MyPageNav key={id} content={content} path={path} />;
        })}
      </ul>
    </div>
  );
};

const MYPAGE_NAV_DATA1 = [
  {
    id: 100,
    content: '주문목록/배송조회',
    path: '경로',
  },

  {
    id: 102,
    content: '취소/반품/교환 내역',
    path: '경로',
  },

  {
    id: 103,
    content: '환불 내역',
    path: '경로',
  },

  {
    id: 104,
    content: '찜리스트',
    path: '경로',
  },

  {
    id: 105,
    content: '쿠폰함',
    path: '경로',
  },

  {
    id: 106,
    content: '적립금',
    path: '경로',
  },
];

const MYPAGE_NAV_DATA2 = [
  {
    id: 107,
    content: '1:1 문의게시판',
    path: '경로',
  },

  {
    id: 108,
    content: '회원정보 변경',
    path: '경로',
  },

  {
    id: 109,
    content: '배송지 관리',
    path: '경로',
  },

  {
    id: 110,
    content: '나의 상품문의',
    path: '경로',
  },

  {
    id: 111,
    content: '나의 상품후기',
    path: '경로',
  },
];

export default MyPageNavList;
