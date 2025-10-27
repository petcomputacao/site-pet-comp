import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const IMAGE_DATA = [
  { id: 1, imageUrl: `${process.env.PUBLIC_URL}/images/dia-fera/0.jpg`, text: 'imagem 0' },
  { id: 2, imageUrl: `${process.env.PUBLIC_URL}/images/dia-fera/1.jpg`, text: 'imagem 1' },
  { id: 3, imageUrl: `${process.env.PUBLIC_URL}/images/dia-fera/2.jpg`, text: 'imagem 2' },
  { id: 4, imageUrl: `${process.env.PUBLIC_URL}/images/dia-fera/3.jpg`, text: 'imagem 3' },  
  { id: 5, imageUrl: `${process.env.PUBLIC_URL}/images/dia-fera/4.jpg`, text: 'imagem 4' },
  { id: 6, imageUrl: `${process.env.PUBLIC_URL}/images/dia-fera/5.jpg`, text: 'imagem 5' },
  { id: 7, imageUrl: `${process.env.PUBLIC_URL}/images/dia-fera/6.jpg`, text: 'imagem 6' },
  { id: 8, imageUrl: `${process.env.PUBLIC_URL}/images/dia-fera/7.jpg`, text: 'imagem 7' },
  { id: 9, imageUrl: `${process.env.PUBLIC_URL}/images/dia-fera/8.jpg`, text: 'imagem 9' },
];

const EMBLA_OPTIONS = { 
  loop: true,
  align: 'center',
  skipSnaps: false,
};

const AUTOPLAY_PLUGINS = [
  Autoplay({
    delay: 5000, 
    stopOnMouseEnter: false, 
    stopOnInteraction: false, 
  }),
];

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(EMBLA_OPTIONS, AUTOPLAY_PLUGINS);

  // Configuração mínima para o carrossel funcionar
  useEffect(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  return (
    <div className="embla-background-container">
      <div className="embla-viewport" ref={emblaRef}>
        <div className="embla__container">
          {IMAGE_DATA.map((item) => (
            <div className="embla__slide" key={item.id}>
              <div className="embla__slide__inner">
                <img 
                  src={item.imageUrl} 
                  alt={item.text} 
                  className="embla__slide__img"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;