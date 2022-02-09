import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SortCategory from './MainComponents/Section/SortCategory';
import ProductsList from './MainComponents/ProductsList/ProductsList';
import './Main.scss';
import PaginationButton from '../../components/PaginationButton/PaginationButton';

const Main = () => {
  const [products, setProducts] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('recent');
  const [isMainScroll, setIsMainScroll] = useState(true);

  const sortBy = {
    recent: function (a, b) {
      let dateA = new Date(a.update_date).getTime();
      let dateB = new Date(b.update_date).getTime();
      return dateA < dateB ? 1 : -1;
    },
    ascend: (a, b) => a.discount_price - b.discount_price,
    decend: (a, b) => b.discount_price - a.discount_price,
  };

  const sortedProducts = [...products].sort(sortBy[sortCriteria]);
  const navigate = useNavigate();
  const location = useLocation();

  const changeSortCriteria = e => {
    setSortCriteria(e.target.name);
  };

  useEffect(() => {
    fetch(`http://13.125.227.39:8080/products${location.search}`)
      .then(res => res.json())
      .then(data => setProducts(data.message));
  }, [location.search]);

  const updateOffset = buttonIndex => {
    const limit = 16;
    const offset = buttonIndex * limit;
    const queryString = `&limit=${limit}&offset=${offset}`;
    navigate(
      location.search.slice(0, location.search.indexOf('&')) + queryString
    );
  };

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setIsMainScroll(false) : setIsMainScroll(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  return (
    <main className={isMainScroll ? 'main' : 'mainWithNav'}>
      <SortCategory
        totalNumberItems={products.length}
        sortFucntion={changeSortCriteria}
      />
      <article className="article">
        <ProductsList products={sortedProducts} />
        <PaginationButton updateOffset={updateOffset} />
      </article>
    </main>
  );
};

export default Main;
