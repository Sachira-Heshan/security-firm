import React from "react";
import "../Assets/styles/AboutUsSection.css";

function AboutUsSection() {
  return (
    <div className="aboutUsWrapper">
      <div className="sectionContainer">
        <div className="aboutDetails">
          <div className="blueContainer">
            <h5 className="about-us">About Us</h5>
            <h4 className="aboutTitle">What We Do and Who We Are?</h4>
            <p className="aboutDesc">
              "At{" "}
              <span className="goldUnderline">
                Guardian Force Security (Pvt) Ltd
              </span>
              , we are a trusted security service provider offering a range of
              solutions for residential, personal, industrial, and VIP security
              needs.
            </p>
            <p className="aboutDesc">
              Our team consists of{" "}
              <span className="highlighted">highly experienced</span> and{" "}
              <span className="highlighted">
                skilled retired senior commissioned officers of the Sri Lanka
                Army
              </span>
              , who bring their expertise and dedication to providing the best
              security services possible. We provide customized security
              solutions tailored to each client's specific requirements, using
              advanced technology and proven tactics to ensure maximum safety
              and protection. At SL security services, we are committed to
              providing reliable, professional, and effective security services
              to our clients, no matter their needs or location."
            </p>
          </div>
        </div>
        <div className="imageSection"></div>
      </div>
    </div>
  );
}

export default AboutUsSection;
