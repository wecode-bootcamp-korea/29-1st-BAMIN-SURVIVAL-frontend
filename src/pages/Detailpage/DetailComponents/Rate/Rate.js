import React, { useState } from 'react';

const Rate = () => {
  const [isLiked, setIsLiked] = useState(true);
  const isLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button className="starBtn" onClick={() => isLikeClick()}>
      <i className={`${isLiked ? 'far' : 'fas'} fa-star`} />
    </button>
  );
};

export default Rate;
