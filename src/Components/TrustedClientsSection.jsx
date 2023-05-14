import React from "react";
import "../Assets/styles/TrustedClients.css";
// import image from "../Assets/img/trusted-clients.png";
import trusted01 from "../Assets/img/1.png";
import trusted02 from "../Assets/img/2.png";
import trusted03 from "../Assets/img/3.png";
import trusted04 from "../Assets/img/4.png";
import trusted05 from "../Assets/img/5.png";
import trusted06 from "../Assets/img/6.png";
import trusted07 from "../Assets/img/7.png";
import trusted08 from "../Assets/img/8.png";
import trusted09 from "../Assets/img/9.png";
import trusted10 from "../Assets/img/10.png";
import trusted11 from "../Assets/img/11.png";
import trusted12 from "../Assets/img/12.png";

function TrustedClientsSection() {
  return (
    <div className="trustedClientsWrapper">
      <div className="trustedClientsContainer">
        <h5 className="trustedTitle">Our Trusted Clients</h5>
        <div className="trustedClients">
          {/* <img src={image} alt="trusted clients" className="clientImage" /> */}
          <img src={trusted01} alt="trusted clients" className="clientImage" />
          <img src={trusted02} alt="trusted clients" className="clientImage" />
          <img src={trusted03} alt="trusted clients" className="clientImage" />
          <img src={trusted04} alt="trusted clients" className="clientImage" />
          <img src={trusted05} alt="trusted clients" className="clientImage" />
          <img src={trusted06} alt="trusted clients" className="clientImage" />
          <img src={trusted07} alt="trusted clients" className="clientImage" />
          <img src={trusted08} alt="trusted clients" className="clientImage" />
          <img src={trusted09} alt="trusted clients" className="clientImage" />
          <img src={trusted10} alt="trusted clients" className="clientImage" />
          <img src={trusted11} alt="trusted clients" className="clientImage" />
          <img src={trusted12} alt="trusted clients" className="clientImage" />
        </div>
      </div>
    </div>
  );
}

export default TrustedClientsSection;
