import React from 'react';
import { Link } from 'react-router-dom';
import './Item.scss';

const Item = ({
  itemName,
  price,
  itemImg,
  sale,
  green,
  discount,
  isInventoryStatus,
  id,
}) => {
  return (
    <div className="itemBox">
      <div className="itemType">
        {sale ? (
          <img
            className="saleLogo"
            alt="할인제품"
            src="images/Jihong/saleLogo.png"
          />
        ) : null}
        {green ? (
          <img
            className="greenLogo"
            alt="친환경제품"
            src="images/Jihong/greenLogo.png"
          />
        ) : null}
      </div>
      <Link to={`/detailpage/${id}`}>
        <div className="itemImgBox">
          <img
            className={isInventoryStatus ? 'itemImg' : 'soldoutImg'}
            alt="제픔이미지"
            src={itemImg}
          />
          <div className="soldoutStatus">
            {isInventoryStatus ? null : (
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
        <span className="discountRate">{discount ? discount + '%' : null}</span>
        <Link className="itemName" to={`/detailpage/${id}`}>
          {itemName}
        </Link>
        <span className={discount ? 'smallRegularPrice' : 'regularPrice'}>
          {price.toLocaleString() + '원'}
        </span>
        <span className="bargainPrice">
          {discount
            ? (price * (100 - discount) * 0.01).toLocaleString() + '원'
            : null}
        </span>
      </div>
    </div>
  );
};

export default Item;
