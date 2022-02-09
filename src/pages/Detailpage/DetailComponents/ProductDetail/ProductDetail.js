import React, { useState, useRef } from 'react';
import DetailTabDescription from './DetailTabDescription';
import DetailTabShipping from './DetailTabShipping';
import DetailTabExchange from './DetailTabExchange';
import DetailTabReview from './DetailTabReview';
import DetailTabQna from './DetailTabQna';
import DetailInfo from './DetailInfo';
import ShippingInfo from './ShippingInfo';
import ExchangeInfo from './ExchangeInfo';
import Review from '../Review/Review';
import CreateReview from '../CreateReview/CreateReview';
import './ProductDetail.scss';

const ProductDetail = users => {
  const [writeReview, setWriteReview] = useState({
    comment: '',
    id: '',
  });
  const { comment, id } = writeReview;
  const [userReviews, setUserReviews] = useState(users);
  const nextId = useRef(5);
  const nextUserName = useRef(5);
  // const reviewNum = userReviews.filter(user => user.comment.length > 0).length;
  const [isRegisterBtnClick, setIsRegisterBtnClick] = useState(false);
  const [isCorrectBtnClick, setIsCorrectBtnClick] = useState(false);

  const TABLIST_OBJ = {
    1: <DetailTabDescription />,
    2: <DetailTabShipping />,
    3: <DetailTabExchange />,
    4: <DetailTabReview />,
    5: <DetailTabQna />,
  };

  const onCreateReview = () => {
    const newReview = {
      id: nextId.current,
      username: nextUserName.current,
      comment: comment,
      commentdate: '2022.02.28',
    };
    setUserReviews([...userReviews, newReview]);
    setWriteReview({
      comment: '',
    });
    nextId.current += 1;
    nextUserName.current += 1;
    setIsRegisterBtnClick(!isRegisterBtnClick);
    alert('등록이 완료되었습니다.');
  };

  const onChangeReview = e => {
    const { name, value } = e.target;
    setWriteReview({
      ...writeReview,
      [name]: value,
    });
  };

  const onClick = () => {
    setIsRegisterBtnClick(!isRegisterBtnClick);
  };

  const onUpdateReview = () => {
    setUserReviews(
      userReviews.map(x => (x.id === id ? { ...x, comment: comment } : x))
    );
    setWriteReview({
      comment: '',
      id: '',
    });
  };

  const onRemoveReview = id => {
    setUserReviews(userReviews.filter(x => x.id !== id));
  };

  const onModifyReview = user => {
    setIsCorrectBtnClick(!isCorrectBtnClick);
    setWriteReview({
      username: user.username,
      comment: user.comment,
      id: user.id,
    });
  };

  const btnStateReset = () => {
    setIsRegisterBtnClick(false);
    setIsCorrectBtnClick(false);
  };

  return (
    <article className="productDetail">
      <div id="detail">
        {TABLIST_OBJ[1]}
        <DetailInfo />
      </div>
      <div id="shipping">
        {TABLIST_OBJ[2]}
        <ShippingInfo />
      </div>
      <div id="exchange">
        {TABLIST_OBJ[3]}
        <ExchangeInfo />
      </div>
      <div id="review">
        {TABLIST_OBJ[4]}
        <div className="purchaseReview">
          <h4 className="purchaseReviewTitle">상품후기</h4>
          <p className="writeBtn" onClick={onClick}>
            상품후기 글쓰기
          </p>
          <div className="purchaseReviewContent">
            <table className="reviewTable">
              <thead>
                {null ? (
                  userReviews.map(user => (
                    <Review
                      key={user.id}
                      user={user}
                      onRemove={onRemoveReview}
                      onModify={onModifyReview}
                    />
                  ))
                ) : (
                  <tr>
                    <td className="noReview" colSpan="4">
                      등록된 상품후기가 없습니다.
                    </td>
                  </tr>
                )}
              </thead>
            </table>
          </div>
          {isRegisterBtnClick || isCorrectBtnClick ? (
            <CreateReview
              onChange={onChangeReview}
              onCreate={onCreateReview}
              comment={comment}
              onUpdate={onUpdateReview}
              isRegisterBtnClick={isRegisterBtnClick}
              btnStateReset={btnStateReset}
            />
          ) : null}
        </div>
      </div>
      <div id="inquiry">
        {TABLIST_OBJ[5]}
        <div className="purchaseInquiry">
          <h4 className="purchaseInquiryTitle">상품문의</h4>
          <p className="writeBtn">상품문의 글쓰기</p>
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
