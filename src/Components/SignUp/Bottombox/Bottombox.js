import React, { useState }  from "react";
import "./Bottombox.css";
import { Link, useHistory } from "react-router-dom";
import { auth ,db} from "../../../firebase";


function Bottombox() {

  const history = useHistory();
   
  //authentication
    
  const clickAsmentee=  (e)=>{
    e.preventDefault()

    if(props.name==="")
      return alert("name cannot be empty")
    if(props.name.length<2 || props.name.length>50){
      return alert("name should be at least 2 chars long and maximum 50 characters long")
    }

    if(props.email==="")
      return alert("email cannot be empty")
    if(props.email.indexOf('@')<=0 ||  props.email.charAt(props.email.length-4)!=='.')
      return alert("Invalid email id")

    if(props.password===""  || props.password.length < 6)
      return alert("Fill  at least 6 characters  password ")    
    if(props.password!==props.confirPassword)
     return alert("Confirmpassword did not match") 
    
   
     auth.createUserWithEmailAndPassword(props.email, props.password)
     .then((userCredential) => {
      db.collection("users").doc(userCredential.user.uid).set({
        // uid  : userCredential.uid,
        email: props.email,
        name : props.name,
        createdAt :new Date()
       })  
      if(userCredential)
          history.push("/menteepage")
      else  alert(userCredential.user) 
      var user = userCredential.user;
      // ...
     
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage ,errorCode )
    });
  }

  const clickAsmentor=(e)=>{

    //console.log(props.email,props.password)
    e.preventDefault()

    if(props.name==="")
      return alert("name cannot be empty")
    if(props.name.length<2 || props.name.length>50){
      return alert("name should be at least 2 chars long and maximum 50 characters long")
    }

    if(props.email==="")
      return alert("email cannot be empty")
    if(props.email.indexOf('@')<=0 ||  props.email.charAt(props.email.length-4)!=='.')
      return alert("Invalid email id")

    if(props.password===""  || props.password.length < 6)
      return alert("Fill  at least 6 characters  password ")    
    if(props.password!==props.confirPassword)
     return alert("Confirmpassword did not match") 
    
   
    auth.createUserWithEmailAndPassword(props.email, props.password)
   .then((userCredential) => {
    db.collection("users").doc(userCredential.user.uid).set({
      // uid  : userCredential.uid,
      email: props.email,
      name : props.name,
      createdAt :new Date()
     })  
    if(userCredential)
        history.push("/mentorpage")
    else  alert(userCredential.user) 
    var user = userCredential.user;
    // ...
   
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage ,errorCode )
  });
  }
  
  return (

   <div>
      <div className="b1">
        <div>
          <button className="button" style={{ cursor: "pointer" }} onClick={clickAsmentee} >
            <span className="l1">Sign me up as Mentee</span>
          </button>
        </div>
        <div>
          <button className="button1" style={{ cursor: "pointer" }} onClick={clickAsmentor} >
            <span className="l2">Sign me up as Mentor</span>
          </button>
        </div>
      </div>
      <div className="b2">
        <p className="heading1">
          I am seeking advice and guidance from the mentors
        </p>
        <p className="heading1">
          I would be able to offer my guidance to those who need it
        </p>
      </div>
      <div className="b3">
        <p className="secondLast">Terms of Service!</p>
        <p className="lastLine">
          Already Have Account? <Link to="../../Login"> Login </Link>
        </p>
      </div>
    </div>
  );
}

export default Bottombox;
