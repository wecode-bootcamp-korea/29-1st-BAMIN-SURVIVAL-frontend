import React from 'react';
import Item from '../Item/Item';
import './ItemList.scss';

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
            discount={item.discountRate}
            sale={item.sale}
            green={item.green}
            isInventoryStatus={item.inventoryStatus}
          />
        );
      })}
    </li>
  );
};

export default ItemList;
