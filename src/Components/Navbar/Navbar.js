import React from "react";
import { Icon } from "@iconify/react";
import closeCircleOutline from "@iconify-icons/mdi/close-circle";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Nav">
      <div>
        <img src="Polygon 14.png" alt="" className="polyimg" />
        <span className="ravimg">Rav</span>
      </div>
      <Icon icon={closeCircleOutline} className="vector" />
      {/* <img src="Vector.png" alt="" className="vector" /> */}
    </div>
  );
}
export default Navbar;
