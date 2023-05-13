import React from "react";
import "../Assets/styles/ConnectWithUs.css";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import GoogleMapComponent from "./GoogleMapComponent";

function ConnectWithUs() {
  return (
    <div className="connectUsWrapper">
      <div className="connectUsContainer">
        <h5 className="connectTitle">Connect With Us</h5>
        <p className="connectDesc">
          "Get in touch with us to learn more about our services, and how we can
          help you achieve your goals."
        </p>
        <div className="contactContainer">
          <div className="leftContainer">
            <div className="find">
              <MdOutlineLocationOn />
              <span className="findUs">Find Us</span>
            </div>
            <div className="locationContainer">
              <div className="leftLocation">
                <p className="address">
                  ABC Corporation , No. 123, Galle Road, Colombo 6, Sri Lanka.
                </p>
                <GoogleMapComponent />
              </div>
              <div className="rightLocation">
                <p className="address">
                  ABC Corporation , No. 123, Galle Road, Colombo 6, Sri Lanka.
                </p>
                <GoogleMapComponent />
              </div>
            </div>
          </div>
          <div className="rightContainer">
            <div className="emailContainer">
              <div id="email">
                <HiOutlineEnvelope />
                <span className="email">Email</span>
              </div>
              <p className="details">sample@info.com</p>
              <p className="details">securitysl@info.com</p>
            </div>
            <div className="phoneContainer">
              <div id="phone">
                <HiOutlinePhone />
                <span className="callUs">Call Us</span>
              </div>
              <p className="details">+(94) 712 243 452</p>
              <p className="details">0225 245 421</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectWithUs;
