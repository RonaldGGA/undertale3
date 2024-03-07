import React, { useState } from 'react';

const Carousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <div>

      <button onClick={prevSlide}>Previous</button>

      {images.map((image, index) => (
        <div key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;

