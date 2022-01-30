import React from 'react';

const Search = ({ onSubmit }) => {
  return (
    <form action="#" method="post" className="search" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="검색어를 입력해주세요"
        className="searchInput"
      />
      <button type="sumbmit" className="searchIcon">
        <i className="fas fa-search" />
      </button>
    </form>
  );
};

export default Search;
