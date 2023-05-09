import React from "react";
import "../Assets/styles/HeroSection.css";
import ImageSlider from "./ImageSlider";
import HeroImage01 from "../Assets/img/HeroImage-01.png";
import HeroImage02 from "../Assets/img/HeroImage-02.jpg";
import HeroImage03 from "../Assets/img/HeroImage-03.jpg";

function HeroSection() {
  const slides = [
    { url: HeroImage01 },
    { url: HeroImage02 },
    { url: HeroImage03 },
  ];

  return (
    <div>
      <div id="slider">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default HeroSection;
