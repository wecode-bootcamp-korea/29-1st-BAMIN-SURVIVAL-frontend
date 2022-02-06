import React from 'react';
import './MyPageHeader.scss';

const MyPageHeader = ({ point, nickname }) => {
  return (
    <div className="myPageHeader">
      <p className="niceToMeetYou">반가워요,</p>
      <p className="pointText">
        <span className="point">{point}</span>포인트
      </p>
      <div className="memberGrade">
        <p className="nickText">
          <span className="nick">{nickname}</span>님의
        </p>
        <p className="gradeText">회원등급은 일반회원그룹 입니다.</p>
      </div>
    </div>
  );
};

export default MyPageHeader;
