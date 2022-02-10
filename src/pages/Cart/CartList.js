import React, { useState } from 'react';
import Modal from './Modal/Modal';

const CartList = ({ item, idx, items, setItems }) => {
  const shippingPrice = item.shipping.toLocaleString('ko-KR');
  const itemPrice = (item.price * item.quantity).toLocaleString('ko-KR');
  const [isOpen, setIsOpen] = useState(false);

  const itemCheck = id => {
    const checkedItems = items.map(item => {
      if (item.id === id) return { ...item, is_check: !item.is_check };
      else return item;
    });
    setItems(checkedItems);
  };

  return (
    <tr>
      <td className="productCheck">
        <input
          type="checkbox"
          name={item.name}
          onChange={() => itemCheck(item.id)}
          checked={item.is_check}
          disabled={item.qty === 0 && true}
        />
      </td>
      <td className="productImage">
        <img alt="제품 이미지" src="/images/Shinung/test.jpeg" />
      </td>
      <td className="productName">
        <p>{item.name}</p>
        {item.option && <p>옵션 : {item.option}</p>}
      </td>
      <td className="productOption">
        <p>{item.quantity}개</p>
        <button
          className="productModify"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          옵션 / 수량변경
        </button>
        {isOpen && (
          <Modal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            items={items}
            item={item}
            setItems={setItems}
          />
        )}
      </td>
      <td className="productPrice">{item.qty !== 0 ? itemPrice : 0}원</td>

      {idx === 0 && (
        <td className="productDelivery" rowSpan={shippingPrice.length}>
          <p>기본 배송비</p>
          <p>2,500원</p>
          <p>(택배-선결제)</p>
        </td>
      )}
    </tr>
  );
};

export default CartList;
