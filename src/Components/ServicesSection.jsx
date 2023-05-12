import React from "react";
import "../Assets/styles/ServicesSection.css";
import ServicesCard from "../Components/ServiceCard";
import { BsBuilding } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";

function ServicesSection() {
  //   Details of the cards include in details array which include objects that contains the actual details of cards
  const details = [
    {
      icon: <BsBuilding className="icon" />,
      title: "Commercial Security",
      description:
        "Keep your business safe and secure with our professional commercial security solutions",
      color: "#001E58",
    },
    {
      icon: <FaUserAlt className="icon" />,
      title: "Personal Security",
      description:
        "We specialize in personalized security services to keep you safe and secure.",
      color: "#FFB11B",
    },
    {
      icon: <MdHomeFilled className="icon" />,
      title: "Residential Security",
      description:
        "Protect your home and family with our expert residential security services",
      color: "#001E58",
    },
    {
      icon: <BsBuilding className="icon" />,
      title: "Commercial Security",
      description:
        "Keep your business safe and secure with our professional commercial security solutions",
      color: "#FFB11B",
    },
    {
      icon: <FaUserAlt className="icon" />,
      title: "Personal Security",
      description:
        "We specialize in personalized security services to keep you safe and secure.",
      color: "#001E58",
    },
    {
      icon: <MdHomeFilled className="icon" />,
      title: "Residential Security",
      description:
        "Protect your home and family with our expert residential security services",
      color: "#FFB11B",
    },
  ];

  return (
    <div>
      <div className="servicesContainer">
        <h2 className="servicesTitle">Our Services for you</h2>
        <p className="servicesDesc">
          We provide customized security solutions for residential, personal,
          industrial, and VIP security needs using advanced technology and
          proven tactics.
        </p>
        <div id="cardArea">
          <ServicesCard id="card" details={details[0]} />
          <ServicesCard id="card" details={details[1]} />
          <ServicesCard id="card" details={details[2]} />
          <ServicesCard id="card" details={details[3]} />
          <ServicesCard id="card" details={details[4]} />
          <ServicesCard id="card" details={details[5]} />
        </div>
        {/* Details of each card is passed as details props */}
      </div>
    </div>
  );
}

export default ServicesSection;
