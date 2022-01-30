import React, { useState } from 'react';
import ImageModal from './ImageModal';
const ItemInfo = ({
  itemName,
  itemImg,
  price,
  discount,
  option,
  modal,
  setModal,
  toggleModal,
}) => {
  const [quantityInput, setQuantityInput] = useState(1);
  const [Selected, setSelected] = useState('');
  const salePrice = discount ? price * (100 - discount) * 0.01 : price;

  const handleQuantityInput = e => {
    setQuantityInput(e.target.value);
  };
  const renderPriceCondition =
    Number(quantityInput) && Number(quantityInput) > 0;

  const alertMessage = () => {
    alert('최소수량은 1이상입니다.');
  };

  const priceResult = (quantityInput, salePrice) => {
    return quantityInput * salePrice;
  };

  const handleSelect = e => {
    setSelected(e.target.value);
  };

  const onClick = e => {
    if (e.target.outerText === '증가') {
      Number(quantityInput)
        ? setQuantityInput(Number(quantityInput) + 1)
        : setQuantityInput(1);
      return;
    }
    if (e.target.outerText === '감소') {
      Number(quantityInput) >= 1
        ? setQuantityInput(Number(quantityInput) - 1)
        : setQuantityInput(1, alertMessage());
      return;
    }
  };

  const isNumber = () => {
    Number(quantityInput) && Number(quantityInput) > 0
      ? priceResult(quantityInput, salePrice)
      : alertMessage();
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      Number(quantityInput) && Number(quantityInput) > 0
        ? isNumber()
        : setQuantityInput(1, alertMessage());
    }
  }

  return (
    <article className="productInfo">
      <div className="InfoImgBox">
        <img
          className="productImg"
          src={itemImg}
          alt="제품이미지"
          onClick={toggleModal}
        />
      </div>
      <ImageModal
        itemName={itemName}
        itemImg={itemImg}
        modal={modal}
        setModal={setModal}
        toggleModal={toggleModal}
      />

      <div className="InfoTextBox">
        <h3 className="productName">{itemName}</h3>
        {discount ? (
          <div className="productPriceBox">
            <span className="pdPriceTag">정가</span>
            <span className="pdOriginalPrice">
              {price.toLocaleString() + '원'}
            </span>
          </div>
        ) : null}
        <div className="productPriceBox">
          <span className="pdPriceTag">판매가격</span>
          <span className="pdPrice">{salePrice.toLocaleString() + '원'}</span>
        </div>
        <div className="shippingInfoBox">
          <span className="shippingInfo">배송정보</span>
          <div className="shippingContents">
            <span className="content">2,500원 (3만원 이상 구매시 무료)</span>
            <span className="content">오후 1시 당일 배송마감</span>
          </div>
        </div>
        <div className="quantityOptionBox">
          <div className="smallNameBox">{itemName}</div>
          <div className="quantityInputBox">
            <input
              className="quantityInput"
              type="text"
              name="quantity"
              onChange={handleQuantityInput}
              onKeyPress={handleKeyPress}
              value={quantityInput}
              min="1"
            />
          </div>
          <div className="countBtnBox">
            <button title="증가" className="increaseBtn" onClick={onClick}>
              증가
            </button>
            <button
              title="감소"
              className="decreaseBtn"
              onClick={onClick}
              disabled={Number(quantityInput) === 1}
            >
              감소
            </button>
          </div>

          <div className="optionPriceBox">
            {renderPriceCondition
              ? priceResult(quantityInput, salePrice).toLocaleString() + '원'
              : salePrice.toLocaleString() + '원'}
          </div>
        </div>
        {option.length ? (
          <div className="sizeOptionBox">
            <div className="optionInfo">옵션 (사이즈)</div>
            <select
              name="sizeOption"
              className="sizeSelect"
              onChange={handleSelect}
              value={Selected}
            >
              <option className="optionContents" value="">
                사이즈를 선택해주세요
              </option>
              {option.map((option, id) => (
                <option className="optionContents" key={id} value={option.size}>
                  {option.size}
                </option>
              ))}
            </select>
            <p>{Selected}</p>
          </div>
        ) : null}
        <div className="payBox">
          <span className="ho">총 합계 금액</span>
          <span className="ho2">
            {renderPriceCondition
              ? priceResult(quantityInput, salePrice).toLocaleString() + '원'
              : salePrice.toLocaleString() + '원'}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ItemInfo;
