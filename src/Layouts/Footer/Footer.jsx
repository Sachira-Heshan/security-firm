import React from "react";
import "../../Assets/styles/Footer.css";

function Footer() {
  return (
    <div
      id="footer"
      style={{
        backgroundColor: "#021437",
        height: "60px",
        fontSize: "14px",
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="footer-text container d-flex justify-content-center align-items-center">
        © 2021 Guardian Force Security (Pvt) Ltd | All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
