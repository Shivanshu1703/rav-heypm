import React from "react";
import "./Input.css";

function Input() {
  return (
    <div>
      <div className="alignment">
        <form className="center">
          <p className="innerheading">Your Name</p>
          <div className="center3">
            <input
              type="Name"
              className="input-box"
              placeholder="Your full name"
            />
          </div>
          <div className="center3">
            <p className="innerheading">Email Address</p>
            <input
              type="email"
              className="input-box"
              placeholder="Your email address"
            />
          </div>
          <div className="center3">
            <p className="innerheading">Password</p>
            <input
              type="Password"
              className="input-box"
              placeholder="Password"
            />
          </div>
          <div className="center3">
            <p className="innerheading">Confirm Password</p>
            <input
              type="Confirm Password"
              className="input-box"
              placeholder="Confirm Password"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Input;
