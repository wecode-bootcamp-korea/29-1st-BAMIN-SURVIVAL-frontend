import React, { useState } from 'react';
import './Modal.scss';

function Modal({ onClose, item, items, setItems }) {
  const [quantity, setQuantity] = useState(item.qty);
  const itemPrice = (item.price * quantity).toLocaleString('ko-KR');

  const onSubmit = id => {
    const changeItem = items.map(item => {
      if (item.id === id) {
        if (quantity > 0) {
          return { ...item, qty: quantity, is_check: true };
        } else {
          return { ...item, qty: quantity };
        }
      } else return item;
    });
    setItems(changeItem);
    onClose();
  };

  const onChange = (e, id) => {
    const changeValue = e.target.value;
    const changeOption = items.map(item => {
      if (item.id === id) {
        return { ...item, option: changeValue };
      } else return item;
    });
    setItems(changeOption);
  };

  const onDecrease = () => {
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
            src="./images/shinung/test.jpeg"
            alt="선택한 제품"
          />
          <div className="itemInfo">
            <p className="itemName">{item.name}</p>
            <p className="itemDelivery">배송비 2,500원</p>
          </div>
        </div>

        {item.option ? (
          <div className="itemOption">
            {/* <p>디자인</p> */}
            <select name="" onChange={e => onChange(e, item.id)}>
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
              <button className="countDown" onClick={onDecrease} />
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
              onSubmit(item.id);
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
