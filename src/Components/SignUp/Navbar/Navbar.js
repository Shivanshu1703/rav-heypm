import React from "react";
import { Icon } from "@iconify/react";
import closeCircleOutline from "@iconify-icons/mdi/close-circle";
import triangleDown from "@iconify-icons/zmdi/triangle-down";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Nav">
      <div>
        <Icon
          icon={triangleDown}
          width="41px"
          height="47px"
          className="polyimg"
        />

        <span className="ravimg">Rav</span>
      </div>
      <Icon icon={closeCircleOutline} className="vector" />
      {/* <img src="Vector.png" alt="" className="vector" /> */}
    </div>
  );
}
export default Navbar;
