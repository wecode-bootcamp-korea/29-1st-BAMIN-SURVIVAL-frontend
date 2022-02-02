import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

const Product = ({
  name,
  price,
  product_img,
  is_sale,
  is_green,
  discount_rate,
  discount_price,
  stock,
  id,
}) => {
  return (
    <div className="itemBox">
      <div className="itemType">
        {is_sale ? (
          <img
            className="saleLogo"
            alt="할인제품"
            src="images/Jihong/saleLogo.png"
          />
        ) : null}
        {is_green ? (
          <img
            className="greenLogo"
            alt="친환경제품"
            src="images/Jihong/greenLogo.png"
          />
        ) : null}
      </div>
      <Link to={`/products/${id}`}>
        <div className="itemImgBox">
          <img
            className={stock ? 'itemImg' : 'soldoutImg'}
            alt="제픔이미지"
            src={product_img}
          />
          <div className="soldoutStatus">
            {stock ? null : (
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
          {discount_rate ? discount_rate + '%' : null}
        </span>
        <Link className="itemName" to={`/detailpage/${id}`}>
          {name}
        </Link>
        <span className={discount_rate ? 'smallRegularPrice' : 'regularPrice'}>
          {price.toLocaleString() + '원'}
        </span>
        <span className="bargainPrice">
          {discount_rate ? discount_price.toLocaleString() + '원' : null}
        </span>
      </div>
    </div>
  );
};

export default Product;
