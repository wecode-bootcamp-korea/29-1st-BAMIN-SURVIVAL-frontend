import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductInfo from './DetailComponents/ProductInfo/ProductInfo';
import ProductDetail from './DetailComponents/ProductDetail/ProductDetail';
import './Detailpage.scss';

const Detailpage = () => {
  const [productData, setProductData] = useState([]);
  const [isMainScroll, setIsMainScroll] = useState(true);
  const [modal, setModal] = useState(false);
  const { id } = useParams();
  const toggleModal = () => {
    setModal(!modal);
  };

  const users = [
    {
      id: 1,
      username: '최희택',
      comment: '이 제품 너무 좋습니다.',
      commentdate: '2022.02.16',
    },
    {
      id: 2,
      username: '주지홍',
      comment: '이 제품 너무 별로에요.',
      commentdate: '2022.02.18',
    },
    {
      id: 3,
      username: '한신웅',
      comment: '이 제품 너무 짱이에요.',
      commentdate: '2022.02.20',
    },
    {
      id: 4,
      username: '임채현',
      comment: '이 제품 너무 짱이에요.',
      commentdate: '2022.02.21',
    },
  ];

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
        <Fragment key={product.id}>
          <ProductInfo
            product={product}
            modal={modal}
            setModal={setModal}
            toggleModal={toggleModal}
            key={product.id}
          />
          <ProductDetail key={product.name} users={users} />
        </Fragment>
      ))}
    </main>
  );
};

export default Detailpage;
