import React from 'react';
import './RecentSearch.scss';

const RecentSearch = () => {
  return (
    <div className="recentSearch">
      <p className="recentWord">최근검색어</p>
      <div className="separateLine" />
      <div className="searchBoxControl">
        <button className="searchAllDelete">전체삭제</button>
        <button className="searchClose">닫기</button>
      </div>
    </div>
  );
};

export default RecentSearch;
