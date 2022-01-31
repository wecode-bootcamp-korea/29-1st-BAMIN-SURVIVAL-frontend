import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemInfo from './ItemInfo/ItemInfo';
import Nav from '../Nav/Nav';
import './Detailpage.scss';

const Detailpage = () => {
  const [detailItems, setDetailItems] = useState([]);
  const [isMainScroll, setIsMainScroll] = useState(true);
  const [modal, setModal] = useState(false);
  const { id } = useParams();
  const detailItem = detailItems.filter(x => x.id === Number(id));
  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    fetch(`/data/Jihong/ItemListData.json?id=${id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setDetailItems(data);
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
        {detailItem.map((item, id) => (
          <ItemInfo
            itemName={item.itemName}
            itemImg={item.itemImg}
            price={item.price}
            key={id}
            description={item.description}
            discount={item.discountRate}
            sale={item.sale}
            green={item.green}
            options={item.options}
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
