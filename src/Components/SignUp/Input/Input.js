import React, { useState } from "react";
import "./Input.css";
import { Link, useHistory } from "react-router-dom";
import Bottombox from "../Bottombox/Bottombox";



function Input() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirPassword, setConfirmPassword] = useState("");
  const history = useHistory();
  
 return (
    <div>
      <div className="alignment">
        <form className="center" >
          <p className="innerheading">Your Name</p>
          <div className="center3">
            <input
              type="Name"
              className="input-box"
              placeholder="Your full name"
              name="name"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <p className="innerheading">Email Address</p>
            <input
              type="email"
              className="input-box"
              placeholder="Your email address"
              name="user_email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <p className="innerheading">Password</p>
            <input
              type="Password"
              className="input-box"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div>
            <p className="innerheading">Confirm Password</p>
            <input
              type="Password"
              className="input-box"
              placeholder="Confirm Password"
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <br />
          </div>
        </form>
      </div>
           <Bottombox 
            email={email}
            password={password}
            confirPassword={confirPassword}
            name={name}
           />
    </div>
  );
}

export default Input;

