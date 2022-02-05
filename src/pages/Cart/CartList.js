import React, { useEffect, useState } from 'react';
import Modal from './Modal/Modal';

const CartList = ({ item, idx, items, setItems }) => {
  const shippingPrice = item.shipping.toLocaleString('ko-KR');
  const itemPrice = (item.price * item.qty).toLocaleString('ko-KR');
  const [isOpen, setIsOpen] = useState(false);

  const onCheck = id => {
    const checkedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, is_check: !item.is_check };
      } else return item;
    });
    setItems(checkedItems);
  };

  useEffect(() => {
    const checkedItems = items.map(item => {
      if (item.qty === 0) {
        return { ...item, is_check: false };
      } else return { ...item };
    });
    setItems(checkedItems);
  }, [item.qty]);

  return (
    <tr>
      <td className="productCheck">
        <input
          type="checkbox"
          name={item.name}
          onChange={() => onCheck(item.id)}
          checked={item.is_check}
        />
      </td>
      <td className="productImage">
        <img src="/images/Shinung/test.jpeg" alt="제품" />
      </td>
      <td className="productName">
        <p>{item.name}</p>
        {item.option && <p>옵션 : {item.option}</p>}
      </td>
      <td className="productOption">
        <p>{item.qty}개</p>
        <button
          className="productModify"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          옵션/수량변경
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
