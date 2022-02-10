import React from 'react';
import Rate from '../Rate/Rate';

const CreateReview = ({
  onChange,
  onCreate,
  comment,
  onUpdate,
  isRegisterBtnClick,
  btnStateReset,
}) => {
  return (
    <div className="reviewBox">
      <div className="rateBox">
        <span className="rateTitle">별점등록</span>
        <span className="rateContent">총 5점이에요</span>
        <div className="starBox">
          <Rate />
          <Rate />
          <Rate />
          <Rate />
          <Rate />
        </div>
      </div>
      <div className="reviewInputBox">
        <form>
          <textarea
            name="comment"
            wrap="virtual"
            className="reviewInput"
            value={comment}
            onChange={onChange}
          >
            리뷰를 작성해 주세요
          </textarea>
        </form>
        <div className="btnBox">
          <button className="closeBtn" type="button" onClick={btnStateReset}>
            닫기
          </button>
          {isRegisterBtnClick ? (
            <button className="submitBtn" type="button" onClick={onCreate}>
              등록
            </button>
          ) : (
            <button className="submitBtn" type="button" onClick={onUpdate}>
              수정
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateReview;
