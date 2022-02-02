import React, { useState } from 'react';
import ProductBasicImg from '../ProductBasicImg/ProductBasicImg';
import ProductBasicInfo from '../ProductBasicInfo/ProductBasicInfo';
import ProductOptionBox from '../ProductOptionBox/ProductOptionBox';
import ImageModal from '../ImageModal/ImageModal';
import './ProductInfo.scss';

const ProductInfo = ({
  name,
  product_img,
  price,
  discount_rate,
  discount_price,
  is_sale,
  is_green,
  options,
  modal,
  setModal,
  toggleModal,
}) => {
  const [quantityInput, setQuantityInput] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');
  const [saveOptions, setSaveOptions] = useState([]);
  const renderPriceCondition =
    typeof quantityInput === 'number' && Number(quantityInput) > 0;

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

  const onBlur = () => {
    Number(quantityInput) > 0
      ? setQuantityInput(Number(quantityInput))
      : setQuantityInput(1, alertMessage());
  };

  const checkNumber = () => {
    typeof quantityInput === 'string' && Number(quantityInput) > 0
      ? setQuantityInput(Number(quantityInput))
      : setQuantityInput(1, alertMessage());
  };

  const alertMessage = () => {
    alert('최소수량은 1이상입니다.');
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      checkNumber();
      return;
    }
  }

  const sumPrice = (quantityInput, discount_price) => {
    return quantityInput * discount_price;
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

  return (
    <article className="productInfo">
      <ProductBasicImg product_img={product_img} toggleModal={toggleModal} />
      <ImageModal
        name={name}
        product_img={product_img}
        modal={modal}
        setModal={setModal}
        toggleModal={toggleModal}
      />

      <div className="InfoTextBox">
        <ProductBasicInfo
          name={name}
          price={price}
          discount_rate={discount_rate}
          discount_price={discount_price}
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
                {options.map(option => (
                  <option
                    className="optionContents"
                    key={option.id}
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
                name={name + option}
                handleQuantityInput={handleQuantityInput}
                handleKeyPress={handleKeyPress}
                onClick={onClick}
                onBlur={onBlur}
                renderPriceCondition={renderPriceCondition}
                discount_price={discount_price}
                quantityInput={quantityInput}
                sumPrice={sumPrice}
              />
            ))}
          </>
        ) : (
          <ProductOptionBox
            name={name}
            handleQuantityInput={handleQuantityInput}
            handleKeyPress={handleKeyPress}
            onClick={onClick}
            onBlur={onBlur}
            renderPriceCondition={renderPriceCondition}
            discount_price={discount_price}
            quantityInput={quantityInput}
            sumPrice={sumPrice}
          />
        )}

        {saveOptions.length ? (
          <div className="payBox">
            <span className="payTitle">총 합계 금액</span>
            <span className="payPrice">
              {renderPriceCondition
                ? sumPrice(quantityInput, discount_price).toLocaleString() +
                  '원'
                : discount_price.toLocaleString() + '원'}
            </span>
          </div>
        ) : null}

        {options.length ? null : (
          <div className="payBox">
            <span className="payTitle">총 합계 금액</span>
            <span className="payPrice">
              {renderPriceCondition
                ? sumPrice(quantityInput, discount_price).toLocaleString() +
                  '원'
                : discount_price.toLocaleString() + '원'}
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

export default ProductInfo;
