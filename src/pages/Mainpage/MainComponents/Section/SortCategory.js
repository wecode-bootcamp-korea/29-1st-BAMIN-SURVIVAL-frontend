import React from 'react';
import SORT_LIST from '../constantData';
import './SortCategory.scss';

const SortCategory = ({ totalNumberItems, sortFucntion }) => {
  return (
    <div className="wrrapper">
      <section className="sortCategory">
        <div className="left">총 {totalNumberItems} 개</div>
        <div className="right">
          {SORT_LIST.map(sortList => {
            return (
              <button
                className="sortBtn"
                type="button"
                key={sortList.id}
                name={sortList.id}
                onClick={sortFucntion}
              >
                {sortList.name}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default SortCategory;
