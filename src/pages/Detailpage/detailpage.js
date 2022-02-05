import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductInfo from './DetailComponents/ProductInfo/ProductInfo';
import ProductDetail from './DetailComponents/ProductDetail/ProductDetail';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './Detailpage.scss';

const Detailpage = () => {
  const [productData, setProductData] = useState([]);
  const [isMainScroll, setIsMainScroll] = useState(true);
  const [modal, setModal] = useState(false);
  const { id } = useParams();
  const toggleModal = () => {
    setModal(!modal);
  };
  useEffect(() => {
    fetch(`http://localhost:3003/result?id=${id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductData(data);
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
    <main className={isMainScroll ? 'detailWrraper' : 'detailWrraper2'}>
      {productData.map(product => (
        <ProductInfo
          product={product}
          modal={modal}
          setModal={setModal}
          toggleModal={toggleModal}
          key={product.id}
        />
      ))}
      <ProductDetail />
    </main>
  );
};

export default Detailpage;
