import React from 'react';
import './PaginationButton.scss';

const PaginationButton = ({ updateOffset }) => {
  return (
    <div className="paginationButton">
      <button className="pageBtn" onClick={() => updateOffset(0)}>
        1
      </button>
      <button className="pageBtn" onClick={() => updateOffset(1)}>
        2
      </button>
      <button className="pageBtn" onClick={() => updateOffset(2)}>
        3
      </button>
    </div>
  );
};
export default PaginationButton;
