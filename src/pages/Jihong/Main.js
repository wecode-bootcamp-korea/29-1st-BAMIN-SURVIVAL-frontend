import React, { useState, useEffect } from 'react';
import './Main.scss';
import ItemList from './MainComponents/ItemList/ItemList';
import constantData from './constantData';

const Main = () => {
  const [items, setItems] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetch('/data/Jihong/ItemListData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, []);
  const isClick = () => {
    setIsClicked(!isClicked);
  };

  console.log(items);
  const items2 = items.sort(function (a, b) {
    return a.price - b.price;
  });
  console.log(items2);

  const filteredItems = items.filter(item => item.price > 50000);
  console.log(items.price);
  console.log(filteredItems);

  return (
    <main>
      <section>
        <div className="sectionLeft">총 254개</div>
        <div className="sectionRight">
          {constantData.map((list, idx) => {
            return (
              <button type="button" onClick={isClick} key={idx}>
                {list.listName}
              </button>
            );
          })}
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
