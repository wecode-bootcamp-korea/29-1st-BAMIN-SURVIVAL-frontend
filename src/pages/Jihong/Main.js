import React, { useState, useEffect } from 'react';
import Carousel from './MainComponents/Section/Carousel';
import SortCategory from './MainComponents/Section/SortCategory';
import ItemList from './MainComponents/ItemList/ItemList';
import './Main.scss';

const Main = () => {
  const [items, setItems] = useState([]);
  const carouselItems = [...items].filter(item => item.price > 70000);

  useEffect(() => {
    fetch('/data/Jihong/ItemListData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, []);

  const sortFucntion = e => {
    const recent = [...items].sort(function (a, b) {
      let dateA = new Date(a.updateDate).getTime();
      let dateB = new Date(b.updateDate).getTime();
      return dateA < dateB ? 1 : -1;
    });
    const ascend = [...items].sort((a, b) => a.price - b.price);
    const decend = [...items].sort((a, b) => b.price - a.price);
    if (e.target.innerText === '높은가격순') {
      setItems(decend);
      return;
    } else if (e.target.innerText === '낮은가격순') {
      setItems(ascend);
      return;
    } else if (e.target.innerText === '최신순') {
      setItems(recent);
      return;
    }
  };

  return (
    <main className="main">
      <Carousel carouselItems={carouselItems} />
      <SortCategory
        totalNumberItems={items.length}
        sortFucntion={sortFucntion}
      />
      <article className="article">
        <ItemList items={items} />
      </article>
    </main>
  );
};

export default Main;
