import React from 'react';
import FILTER_LIST from '../../constantData';

const Section = ({ isClick, totalNumberItems }) => {
  return (
    <section>
      <div className="sectionLeft">총 {totalNumberItems} 개</div>
      <div className="sectionRight">
        {FILTER_LIST.map((filterList, idx) => {
          return (
            <button
              type="button"
              key={idx}
              name={filterList.filterListName}
              onClick={e => isClick(e)}
            >
              {filterList.filterListName}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Section;
