import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ items }) => {
  return (
    <>
      {items.map((item, idx) => {
        return (
          <Item
            itemName={item.itemName}
            itemImg={item.itemImg}
            price={item.price}
            key={idx}
            description={item.description}
          />
        );
      })}
    </>
  );
};

export default ItemList;
