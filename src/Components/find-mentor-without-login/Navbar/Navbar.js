import React from "react";
import "./Navbar.css";
import logo from "./images/logo.png";
import { useHistory } from "react-router-dom";

function Nav() {
  const history=useHistory()

  return (
    <div className="navwologin">
      <div className="logowologin">
        <img src={logo} alt="" />
      </div>
      <div className="right-menuwologin">
        <h6>Meet our mentors</h6>
        <button className="loginwologin" onClick={()=> history.push("/login")}>Login</button>

        <button className="signupwologin"  onClick={()=> history.push("/signup")}>Signup</button>
      </div>
    </div>
  );
}

export default Nav;
