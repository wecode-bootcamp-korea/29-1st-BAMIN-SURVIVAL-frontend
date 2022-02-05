import React from 'react';
import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <article className="productDetail">
      <div id="detail">
        <div className="productDetailTab">
          <ul className="tabWrraper">
            <li className="tabListOn">
              <a href="#detail" className="tabContentOn">
                상품상세정보
              </a>
            </li>
            <li className="tabList">
              <a href="#shipping" className="tabContent">
                배송안내
              </a>
            </li>
            <li className="tabList">
              <a href="#exhange" className="tabContent">
                교환 및 반품안내
              </a>
            </li>
            <li className="tabList">
              <a href="#review" className="tabContent">
                상품후기
              </a>
            </li>
            <li className="tabList">
              <a href="#inquiry" className="tabContent">
                상품문의
              </a>
            </li>
          </ul>
        </div>
        <div className="detailDescription">
          <h4 className="descriptionTitle">상품상세정보</h4>
          <img
            alt="상세설명 및 이미지"
            className="decriptionImg"
            src="/images/Jihong/sampleDetailImg_1.jpg"
          />
          <img
            alt="상세설명 및 이미지"
            className="decriptionImg"
            src="/images/Jihong/sampleDetailImg_2.jpg"
          />
          <img
            alt="상세설명 및 이미지"
            className="decriptionImg"
            src="/images/Jihong/sampleDetailImg_3.jpg"
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
      </div>
      <div id="shipping">
        <div className="productDetailTab">
          <ul className="tabWrraper">
            <li className="tabList">
              <a href="#detail" className="tabContent">
                상품상세정보
              </a>
            </li>
            <li className="tabListOn">
              <a href="#shipping" className="tabContentOn">
                배송안내
              </a>
            </li>
            <li className="tabList">
              <a href="#exchange" className="tabContent">
                교환 및 반품안내
              </a>
            </li>
            <li className="tabList">
              <a href="#review" className="tabContent">
                상품후기
              </a>
            </li>
            <li className="tabList">
              <a href="#inquiry" className="tabContent">
                상품문의
              </a>
            </li>
          </ul>
        </div>
        <div className="shippingInfo">
          <h4 className="shippingInfoTitle">배송안내 </h4>
          <p className="shippingInfoContent">· 배송사 : CJ대한통운</p>
          <p className="shippingInfoContent">
            · 배송비 : 2,500원 (3만원 이상 구매 시무료배송)
          </p>
          <p className="shippingInfoContent">
            도서, 산간 일부지역은 배송비가 추가될 수 있습니다.
          </p>
          <p className="shippingInfoContent">
            · 배송기간 : 오후 1시 이전 결제완료시 당일 출고 (영업일 기준)
          </p>
          <p className="shippingInfoContent">
            단, 상품의 재고 상황, 배송량, 배송 지역에 따라 배송일이 추가로
            소요될 수 있는 점 양해 부탁드립니다.
          </p>
        </div>
      </div>

      <div id="exchange">
        <div className="productDetailTab">
          <ul className="tabWrraper">
            <li className="tabList">
              <a href="#detail" className="tabContent">
                상품상세정보
              </a>
            </li>
            <li className="tabList">
              <a href="#shipping" className="tabContent">
                배송안내
              </a>
            </li>
            <li className="tabListOn">
              <a href="#exchange" className="tabContentOn">
                교환 및 반품안내
              </a>
            </li>
            <li className="tabList">
              <a href="#review" className="tabContent">
                상품후기
              </a>
            </li>
            <li className="tabList">
              <a href="#inquiry" className="tabContent">
                상품문의
              </a>
            </li>
          </ul>
        </div>
        <div className="exchangeReturnInfo">
          <h4 className="exchangeReturnInfoTitle">교환및 반품안내</h4>
          <p className="exchangeReturnInfoContent">· 배송사 : CJ대한통운</p>
          <p className="exchangeReturnInfoContent">
            · 주문 취소 및 배송지 변경은 “결제완료” 단계에서만 가능합니다.
          </p>
          <p className="exchangeReturnInfoContent">
            · "상품준비중" 단계에서는 주문 취소 및 배송지 변경이 불가합니다.
          </p>
          <p className="exchangeReturnInfoContent">
            · 교환 및 반품은 배송완료 후 7일 이내에 가능합니다.
          </p>
          <p className="exchangeReturnInfoContent">
            · 상품의 불량/하자 및 표시광고 및 계약 내용이 다른 경우 해당 상품의
            회수 비용은 무료입니다.
          </p>
          <p className="exchangeReturnInfoContent">
            · 반송지 : 10832 경기 파주시 문산읍 선유리 1375-5번지 배민문방구
            물류센터
          </p>
          <p className="exchangeReturnInfoContent">· 배송사 : CJ대한통운</p>
        </div>
      </div>

      <div id="review">
        <div className="productDetailTab">
          <ul className="tabWrraper">
            <li className="tabList">
              <a href="#detail" className="tabContent">
                상품상세정보
              </a>
            </li>
            <li className="tabList">
              <a href="#shipping" className="tabContent">
                배송안내
              </a>
            </li>
            <li className="tabList">
              <a href="#exchange" className="tabContent">
                교환 및 반품안내
              </a>
            </li>
            <li className="tabListOn">
              <a href="#review" className="tabContentOn">
                상품후기
              </a>
            </li>
            <li className="tabList">
              <a href="#inquiry" className="tabContent">
                상품문의
              </a>
            </li>
          </ul>
        </div>
        <div className="purchaseReview">
          <h4 className="purchaseReviewTitle">상품후기</h4>
          <p className="writeBtn">상품후기 글쓰기</p>
          <div className="purchaseInquiryContent">
            <table className="reviewTable">
              <thead>
                <tr>
                  <td className="noReview" colSpan="4">
                    등록된 상품후기가 없습니다.
                  </td>
                </tr>
                <tr>
                  <td className="reviewRate">제품명</td>
                  <td className="reviewTitle">
                    <span>너무좋아요</span>
                  </td>
                  <td className="reviewUser">제품명</td>
                  <td className="reviewDate">제품명</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
      <div id="inquiry">
        <div className="productDetailTab">
          <ul className="tabWrraper">
            <li className="tabList">
              <a href="#detail" className="tabContent">
                상품상세정보
              </a>
            </li>
            <li className="tabList">
              <a href="#shipping" className="tabContent">
                배송안내
              </a>
            </li>
            <li className="tabList">
              <a href="#exchange" className="tabContent">
                교환 및 반품안내
              </a>
            </li>
            <li className="tabList">
              <a href="#review" className="tabContent">
                상품후기
              </a>
            </li>
            <li className="tabListOn">
              <a href="#inquiry" className="tabContentOn">
                상품문의
              </a>
            </li>
          </ul>
        </div>
        <div className="purchaseInquiry">
          <h4 className="purchaseInquiryTitle">상품후기</h4>
          <p className="writeBtn">상품후기 글쓰기</p>
          <div className="purchaseInquiryContent">
            <table className="qnaTable">
              <thead>
                <tr>
                  <td className="noQna" colSpan="5">
                    등록된 상품문의가 없습니다.
                  </td>
                </tr>
                <tr>
                  <td className="qnaNum">제품명</td>
                  <td className="qnaType">제품명</td>
                  <td className="qnaUser">제품명</td>
                  <td className="qnaDate">제품명</td>
                  <td className="qnaStatus">제품명</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductDetail;
