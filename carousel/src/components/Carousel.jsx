import React, { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import {
  CarouselWrapper,
  CarouselImg,
  IndicatorWrapper,
  IndicatorButton,
} from './CarouselStyle';

export default function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };
  return (
    <div>
      <CarouselWrapper>
        <BsArrowLeftCircleFill
          onClick={prevSlide}
          className="arrow arrow-left"
        />
        {slides.map((item, index) => (
          <CarouselImg
            src={item.src}
            alt={item.alt}
            key={index}
            className={currentSlide === index ? '' : 'slide-hidden'}
          />
        ))}
        <BsArrowRightCircleFill
          onClick={nextSlide}
          className="arrow arrow-right"
        />
        <IndicatorWrapper>
          {slides.map((_, index) => (
            <IndicatorButton
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={currentSlide === index ? '' : 'indicator-inactive'}
            />
          ))}
        </IndicatorWrapper>
      </CarouselWrapper>
    </div>
  );
}
