import React, { useState, useRef, useEffect } from 'react';
import './Carousel.scss';

const Carousel = ({ carouselImages }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = carouselImages.length - 1;
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
        {carouselImages.map((product, idx) => {
          return (
            <img
              key={product.id}
              className={
                currentSlide === idx ? 'slideItem slideActive' : 'slideItem'
              }
              alt="제품홍보이미지"
              src={product.images}
            />
          );
        })}

        <button className="slideBtn" onClick={nextSlide}>
          <i className="far fa-arrow-alt-circle-right" />
        </button>

        <div className="slideDots">
          {carouselImages.map((product, idx) => (
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
