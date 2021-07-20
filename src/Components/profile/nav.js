import React from "react";
import img from "./images/Polygon.png";
import profilepic from "./images/Ellipse.png";
import "./nav.css";
// import { Icon } from "@iconify/react";
import { Icon, InlineIcon } from "@iconify/react";
import hamburgerButton from "@iconify-icons/icon-park-outline/hamburger-button";
import triangleDown from "@iconify-icons/zmdi/triangle-down";
export default function Nav() {
  return (
    <>
      <div className="headernavprofile">
        <div className="Leftheader">
          {/* <img src={img} className="poly1" /> */}
          {/* <span className="ravimg">Rav</span> */}
          <div>
            <Icon
              icon={triangleDown}
              width="41px"
              height="47px"
              className="polyimg"
            />
            <span className="ravimg">Rav</span>
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
              </div>
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
