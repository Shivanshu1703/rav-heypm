import React from "react";
import Navbar from "./SignUp/Navbar/Navbar";
import Heading_login from "./Login/Heading_login/Heading_login";
import Input_form_login from "./Login/Input_form_login/Input_form_login";
import Logintosignup from "./Login/Logintosignup/Logintosignup";
function Login() {
  return (
    <div>
      <div style={{
        background: `url('${process.env.PUBLIC_URL}/Group 71.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100% 50%",
      }}>
        <Navbar />
        <Heading_login />
        <Input_form_login />
        <Logintosignup />
      </div>
    </div>
  );
}
export default Login;
