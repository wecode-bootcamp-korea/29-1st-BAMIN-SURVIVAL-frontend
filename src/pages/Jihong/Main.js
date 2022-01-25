import React, { useState, useEffect } from 'react';
import './Main.scss';
import ItemList from './MainComponents/ItemList/ItemList';
import Section from './MainComponents/Section/Section';

const Main = () => {
  const [items, setItems] = useState([]);
  const [isClicked, setIsClicked] = useState(items);

  useEffect(() => {
    fetch('/data/Jihong/ItemListData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setIsClicked(data);
      });
  }, []);

  const isClick = e => {
    const filterName = e.target.name;
    if (filterName === '낮은가격순') {
      setIsClicked(lowPriceOrder);
    } else if (filterName === '높은가격순') {
      setIsClicked(highPriceOrder);
    } else if (filterName === '최신순') {
      setIsClicked(items);
    }
  };

  const lowPriceOrder = [...items].sort(function (a, b) {
    return a.price - b.price;
  });

  const highPriceOrder = [...items].sort(function (a, b) {
    return b.price - a.price;
  });

  return (
    <main>
      <Section isClick={isClick} totalNumberItems={items.length} />
      <article>
        <ItemList items={isClicked} />
      </article>
    </main>
  );
};

export default Main;
