import React from "react";
import Navbar from "./Navbar/Navbar";
import Heading_login from "./Heading_login/Heading_login";
import Input_form_login from "./Input_form_login/Input_form_login"
import Logintosignup from "./Logintosignup/Logintosignup";
function Login(){
    return(
        <div>
            <div>
                <Navbar />
                <Heading_login />
                <Input_form_login />
                <Logintosignup />
            </div>
        </div>
    )
}
export default Login;