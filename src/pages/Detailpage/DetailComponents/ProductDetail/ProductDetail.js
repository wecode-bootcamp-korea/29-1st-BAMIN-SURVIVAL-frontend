import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.scss';
const ProductDetail = ({ description }) => {
  return (
    <article className="productDetail">
      <div>
        <ul>
          <li>
            <Link to="/">상품상세정보</Link>
          </li>
          <li>
            <Link to="/">상품상세정보</Link>
          </li>
          <li>
            <Link to="/">교환 및 반품안내</Link>
          </li>
          <li>
            <Link to="/">구매후기</Link>
          </li>
          <li>
            <Link to="/">구매문의</Link>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ProductDetail;
