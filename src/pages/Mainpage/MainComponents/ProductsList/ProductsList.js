import React from 'react';
import Product from '../Product/Product';
import './ProductsList.scss';

const ProductsList = ({ products }) => {
  return (
    <li className="itemList">
      {products.map(product => {
        return (
          <Product key={product.pk} product={product.fields} id={product.pk} />
        );
      })}
    </li>
  );
};

export default ProductsList;
