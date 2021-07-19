import React from "react";
import { Link } from "react-router-dom";
import "./Logintosignup.css";


function Logintosignup(){
    return(
        <div id="tosignup">
            <div id="signup">
                <p>Create an account? <Link to="SignUp"> <span className = "bluetext" >Signup </span> </Link>  </p>
            </div>
        </div>
    );
}
export default Logintosignup;