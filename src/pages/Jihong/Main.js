import React, { useState, useEffect } from 'react';
import './Main.scss';
import ItemList from './MainComponents/ItemList/ItemList';

const Main = () => {
  const [items, setItems] = useState([]);

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
    <main>
      <section>
        <div className="sectionLeft">총 254개</div>
        <div className="sectionRight">
          추천순 인기순 최신순 낮은 가격순 높은 가격순
        </div>
      </section>
      <article>
        <li>
          <ItemList items={items} />
        </li>
      </article>
    </main>
  );
};

export default Main;
