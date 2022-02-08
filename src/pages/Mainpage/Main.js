import React, { useState, useEffect } from 'react';
import Carousel from './MainComponents/Section/Carousel';
import SortCategory from './MainComponents/Section/SortCategory';
import ItemList from './MainComponents/ItemList/ItemList';
import './Main.scss';

const Main = () => {
  const [items, setItems] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('recent');

  const carouselItems = items.filter(item => item.price > 70000).slice(0, 4);

  const sortBy = {
    recent: function (a, b) {
      let dateA = new Date(a.updateDate).getTime();
      let dateB = new Date(b.updateDate).getTime();
      return dateA < dateB ? 1 : -1;
    },
    descend: (a, b) => a.price - b.price,
    ascend: (a, b) => b.price - a.price,
  };

  const sortedItems = [...items].sort(sortBy[sortCriteria]);

  const changeSortCriteria = e => {
    setSortCriteria(e.target.name);
  };

  useEffect(() => {
    fetch('/data/Jihong/ItemListData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, []);

  return (
    <main className="main">
      <Carousel carouselItems={carouselItems} />
      <SortCategory
        totalNumberItems={items.length}
        sortFucntion={changeSortCriteria}
      />
      <article className="article">
        <ItemList items={sortedItems} />
      </article>
    </main>
  );
};

export default Main;
