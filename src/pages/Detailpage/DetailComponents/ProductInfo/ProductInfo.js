import React, { useState } from 'react';
import ProductBasicImg from '../ProductBasicImg/ProductBasicImg';
import ProductBasicInfo from '../ProductBasicInfo/ProductBasicInfo';
import ProductOptionBox from '../ProductOptionBox/ProductOptionBox';
import ImageModal from '../ImageModal/ImageModal';
import './ProductInfo.scss';
import { useNavigate } from 'react-router-dom';

const ProductInfo = ({ product, modal, setModal, toggleModal }) => {
  const [quantityInput, setQuantityInput] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const onSubmitCart = e => {
    e.preventDefault();
    if (sessionStorage.getItem('token')) {
      fetch(`http://172.20.10.5:8080/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: sessionStorage.getItem('token'),
        },
        body: JSON.stringify({
          product_id: product.id,
          quantity: quantityInput,
        }),
      }).then(res => {
        if (res.ok) {
          alert('장바구니로 보냈습니다');
          navigate('/cart');
        }
      });
    } else {
      alert('로그인 해주세요.');
      navigate('/login');
    }
  };

  const renderPriceCondition =
    typeof quantityInput === 'number' && Number(quantityInput) > 0;

  const handleQuantityInput = e => {
    setQuantityInput(e.target.value);
  };

  const checkIsText = value => {
    return isNaN(value);
  };

  const checkIsLessThanOne = value => {
    return Number(value) < 1;
  };

  const validateInputValue = e => {
    if (checkIsText(e.target.value)) {
      setQuantityInput(1);
      return alert('최소 수량은 1이상입니다.');
    }

    if (checkIsLessThanOne(e.target.value)) {
      setQuantityInput(1);
      return alert('최소 수량은 1이상입니다.');
    }

    setQuantityInput(Number(e.target.value));
  };

  const onBlur = e => {
    validateInputValue(e);
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      validateInputValue(e);
    }
  };

  const sumPrice = (quantityInput, discount_price) => {
    return quantityInput * discount_price;
  };

  const countBtnClick = e => {
    if (e.target.outerText === '증가') {
      setQuantityInput(quantityInput + 1);
      return;
    }
    if (e.target.outerText === '감소') {
      setQuantityInput(quantityInput - 1);
      return;
    }
  };

  const checkDupOption = e => {
    setSelectedOption(e.target.value);
    if (selectedOption === e.target.value) {
      alert('이미 담긴 상품입니다.');
    }
  };

  return (
    <article className="productInfo">
      <ProductBasicImg
        img={product.thumbnail_image}
        toggleModal={toggleModal}
      />
      <ImageModal
        name={product.name}
        img={product.thumbnail_image}
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
            {product.is_option ? (
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
                  countBtnClick={countBtnClick}
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

        {selectedOption.length ? (
          <>
            <ProductOptionBox
              name={product.name + selectedOption}
              handleQuantityInput={handleQuantityInput}
              handleKeyPress={handleKeyPress}
              onBlur={onBlur}
              renderPriceCondition={renderPriceCondition}
              discount_price={product.discount_price}
              quantityInput={quantityInput}
              sumPrice={sumPrice}
              countBtnClick={countBtnClick}
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
            <form onSubmit={onSubmitCart}>
              <button className="cartBtn">장바구니</button>
              <button className="buyNowBtn">바로구매</button>
            </form>
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
