import '../../styles/projetos-desenvolvimento/CarrosselVertical.css';
import React, { useState } from 'react';


const SliderVertical = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <div className="slider-vertical-container">
      <div 
        className="slides-vertical-track"
        style={{ transform: `translateY(-${currentSlide * 100}%)` }}
      >
        <div className="slide-vertical">
          <img
            src={process.env.PUBLIC_URL + "/images/exemplos/compensar.png"}
            alt="Imagem 1"
            className="slide-image-vertical"
          />
        </div>
        <div className="slide-vertical">
          <img
            src={process.env.PUBLIC_URL + "/images/exemplos/educacao.png"}
            alt="Imagem 2"
            className="slide-image-vertical"
          />
        </div>
        <div className="slide-vertical">
          <img
            src={process.env.PUBLIC_URL + "/images/exemplos/escolas.png"}
            alt="Imagem 3"
            className="slide-image-vertical"
          />
        </div>
        <div className="slide-vertical">
          <img
            src={process.env.PUBLIC_URL + "/images/exemplos/fera.png"}
            alt="Imagem 4"
            className="slide-image-vertical"
          />
        </div>
        <div className="slide-vertical">
          <img
            src={process.env.PUBLIC_URL + "/images/exemplos/mulheres.png"}
            alt="Imagem 5"
            className="slide-image-vertical"
          />
        </div>
        <div className="slide-vertical">
          <img
            src={process.env.PUBLIC_URL + "/images/exemplos/sustentabilidade.png"}
            alt="Imagem 6"
            className="slide-image-vertical"
          />
        </div>
      </div>
      

      <button 
        className="slider-vertical-control prev"
        onClick={prevSlide}
        aria-label="Slide anterior"
      >
        ▲
      </button>
      <button 
        className="slider-vertical-control next"
        onClick={nextSlide}
        aria-label="Próximo slide"
      >
        ▼
      </button>
    </div>
  );
};

export default SliderVertical;
