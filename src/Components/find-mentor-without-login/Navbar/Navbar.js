import React from "react";
import "./Navbar.css";
import logo from "./images/logo.png";
function Nav() {
  return (
    <div className="navwologin">
      <div className="logowologin">
        <img src={logo} alt="" />
      </div>
      <div className="right-menuwologin">
        <h6>Meet our mentors</h6>
        <button className="loginwologin">Login</button>

        <button className="signupwologin">Signup</button>
      </div>
    </div>
  );
}

export default Nav;
