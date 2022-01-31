import React, { useState, useEffect } from 'react';
import Carousel from './MainComponents/Section/Carousel';
import SortCategory from './MainComponents/Section/SortCategory';
import ItemList from './MainComponents/ItemList/ItemList';
import Nav from '../Nav/Nav';
import './Main.scss';

const Main = () => {
  const [items, setItems] = useState([]);
  const [carouselItems, setCarouselItems] = useState([]);
  const [isMainScroll, setIsMainScroll] = useState(true);

  useEffect(() => {
    fetch('/data/Jihong/ItemListData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setCarouselItems(data.filter(item => item.price > 70000).slice(0, 4));
      });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  const sortFucntion = e => {
    const recent = [...items].sort(function (a, b) {
      let dateA = new Date(a.updateDate).getTime();
      let dateB = new Date(b.updateDate).getTime();
      return dateA < dateB ? 1 : -1;
    });
    const ascend = [...items].sort((a, b) => a.price - b.price);
    const decend = [...items].sort((a, b) => b.price - a.price);
    if (e.target.innerText === '최신순') {
      setItems(recent);
      return;
    }
    if (e.target.innerText === '낮은가격순') {
      setItems(ascend);
      return;
    }
    if (e.target.innerText === '높은가격순') {
      setItems(decend);
      return;
    }
  };

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setIsMainScroll(false) : setIsMainScroll(true);
  };

  return (
    <>
      <Nav />
      <main className={isMainScroll ? 'main' : 'mainWithNav'}>
        <Carousel carouselItems={carouselItems} />
        <SortCategory
          totalNumberItems={items.length}
          sortFucntion={sortFucntion}
        />
        <article className="article">
          <ItemList items={items} />
        </article>
      </main>
    </>
  );
};

export default Main;
