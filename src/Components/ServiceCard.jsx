import React from "react";
import "../Assets/styles/ServiceCard.css";

function ServiceCard({ details }) {
  return (
    <div>
      <div className="cardContainer" style={{ backgroundColor: details.color }}>
        <div className="iconCircle">{details.icon}</div>
        <h4 className="cardTitle">{details.title}</h4>
        <p className="cardDescription">{details.description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
