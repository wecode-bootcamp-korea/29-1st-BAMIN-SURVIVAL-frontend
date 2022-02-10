import React, { useState } from 'react';
import './Modal.scss';
import BASE_URL from '../../Config';

function Modal({ onClose, item, items, setItems }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const itemPrice = (item.price * quantity).toLocaleString('ko-KR');

  const changeItemOptionSubmit = id => {
    const changeItem = items.map(item => {
      if (item.id === id) {
        if (quantity > 0)
          return { ...item, quantity: quantity, is_check: true };
        else return { ...item, quantity: quantity };
      } else return item;
    });
    setItems(changeItem);

    fetch(`${BASE_URL}cart/${item.cart_id}`, {
      method: 'PATCH',
      headers: {
        Authorization: sessionStorage.getItem('token'),
      },
      body: JSON.stringify({
        cart_id: item.id,
        quantity: item.quantity,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.result.message === 'SUCCESS') {
          fetch(`${BASE_URL}cart`, {
            method: 'GET',
            headers: {
              Authorization: sessionStorage.getItem('token'),
            },
          })
            .then(res => res.json())
            .then(res => console.log(res));
        }
      });

    onClose();
  };

  const changeOption = (e, id) => {
    const changeValue = e.target.value;
    const changeOption = items.map(item => {
      if (item.id === id) {
        return { ...item, option: changeValue };
      } else return item;
    });
    setItems(changeOption);
  };

  const itemQtyDecrease = () => {
    if (quantity <= 1) {
      setQuantity(1);
    } else setQuantity(prev => prev - 1);
  };

  return (
    <>
      <div className="modalBackground" />
      <div className="modal">
        <div className="modalTitle">
          <p>옵션선택</p>
          <p className="closeBtn" onClick={onClose}>
            ✕
          </p>
        </div>

        <div className="item">
          <img
            className="itemImage"
            src="/images/shinung/test.jpeg"
            alt="선택한 제품"
          />
          <div className="itemInfo">
            <p className="itemName">{item.name}</p>
            <p className="itemDelivery">배송비 2,500원</p>
          </div>
        </div>

        {item.option ? (
          <div className="itemOption">
            <select name="" onChange={e => changeOption(e, item.id)}>
              <option value="" className="optionDefault">
                = 옵션 선택 =
              </option>
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
            </select>
          </div>
        ) : (
          <div className="optionNull" />
        )}

        <div className="productControl">
          <p className="productNameAndOption">
            {item.name} {item.option ? '/ ' + item.option : null}
          </p>
          <div className="emptyBox" />
          <span className="productCount">
            <input type="text" placeholder={quantity} min="0" readOnly />
            <span>
              <button
                className="countUp"
                onClick={() => {
                  setQuantity(prev => prev + 1);
                }}
              />
              <button className="countDown" onClick={itemQtyDecrease} />
            </span>
          </span>
          <div className="productTotal">
            <span>{itemPrice}원</span>
          </div>
        </div>

        <div className="modalControl">
          <button className="modalCancel" onClick={onClose}>
            취소
          </button>
          <button
            className="modalConfirm"
            onClick={() => {
              changeItemOptionSubmit(item.id);
            }}
          >
            확인
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
