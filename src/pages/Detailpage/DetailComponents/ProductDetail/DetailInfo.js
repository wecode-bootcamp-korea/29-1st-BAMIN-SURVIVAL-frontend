import React from 'react';

const DetailInfo = ({ detail_img }) => {
  return (
    <>
      <div className="detailDescription">
        <h4 className="descriptionTitle">상품상세정보</h4>
        <img
          alt="상세설명 및 이미지"
          className="decriptionImg"
          src={detail_img}
        />
      </div>
      <div className="requiredInfoTable">
        <div className="requiredInfoTitle">상품필수 정보</div>
        <table className="requiredInfo">
          <thead />
          <tbody>
            <tr>
              <th className="infoLeft">제품명</th>
              <td className="infoRight">K9 자주포</td>
            </tr>
            <tr>
              <th className="infoLeft">제조사</th>
              <td className="infoRight">위코드팩토리</td>
            </tr>
            <tr>
              <th className="infoLeft">공급사</th>
              <td className="infoRight">(주)배민서바이벌</td>
            </tr>
            <tr>
              <th className="infoLeft">제조국</th>
              <td className="infoRight">한국</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DetailInfo;
