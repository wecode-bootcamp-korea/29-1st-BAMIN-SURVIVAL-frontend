import React from 'react';
import Rate from '../Rate/Rate';

const Review = ({ user, onModify, onRemove }) => {
  return (
    <tr>
      <td className="reviewRate">
        <Rate />
        <Rate />
        <Rate />
        <Rate />
        <Rate />
      </td>
      <td className="reviewContent">
        <span>{user.comment}</span>
      </td>
      <td className="reviewUser">{user.username}</td>
      <td className="reviewDate">{user.commentdate}</td>
      <td className="reviewDel">
        <button className="reviewDelBtn" onClick={() => onModify(user)}>
          수정
        </button>
        <button className="reviewDelBtn" onClick={() => onRemove(user.id)}>
          삭제
        </button>
      </td>
    </tr>
  );
};

export default Review;
