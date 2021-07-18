import React from "react";
import Navbar from "./SignUp/Navbar/Navbar";
import Heading from "./SignUp/Heading/Heading";
import Input from "./SignUp/Input/Input";
import Icons from "./SignUp/Icons/Icons";
import Bottombox from "./SignUp/Bottombox/Bottombox";
import security from "./SignUp/Input/Datasecurity.png";

function SignUp() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${security})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100% 50%",
        }}
      >
        <Navbar />
        <Heading />
        <Input />
        <Bottombox />
      </div>
    </div>
  );
}

export default SignUp;
