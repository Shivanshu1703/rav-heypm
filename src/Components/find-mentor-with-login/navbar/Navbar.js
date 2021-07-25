import React from "react";
import img from "./images/logo.png";
import profilepic from "./images/Ellipse.png";
// import "./nav.css";
// import { Icon } from "@iconify/react";
import { Icon, InlineIcon } from "@iconify/react";
import hamburgerButton from "@iconify-icons/icon-park-outline/hamburger-button";
import triangleDown from "@iconify-icons/zmdi/triangle-down";
export default function Navbar() {
  return (
    <>
      <div className="headernavprofile">
        <div className="Leftheader">
          {/* <img src={img} className="poly1" /> */}
          {/* <span className="ravimg">Rav</span> */}
          <div>
            <img src={img} alt="" />
          </div>
        </div>
        <div className="Rightheader">
          <div className="Righthhome">
            <nav className="home1">
              <a href="#">HOME</a>
            </nav>
          </div>
          <div className="Righthgrid">
            <div className="grid">
              <div className="gridImage">
                <img src={profilepic} alt="" />
              </div>￼
              <button className="profilebutton">
                <Icon
                  icon={hamburgerButton}
                  color="White"
                  width="30px"
                  height="20px"
                  className="hamburger"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="border"></div> */}
    </>
  );
}
