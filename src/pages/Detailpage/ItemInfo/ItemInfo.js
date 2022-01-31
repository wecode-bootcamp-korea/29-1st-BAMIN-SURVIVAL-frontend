import React, { useState } from 'react';
import ProductBasicInfo from './ProductBasicInfo';
import ProductBasicImg from './ProductBasicImg';
import ProductOptionBox from './ProductOptionBox';
import ImageModal from './ImageModal';
import './ItemInfo.scss';

const ItemInfo = ({
  itemName,
  itemImg,
  price,
  discount,
  options,
  modal,
  setModal,
  toggleModal,
}) => {
  const [quantityInput, setQuantityInput] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');
  const salePrice = discount ? price * (100 - discount) * 0.01 : price;

  const [saveOptions, setSaveOptions] = useState([]);

  console.log(saveOptions.length);

  const checkDupOption = e => {
    if (saveOptions.length > 0 && saveOptions.includes(e.target.value)) {
      alert('이미 담긴 상품입니다.');
      setSelectedOption('');
      return;
    }
    setSelectedOption(e.target.value);
    setSaveOptions([...saveOptions, e.target.value]);
    setSelectedOption('');
  };

  const handleQuantityInput = e => {
    setQuantityInput(e.target.value);
  };

  const renderPriceCondition =
    Number(quantityInput) && Number(quantityInput) > 0;

  const alertMessage = () => {
    alert('최소수량은 1이상입니다.');
  };

  const sumPrice = (quantityInput, salePrice) => {
    return quantityInput * salePrice;
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
  const checkNumber = () => {
    Number(quantityInput) && Number(quantityInput) > 0
      ? sumPrice(quantityInput, salePrice)
      : setQuantityInput(1, alertMessage());
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      checkNumber();
    }
  }
  return (
    <article className="productInfo">
      <ProductBasicImg itemImg={itemImg} toggleModal={toggleModal} />
      <ImageModal
        itemName={itemName}
        itemImg={itemImg}
        modal={modal}
        setModal={setModal}
        toggleModal={toggleModal}
      />

      <div className="InfoTextBox">
        <ProductBasicInfo
          itemName={itemName}
          discount={discount}
          price={price}
          salePrice={salePrice}
        />
        {options.length ? (
          <>
            <div className="sizeOptionBox">
              <div className="optionInfo">옵션</div>
              <select
                name="sizeOption"
                className="sizeSelect"
                onChange={checkDupOption}
                value={selectedOption}
              >
                <option className="optionContents" value="">
                  사이즈를 선택해주세요
                </option>
                {options.map((option, id) => (
                  <option
                    className="optionContents"
                    key={id}
                    value={option.size}
                  >
                    {option.size}
                  </option>
                ))}
              </select>
            </div>

            {saveOptions.map((option, idx) => (
              <ProductOptionBox
                key={idx}
                itemName={itemName + option}
                handleQuantityInput={handleQuantityInput}
                handleKeyPress={handleKeyPress}
                quantityInput={quantityInput}
                onClick={onClick}
                renderPriceCondition={renderPriceCondition}
                sumPrice={sumPrice}
                salePrice={salePrice}
              />
            ))}
          </>
        ) : (
          <ProductOptionBox
            itemName={itemName}
            handleQuantityInput={handleQuantityInput}
            handleKeyPress={handleKeyPress}
            quantityInput={quantityInput}
            onClick={onClick}
            renderPriceCondition={renderPriceCondition}
            sumPrice={sumPrice}
            salePrice={salePrice}
          />
        )}

        {saveOptions.length ? (
          <div className="payBox">
            <span className="payTitle">총 합계 금액</span>
            <span className="payPrice">
              {renderPriceCondition
                ? sumPrice(quantityInput, salePrice).toLocaleString() + '원'
                : salePrice.toLocaleString() + '원'}
            </span>
          </div>
        ) : null}

        {options.length ? null : (
          <div className="payBox">
            <span className="payTitle">총 합계 금액</span>
            <span className="payPrice">
              {renderPriceCondition
                ? sumPrice(quantityInput, salePrice).toLocaleString() + '원'
                : salePrice.toLocaleString() + '원'}
            </span>
          </div>
        )}
        <div className="linkBox">
          <button type="button" className="cartBtn">
            장바구니
          </button>
          <button type="button" className="buyNowBtn">
            바로구매
          </button>
        </div>
      </div>
    </article>
  );
};

export default ItemInfo;
