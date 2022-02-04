import React from 'react';
import './RecentOrder.scss';

const RecentOrder = props => {
  const { date, orderNumber, img, name, option, price, quantity, orderState } =
    props;
  return (
    <>
      <td className="dateOrderNumber">
        <p>{date}</p>
        <p>{orderNumber}</p>
      </td>
      <td className="productNameOption">
        <img className="productImage" alt="상품이미지" src={img} />
        <span>{name}/ </span>
        <span>{option}</span>
      </td>
      <td className="priceQuantity">
        <span>{price}원/ </span>
        <span>{quantity}개</span>
      </td>
      <td className="orderState">
        <p>{orderState}</p>
      </td>
      <td className="confirmReview" />
    </>
  );
};

export default RecentOrder;
