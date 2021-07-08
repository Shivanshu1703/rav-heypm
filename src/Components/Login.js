import React from "react";
import Navbar from "./SignUp/Navbar/Navbar";
import Heading_login from "./Login/Heading_login/Heading_login";
import Input_form_login from "./Login/Input_form_login/Input_form_login";
import Logintosignup from "./Login/Logintosignup/Logintosignup";
function Login() {
  return (
    <div>
      <div>
        <Navbar />
        <Heading_login />
        <Input_form_login />
        <Logintosignup />
      </div>
    </div>
  );
}
export default Login;
