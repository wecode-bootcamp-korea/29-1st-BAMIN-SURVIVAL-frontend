import React from 'react';
import './MyPageHeader.scss';

const MyPageHeader = () => {
  return (
    <div className="myPageHeader">
      <p className="niceToMeetYou">반가워요,</p>
      <p className="point">포인트</p>
      <div className="memberGrade">
        <p>임채현님의</p>
        <p>회원등급은 일반회원그룹 입니다.</p>
      </div>
    </div>
  );
};

export default MyPageHeader;
