import React, { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import "../Assets/styles/ImageSlider.css";

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const SliderStyle = {
    width: "100%",
    height: "576px",
    position: "relative",
  };
  const SliderImageStyles = {
    width: "100%",
    height: "576px",
    backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  const leftArrowStyles = {
    fontSize: "28px",
    color: "#ffffff",
  };

  const rightArrowStyles = {
    fontSize: "28px",
    color: "#ffffff",
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div style={SliderStyle} className="sliderStyle">
      <div style={leftArrowStyles} className="leftArrow" onClick={goToPrevious}>
        <BsArrowLeftCircle />
      </div>
      <div style={rightArrowStyles} className="rightArrow" onClick={goToNext}>
        <BsArrowRightCircle />
      </div>
      <div style={SliderImageStyles} className="slideImageStyle">
        <div className="sliderContent">
          <h1 className="heroTitle">Why You Should Choose Us</h1>
          <p className="heroPara">
            We are dedicated to providing exceptional customer service and
            ensuring that our clients are satisfied with our products or
            services.
          </p>
          <a className="serviceBtn" href="/">
            Services <AiOutlineArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
