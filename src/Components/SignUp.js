import React from "react";
import Navbar from "./Navbar/Navbar";
import Heading from "./Heading/Heading";
import Input from "./Input/Input";
import Icons from "./Icons/Icons";
import Bottombox from "./Bottombox/Bottombox";

function SignUp() {
  return (
    <div>
      <div>
        <Navbar />
        <Heading />
        <Input />
        <Icons />
        <Bottombox />
      </div>
    </div>
  );
}

export default SignUp;
