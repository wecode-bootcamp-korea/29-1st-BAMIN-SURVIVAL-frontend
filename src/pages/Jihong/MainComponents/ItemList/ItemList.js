import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ items }) => {
  return (
    <li className="itemList">
      {items.map((item, id) => {
        return (
          <Item
            itemName={item.itemName}
            itemImg={item.itemImg}
            price={item.price}
            key={id}
            description={item.description}
          />
        );
      })}
    </li>
  );
};

export default ItemList;
