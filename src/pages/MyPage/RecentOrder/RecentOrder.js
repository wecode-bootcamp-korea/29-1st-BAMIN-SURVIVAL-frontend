import React from 'react';
import './RecentOrder.scss';

const RecentOrder = props => {
  const { date, orderNumber, img, name, option, price, quantity, orderState } =
    props;
  return (
    <tr className="recentOrder">
      <td className="orderData dateOrderNumber">
        <p>{date}</p>
        <p>{orderNumber}</p>
      </td>
      <td className="orderData productNameOption">
        <img className="productImage" alt="상품이미지" src={img} />
        <div>{name} / </div>
        <div>{option}</div>
      </td>
      <td className="orderData priceQuantity">
        <span className="price">{price}원 / </span>
        <span>{quantity}개</span>
      </td>
      <td className="orderData orderState">
        <p>{orderState}</p>
      </td>
      <td className="orderData confirmReview" />
    </tr>
  );
};

export default RecentOrder;
