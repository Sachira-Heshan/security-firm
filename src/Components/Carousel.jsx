import React, { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import "../Assets/styles/Carousel.css";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = images.length;

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % length);
  };

  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-images">
        <img
          className="carousel-image image-01"
          src={images[currentIndex]}
          alt={`${currentIndex}`}
        />
        <img
          className="carousel-image image-02"
          src={images[(currentIndex + 1) % length]}
          alt={`${currentIndex + 1}`}
        />
        <img
          className="carousel-image image-03"
          src={images[(currentIndex + 2) % length]}
          alt={`${currentIndex + 2}`}
        />
        <img
          className="carousel-image image-04"
          src={images[(currentIndex + 3) % length]}
          alt={`${currentIndex + 3}`}
        />
      </div>
      <div className="carousel-navigation">
        <button className="carousel-btn" onClick={prevImage}>
          <BsArrowLeftCircle />
        </button>
        <button className="carousel-btn" onClick={nextImage}>
          <BsArrowRightCircle />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
