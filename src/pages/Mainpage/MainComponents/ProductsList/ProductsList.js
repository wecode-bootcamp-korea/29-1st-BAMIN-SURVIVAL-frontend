import React from 'react';
import Product from '../Product/Product';
import './ProductsList.scss';

const ProductsList = ({ products }) => {
  return (
    <li className="itemList">
      {products.map(product => {
        return <Product key={product.id} product={product} />;
      })}
    </li>
  );
};

export default ProductsList;
