import React, { useState } from 'react';

const Carousel = ({ carouselItems }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = carouselItems.length - 1;
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
            <div
              key={item.id}
              className={
                currentSlide === idx ? 'slideItem slideActive' : 'slideItem'
              }
            >
              <img
                className="slideImg"
                alt="제품홍보이미지"
                src={item.promotionImg}
              />
            </div>
          );
        })}

        <button className="slideBtn" onClick={nextSlide}>
          <i className="far fa-arrow-alt-circle-right" />
        </button>

        <div className="slideDots">
          {carouselItems.map((promotionImg, idx) => (
            <button
              key={idx}
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
