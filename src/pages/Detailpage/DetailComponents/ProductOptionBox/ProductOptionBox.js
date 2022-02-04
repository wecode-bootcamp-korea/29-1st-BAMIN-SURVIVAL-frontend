import React from 'react';
import './ProductOptionBox.scss';

const ProductOptionBox = ({
  onClick,
  name,
  handleQuantityInput,
  handleKeyPress,
  onBlur,
  renderPriceCondition,
  discount_price,
  quantityInput,
  sumPrice,
}) => {
  return (
    <div className="quantityOptionBox">
      <div className="smallNameBox">{name}</div>
      <div className="quantityInputBox">
        <input
          className="quantityInput"
          type="text"
          name="quantity"
          onChange={handleQuantityInput}
          onKeyPress={handleKeyPress}
          onBlur={onBlur}
          value={quantityInput}
        />
      </div>
      <div className="countBtnBox">
        <button title="증가" className="increaseBtn" onClick={onClick}>
          증가
        </button>
        <button
          title="감소"
          className="decreaseBtn"
          disabled={Number(quantityInput) === 1}
          onClick={onClick}
        >
          감소
        </button>
      </div>
      <div className="optionPriceBox">
        {renderPriceCondition
          ? sumPrice(quantityInput, discount_price).toLocaleString() + '원'
          : discount_price.toLocaleString() + '원'}
      </div>
    </div>
  );
};

export default ProductOptionBox;
