import React from 'react';
import RecentOrder from './RecentOrder';

const RecentOrderList = ({ recentOrder }) => {
  return recentOrder.map(data => {
    const {
      id,
      date,
      order_number,
      image_url,
      name,
      option,
      price,
      quantity,
      order_state,
    } = data;
    return (
      <RecentOrder
        key={id}
        date={date}
        orderNumber={order_number}
        img={image_url}
        name={name}
        option={option}
        price={price}
        quantity={quantity}
        orderState={order_state}
      />
    );
  });
};

export default RecentOrderList;
