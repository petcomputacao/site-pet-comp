import './Slider.css';
import React, { useState } from 'react';

const SliderImages = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-container">
      <div className="slides-track" style={{
        transform: `translateX(-${currentSlide * 100}%)`,
        transition: 'transform 0.6s ease-in-out'
      }}>
        <div className="slide">
          <img
            src={process.env.PUBLIC_URL + "/images/logo-pet-branco.png"}
            alt="Logo da UFCG"
            className="slide-image"
          />
        </div>
        <div className="slide">
          <img
            src={process.env.PUBLIC_URL + "/images/logo-pet-branco.png"}
            alt="Logo da UFCG"
            className="slide-image"
          />
        </div>
        <div className="slide">
          <img
            src={process.env.PUBLIC_URL + "/images/logo-pet-branco.png"}
            alt="Logo da UFCG"
            className="slide-image"
          />
        </div>
        <div className="slide">
          <img
            src={process.env.PUBLIC_URL + "/images/logo-pet-branco.png"}
            alt="Logo da UFCG"
            className="slide-image"
          />
        </div>
      </div>

      <button 
        className="slider-control prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        &lt;
      </button>
      <button 
        className="slider-control next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        &gt;
      </button>

      <div className="slider-indicators">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderImages;
