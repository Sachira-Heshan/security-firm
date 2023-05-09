import React from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { MdOutlineLocationOn } from "react-icons/md";
import "../../Assets/styles/TopBar.css";

function TopBar() {
  return (
    <div id="top-bar">
      <div
        className="contact-items"
        style={{ height: "46px", backgroundColor: "#021437", color: "#DDE8FF" }}
      >
        <div className="contact-item">
          <HiOutlinePhone />
          <span className="item-text">+(94) 712 234 4354</span>
        </div>
        <div className="contact-item">
          <HiOutlineEnvelope />
          <span className="item-text">security@info.com</span>
        </div>
        <div className="contact-item">
          <MdOutlineLocationOn />
          <span className="item-text">
            No. 123, Galle Road, Colombo 6, Sri Lanka
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
