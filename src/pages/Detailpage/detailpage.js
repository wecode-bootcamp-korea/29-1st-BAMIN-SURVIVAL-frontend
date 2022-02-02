import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductInfo from './DetailComponents/ProductInfo/ProductInfo';
import Nav from '../Nav/Nav';
import './Detailpage.scss';

const Detailpage = () => {
  const [productsData, setProductsData] = useState([]);
  const [isMainScroll, setIsMainScroll] = useState(true);
  const [modal, setModal] = useState(false);
  const { id } = useParams();
  const productData = productsData.filter(x => x.id === Number(id));
  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    fetch(`/data/Jihong/ItemListData.json?id=${id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductsData(data.result);
      });
  }, [id]);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setIsMainScroll(false) : setIsMainScroll(true);
  };

  return (
    <>
      <Nav />
      <main className={isMainScroll ? 'detailWrraper' : 'detailWrraper2'}>
        {productData.map(product => (
          <ProductInfo
            key={product.id}
            name={product.name}
            product_img={product.product_img}
            price={product.price}
            discount_rate={product.discount_rate}
            discount_price={product.discount_price}
            is_sale={product.is_sale}
            is_green={product.is_green}
            options={product.options}
            modal={modal}
            setModal={setModal}
            toggleModal={toggleModal}
          />
        ))}
      </main>
    </>
  );
};

export default Detailpage;
