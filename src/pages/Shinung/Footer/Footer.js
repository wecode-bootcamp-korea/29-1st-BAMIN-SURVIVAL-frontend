import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="companyInfo">
      <img alt="logo" src="/images/Shinung/logo.png" className="companyLogo" />
      <div className="footerInfo">
        <p className="companyTitle">
          상호 : (주)배민서바이벌 대표 : 나지현, 주지홍, 최희택, 임채현, 힌신웅
        </p>
        <p className="companyNumber">
          사업자등록번호 : 123-45-67890 통신판매업신고번호 : 2022-서울강남-7777
        </p>
        <p className="companyAddress">
          주소 : 서울특별시 강남구 테헤란로 427 10층
        </p>
        <p className="companyReserved">
          © Baemin Survival Corp. All right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
