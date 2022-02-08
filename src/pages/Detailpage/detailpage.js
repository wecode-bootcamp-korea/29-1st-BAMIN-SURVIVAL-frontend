import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductInfo from './DetailComponents/ProductInfo/ProductInfo';
import ProductDetail from './DetailComponents/ProductDetail/ProductDetail';
import './Detailpage.scss';

const Detailpage = () => {
  const [productData, setProductData] = useState([]);
  const [isMainScroll, setIsMainScroll] = useState(true);
  const [modal, setModal] = useState(false);
  const { id } = useParams();
  const [reviewUsers, setReviewUsers] = useState([]);

  const toggleModal = () => {
    setModal(!modal);
  };

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setIsMainScroll(false) : setIsMainScroll(true);
  };

  useEffect(() => {
    fetch('/data/Jihong/user.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setReviewUsers(data.reviewUsers);
      });
  }, []);

  useEffect(() => {
    fetch(`http://10.58.4.21/products/${id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductData(data.result);
      });
  }, [id]);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  return (
    <main className={isMainScroll ? 'detailWrraper' : 'detailWrraper2'}>
      <ProductInfo
        product={productData}
        modal={modal}
        setModal={setModal}
        toggleModal={toggleModal}
        key={productData.id}
      />
      <ProductDetail users={reviewUsers} />
    </main>
  );
};

export default Detailpage;
