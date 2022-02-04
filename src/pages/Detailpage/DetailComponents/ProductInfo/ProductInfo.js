import React, { Fragment, useState } from 'react';
import ProductBasicImg from '../ProductBasicImg/ProductBasicImg';
import ProductBasicInfo from '../ProductBasicInfo/ProductBasicInfo';
import ProductOptionBox from '../ProductOptionBox/ProductOptionBox';
import ImageModal from '../ImageModal/ImageModal';
import './ProductInfo.scss';

const ProductInfo = ({ product, modal, setModal, toggleModal }) => {
  const [addCartItem, setAddCartItem] = useState({
    id: product.id,
    name: product.name,
    price: product.discount_price,
    img: product.img,
    option: product.options,
    is_option: product.is_option,
    qty: 1,
  });
  const [quantityInput, setQuantityInput] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');
  const renderPriceCondition =
    typeof quantityInput === 'number' && Number(quantityInput) > 0;
  const handleQuantityInput = e => {
    setQuantityInput(e.target.value);
  };

  const alertMessage = () => {
    alert('최소수량은 1이상입니다.');
  };

  const onBlur = () => {
    Number(quantityInput) > 0
      ? setQuantityInput(
          Number(quantityInput),
          setAddCartItem({ ...addCartItem, qty: Number(quantityInput) })
        )
      : setQuantityInput(
          1,
          alertMessage(),
          setAddCartItem({ ...addCartItem, qty: 1 })
        );
  };

  const checkNumber = () => {
    typeof quantityInput === 'string' && Number(quantityInput) > 0
      ? setQuantityInput(
          Number(quantityInput),
          setAddCartItem({ ...addCartItem, qty: Number(quantityInput) })
        )
      : setQuantityInput(
          1,
          alertMessage(),
          setAddCartItem({ ...addCartItem, qty: 1 })
        );
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      checkNumber();
      return;
    }
  };

  const sumPrice = (quantityInput, discount_price) => {
    return quantityInput * discount_price;
  };

  const onClick = e => {
    if (e.target.outerText === '증가') {
      Number(quantityInput)
        ? setQuantityInput(
            Number(quantityInput) + 1,
            setAddCartItem({ ...addCartItem, qty: Number(quantityInput) + 1 })
          )
        : setQuantityInput(1, setAddCartItem({ ...addCartItem, qty: 1 }));
      return;
    }
    if (e.target.outerText === '감소') {
      Number(quantityInput) >= 1
        ? setQuantityInput(
            Number(quantityInput) - 1,
            setAddCartItem({ ...addCartItem, qty: Number(quantityInput) - 1 })
          )
        : setQuantityInput(
            1,
            alertMessage(),
            setAddCartItem({ ...addCartItem, qty: 1 })
          );
      return;
    }
  };

  const checkDupOption = e => {
    if (addCartItem.is_option) {
      setAddCartItem({ ...addCartItem, option: e.target.value });
    }
    if (addCartItem.option.includes(e.target.value)) {
      alert('이미 담긴 상품입니다.');
      return;
    }
    setSelectedOption('');
  };

  return (
    <article className="productInfo">
      <ProductBasicImg img={product.img} toggleModal={toggleModal} />
      <ImageModal
        name={product.name}
        img={product.img}
        modal={modal}
        setModal={setModal}
        toggleModal={toggleModal}
      />

      <div className="InfoTextBox">
        <ProductBasicInfo
          name={product.name}
          price={product.price}
          discount_rate={product.discount_rate}
          discount_price={product.discount_price}
        />

        {product.stock ? (
          <div>
            {addCartItem.is_option ? (
              <div className="sizeOptionBox">
                <div className="optionInfo">옵션</div>
                <div className="selectBox">
                  <select
                    name="sizeOption"
                    className="sizeSelect"
                    onChange={checkDupOption}
                    value={selectedOption}
                  >
                    <option value="">사이즈를 선택해주세요</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>
              </div>
            ) : (
              <>
                <ProductOptionBox
                  name={product.name}
                  handleQuantityInput={handleQuantityInput}
                  handleKeyPress={handleKeyPress}
                  onBlur={onBlur}
                  renderPriceCondition={renderPriceCondition}
                  discount_price={product.discount_price}
                  quantityInput={quantityInput}
                  sumPrice={sumPrice}
                  onClick={onClick}
                />
                <div className="payBox">
                  <span className="payTitle">총 합계 금액</span>
                  <span className="payPrice">
                    {renderPriceCondition
                      ? sumPrice(
                          quantityInput,
                          product.discount_price
                        ).toLocaleString() + '원'
                      : product.discount_price.toLocaleString() + '원'}
                  </span>
                </div>
              </>
            )}
          </div>
        ) : null}

        {addCartItem.option ? (
          <>
            <ProductOptionBox
              name={product.name + addCartItem.option}
              handleQuantityInput={handleQuantityInput}
              handleKeyPress={handleKeyPress}
              onBlur={onBlur}
              renderPriceCondition={renderPriceCondition}
              discount_price={product.discount_price}
              quantityInput={quantityInput}
              sumPrice={sumPrice}
              onClick={onClick}
            />
            <div className="payBox">
              <span className="payTitle">총 합계 금액</span>
              <span className="payPrice">
                {renderPriceCondition
                  ? sumPrice(
                      quantityInput,
                      product.discount_price
                    ).toLocaleString() + '원'
                  : product.discount_price.toLocaleString() + '원'}
              </span>
            </div>
          </>
        ) : null}
        <div className="linkBox">
          {product.stock ? (
            <>
              <button type="button" className="cartBtn">
                장바구니
              </button>
              <button type="button" className="buyNowBtn">
                바로구매
              </button>
            </>
          ) : (
            <button type="button" className="soldOutBtn" disabled="disabled">
              SOLD OUT
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductInfo;
