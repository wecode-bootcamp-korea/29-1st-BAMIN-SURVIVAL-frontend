import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

const Product = ({ product }) => {
  return (
    <div className="itemBox">
      <div className="itemType">
        {product.is_sale ? (
          <img
            className="saleLogo"
            alt="할인제품"
            src="images/Jihong/saleLogo.png"
          />
        ) : null}
        {product.is_green ? (
          <img
            className="greenLogo"
            alt="친환경제품"
            src="images/Jihong/greenLogo.png"
          />
        ) : null}
      </div>
      <Link to={`/products/${product.id}`}>
        <div className="itemImgBox">
          <img
            className={product.stock ? 'itemImg' : 'soldoutImg'}
            alt="제픔이미지"
            src={product.img}
          />
          <div className="soldoutStatus">
            {product.stock ? null : (
              <img
                className="soldoutLogo"
                alt="품절"
                src="images/Jihong/soldoutLogo.png"
              />
            )}
          </div>
        </div>
      </Link>
      <div className="itemInfo">
        <span className="discountRate">
          {product.discount_rate ? product.discount_rate + '%' : null}
        </span>
        <Link className="itemName" to={`/products/${product.id}`}>
          {product.name}
        </Link>
        <span
          className={
            product.discount_rate ? 'smallRegularPrice' : 'regularPrice'
          }
        >
          {product.price.toLocaleString() + '원'}
        </span>
        <span className="bargainPrice">
          {product.discount_rate
            ? product.discount_price.toLocaleString() + '원'
            : null}
        </span>
      </div>
    </div>
  );
};

export default Product;
