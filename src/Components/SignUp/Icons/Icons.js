import React from "react";
import "./Icons.css";
import linkedin from "./LinkedIn.png";
import google from "./Google.jpg";

function Icons() {
  return (
    <div className="iconslist">
      <div>
        <p className="icons">Or use</p>
      </div>
      <a href="https://www.google.com/gmail/" className="google">
        <img src={google} alt="" />
      </a>
      <a
        href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
        className="linkedin"
      >
        <img src={linkedin} alt="" />
      </a>
    </div>
  );
}

export default Icons;
