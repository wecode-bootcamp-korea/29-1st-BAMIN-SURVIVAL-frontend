import React from 'react';
import Product from '../Product/Product';
import './ProductsList.scss';

const ProductsList = ({ products }) => {
  return (
    <li className="itemList">
      {products.map(product => {
        return (
          <Product
            id={product.id}
            key={product.id}
            name={product.name}
            product_img={product.product_img}
            price={product.price}
            discount_rate={product.discount_rate}
            discount_price={product.discount_price}
            is_green={product.is_green}
            is_sale={product.is_sale}
            stock={product.stock}
          />
        );
      })}
    </li>
  );
};

export default ProductsList;
