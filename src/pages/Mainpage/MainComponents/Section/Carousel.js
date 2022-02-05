import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Carousel.scss';

const Carousel = ({ carouselProducts }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = carouselProducts.length - 1;
  const timeoutRef = useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentSlide(currentSlide =>
          currentSlide === totalSlides ? 0 : currentSlide + 1
        ),
      1000
    );
    return () => {
      resetTimeout();
    };
  }, [currentSlide, totalSlides]);

  const nextSlide = () => {
    if (currentSlide !== totalSlides) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const moveDot = idx => {
    setCurrentSlide(idx);
  };
  const navigate = useNavigate();
  const moveToDetail = id => {
    // navigate(`/products/${id}`);
    console.log(id);
  };
  // console.log(carouselProducts);
  return (
    <section className="carousel">
      <div className="carouselContainer">
        {carouselProducts.map((product, idx) => {
          // console.log(product.id);
          return (
            // <Link to={`/products/${product.id}`} key={product.id}>
            <img
              key={product.id}
              className={
                currentSlide === idx ? 'slideItem slideActive' : 'slideItem'
              }
              onClick={() => moveToDetail(product)}
              // className="slideImg"
              alt="제품홍보이미지"
              src={product.promotion_img}
            />
            // </Link>
          );
        })}

        <button className="slideBtn" onClick={nextSlide}>
          <i className="far fa-arrow-alt-circle-right" />
        </button>

        <div className="slideDots">
          {carouselProducts.map((product, idx) => (
            <div
              key={product.id}
              onClick={() => moveDot(idx)}
              className={currentSlide === idx ? 'dotActive' : 'dot'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
