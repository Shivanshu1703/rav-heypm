import React from "react";
import "./Heading_login.css";

function Heading_login() {
  return (
    <div id="Welcome">
      <div id="loginheading">
        <p>Welcome Back!</p>
      </div>
      <div id="loginsubheading">
        <p>A place to meet mentors in global community</p>
        {/* <img src={process.env.PUBLIC_URL+"/Group 71.png"}/> */}
      </div>
    </div>
  );
}

export default Heading_login;
