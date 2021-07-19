import React ,{useState} from "react";
import "./Input_form_login.css"
import { auth, provider } from "../../../firebase"
import {Link,useHistory} from 'react-router-dom' 
import img1 from './Google.jpg'




function Input_form_login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberme, setRememberme] = useState(false)
    const [loading, setLoading] = useState(false)
    const history=useHistory()

    const logIn = ()=> {
        console.log(auth)
        setLoading(true)
        if(email===""  ){
         return alert("first fill the email id ") 
        }
        if(password==="") { 
         return alert("first fill the password ")
        }
       
        auth.signInWithEmailAndPassword(email,password)
        .then(result => {
            if(result){
                console.log(auth)
                  history.push("/profilepage")
            }
            else { 
                 alert(result.user)
            }
         })
        .catch(error => alert(error.message));
            setLoading(false) 
       
    }
  
    const logInwithgoogle = () => {
       // e.preventDefult();
        auth.signInWithPopup(provider)
        .then((result) => {
            if(result)
             history.push("/profilepage")
            else alert(result.user)
        })
        .catch((error) => alert(error.message));
      };



    return(
        <div id="login">
            <form >
                <div id="emailheading">
                    <p>Email Address</p>
                </div>
                    <label for="email_id"></label>
                    <input 
                    type="email" id="email_id"
                     name="email" 
                     placeholder="Your Email Id"
                     onChange={(event) => 
                      setEmail(event.target.value)}
                     /><br /><br/>
                    <label for="password"></label>
                    <div id="passwordheading">
                        <p>Password</p>
                    </div>
                   <input type="password" 
                    id="password"  name="Password" 
                    placeholder="Password" 
                    onChange={(event) => 
                    setPassword(event.target.value)}
                   /><br/><br/>  
                   <div id="rememberandforgot">
                
                    <div>
                    <input type="checkbox" 
                    id="rememberme" 
                    name="rememberme" 
                    onChange={(event) => 
                        setRememberme(event.target.checked)}
                    />
                    <label for="rememberme" >Remember me</label>
                    </div>
                    <div>
                    <p>Forgot Password?</p>
                    </div>
                    </div>
                    <div id="buttonalignment">
                   <button type="button" id="loginbutton" onClick= {logIn}  >Login</button>
                </div>
                  <div className="signinwithgoogle">  
                    <h>Or signIn With</h>
                    <img src={img1} className="googlelogo"  onClick={logInwithgoogle} />
                  </div>
            </form>
        </div>
        );
}
export default Input_form_login;