import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Carousel.scss';

const Carousel = ({ carouselItems }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = carouselItems.length - 1;
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
      8000
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

  return (
    <section className="carousel">
      <div className="carouselContainer">
        {carouselItems.map((item, idx) => {
          return (
            <Link
              to="/"
              key={item.id}
              className={
                currentSlide === idx ? 'slideItem slideActive' : 'slideItem'
              }
            >
              <img
                key={item.id}
                className="slideImg"
                alt="제품홍보이미지"
                src={item.promotionImg}
              />
            </Link>
          );
        })}

        <button className="slideBtn" onClick={nextSlide}>
          <i className="far fa-arrow-alt-circle-right" />
        </button>

        <Link to="/" className="slideDots">
          {carouselItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => moveDot(idx)}
              className={currentSlide === idx ? 'dotActive' : 'dot'}
            />
          ))}
        </Link>
      </div>
    </section>
  );
};

export default Carousel;
