import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Carousel from './MainComponents/Section/Carousel';
import SortCategory from './MainComponents/Section/SortCategory';
import ProductsList from './MainComponents/ProductsList/ProductsList';
import './Main.scss';
import PaginationButton from '../../components/PaginationButton/PaginationButton';

const Main = () => {
  const [products, setProducts] = useState([]);
  const [carouselProducts, setCarouselProducts] = useState([]);
  const [isMainScroll, setIsMainScroll] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://10.58.4.21/products/${location.search || `?page=1`}`)
      .then(res => res.json())
      .then(data => setProducts(data.result));
  }, [location.search]);
  useEffect(() => {
    fetch('http://13.125.227.39:8080/products/all', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCarouselProducts(
          data.result.filter(product => product.price > 70000).slice(0, 4)
        );
      });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  const updateOffset = buttonIndex => {
    const page = buttonIndex;
    navigate(`/?page=${page}`);
  };

  const sortFucntion = e => {
    const recent = [...products].sort(function (a, b) {
      let dateA = new Date(a.update_date).getTime();
      let dateB = new Date(b.update_date).getTime();
      return dateA < dateB ? 1 : -1;
    });
    const ascend = [...products].sort(
      (a, b) => a.discount_price - b.discount_price
    );
    const decend = [...products].sort(
      (a, b) => b.discount_price - a.discount_price
    );
    if (e.target.innerText === '최신순') {
      setProducts(recent);
      return;
    }
    if (e.target.innerText === '낮은가격순') {
      setProducts(ascend);
      return;
    }
    if (e.target.innerText === '높은가격순') {
      setProducts(decend);
      return;
    }
  };

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setIsMainScroll(false) : setIsMainScroll(true);
  };

  return (
    <main className={isMainScroll ? 'main' : 'mainWithNav'}>
      <Carousel carouselProducts={carouselProducts} />
      <SortCategory
        totalNumberItems={products.length}
        sortFucntion={sortFucntion}
      />
      <article className="article">
        <ProductsList products={products} />
        <PaginationButton updateOffset={updateOffset} />
      </article>
    </main>
  );
};

export default Main;
