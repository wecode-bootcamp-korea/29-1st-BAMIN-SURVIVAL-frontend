import React from 'react';

const ProductOptionBox = ({
  itemName,
  handleQuantityInput,
  handleKeyPress,
  quantityInput,
  onClick,
  renderPriceCondition,
  sumPrice,
  salePrice,
}) => {
  return (
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
          ? sumPrice(quantityInput, salePrice).toLocaleString() + '원'
          : salePrice.toLocaleString() + '원'}
      </div>
    </div>
  );
};

export default ProductOptionBox;
