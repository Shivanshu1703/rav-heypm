import React from "react";
import "./Input_form_login.css";
function Input_form_login() {
  return (
    <div id="login">
      <form>
        <div id="emailheading">
          <p>Email Address</p>
        </div>
        <label for="email_id"></label>
        <input
          type="text"
          id="email_id"
          name="Email"
          placeholder="Your Email Id"
        />
        <br />
        <br />
        <label for="password"></label>
        <div id="passwordheading">
          <p>Password</p>
        </div>
        <input
          type="password"
          id="password"
          name="Password"
          placeholder="Password"
        />
        <br />
        <br />
        <div id="rememberandforgot">
          <div>
            <input type="checkbox" id="rememberme" name="rememberme" />
            <label for="rememberme">Remember me</label>
          </div>
          <div>
            <p>Forgot Password?</p>
          </div>
        </div>
        <div id="buttonalignment">
          <button type="button" id="loginbutton">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
export default Input_form_login;
