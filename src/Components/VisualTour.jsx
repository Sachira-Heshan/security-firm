import React from "react";
import "../Assets/styles/VisualTour.css";
import Carousel from "../Components/Carousel";
import img01 from "../Assets/img/gallery-img-01.png";
import img02 from "../Assets/img/gallery-img-02.png";
import img03 from "../Assets/img/gallery-img-03.png";
import img04 from "../Assets/img/gallery-img-04.png";
import img05 from "../Assets/img/gallery-img-05.png";
import img06 from "../Assets/img/gallery-img-06.png";
import img07 from "../Assets/img/gallery-img-07.png";

const images = [img01, img02, img03, img04, img05, img06, img07];

function VisualTour() {
  return (
    <div className="visualTourWrapper">
      <div className="visualTourContainer">
        <h5 className="tourTitle">Visual Tour of Our Services</h5>
        <Carousel images={images} />
      </div>
    </div>
  );
}

export default VisualTour;
