import React from "react";
import Navbar from "./SignUp/Navbar/Navbar";
import Heading from "./SignUp/Heading/Heading";
import Input from "./SignUp/Input/Input";
import Icons from "./SignUp/Icons/Icons";
import Bottombox from "./SignUp/Bottombox/Bottombox";

function SignUp() {
  return (
    <div>
      <div>
        <Navbar />
        <Heading />
        <Input />
        {/* <Icons /> */}
        <Bottombox />
      </div>
    </div>
  );
}

export default SignUp;
