import React from 'react';
import './RecentSearch.scss';
import SearchWord from './SearchWord';

const RecentSearch = ({ value }) => {
  return (
    <div className="recentSearch">
      <p className="recentWord">최근검색어</p>
      <div className="separateLine" />
      <ul className="searchList">
        <li className="searchWord">
          <span>전기톱</span>
          <button>✕</button>
        </li>
        <li className="searchWord">
          <span>전기톱</span>
          <button>✕</button>
        </li>
        <SearchWord value={value} />
      </ul>
      <div className="searchBoxControl">
        <button className="searchAllDelete">전체삭제</button>
        <button className="searchClose">닫기</button>
      </div>
    </div>
  );
};

export default RecentSearch;
