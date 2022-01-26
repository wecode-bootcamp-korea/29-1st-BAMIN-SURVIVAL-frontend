import React from 'react';
import SORT_LIST from '../../constantData';

const SortCategory = ({ totalNumberItems, sortFucntion }) => {
  return (
    <section className="sortCategory">
      <div className="left">총 {totalNumberItems} 개</div>
      <div className="right">
        {SORT_LIST.map(sortList => {
          return (
            <button
              className="sortBtn"
              type="button"
              key={sortList.id}
              name={sortList.name}
              onClick={sortFucntion}
            >
              {sortList.name}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default SortCategory;
