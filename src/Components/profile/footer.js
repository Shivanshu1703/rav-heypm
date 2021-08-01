import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import triangleDown from "@iconify-icons/zmdi/triangle-down";
import img4 from "./images/Polygon.png";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="foo">
        <div className="upfooter">
          <div className="rav">
            {/* <img src={img4} className="poly" /> */}
            <div>
              <Icon
                icon={triangleDown}
                width="41px"
                height="47px"
                className="polyimg"
              />
              <span className="ravimg">Rav</span>
            </div>
            <br></br>
            <p id="leftup">
              Ravolutionizing the connection <br></br>
              with the mentors around the <br></br>
              world...{" "}
            </p>
          </div>

          <div className="getstart">
            <p id="rightup">
             Contact us at:
             <br></br>
             <p id="emailfont">websiterav@gmail.com</p>
            </p>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
}
