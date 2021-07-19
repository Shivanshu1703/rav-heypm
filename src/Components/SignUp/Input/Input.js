import React ,{useState} from "react";
import "./Input.css";
// import Bottombox from "../Bottombox/Bottombox"
import emailjs, { EmailJSResponseStatus } from 'emailjs-com'
import {auth} from '../../../firebase'
import {Link ,useHistory} from "react-router-dom"

// import React from "react";
// import "./Input.css";

function Input() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_u5mxsvo', 'template_2c6nqhl', e.target, 'user_toS3vFmKYLJOPuhQwzhJc')
      .then(result =>{
          console.log(result.text);
      }).catch ( error => {
          console.log(error.text);
      });
  };

 const [email, setEmail] = useState("")
 const [name, setName] = useState("")
 const [password, setPassword] = useState("")
 const [confirPassword, setConfirmPassword] = useState("")
 const history=useHistory()

  const createUser =(e)=>{

    console.log(email,password)
    e.preventDefault()

    if(name==="")
      return alert("name cannot be empty")
    if(name.length<2 || name.length>50){
      return alert("name should be at least 2 chars long and maximum 50 characters long")
    }

    if(email==="")
      return alert("email cannot be empty")
    if(email.indexOf('@')<=0 || email.charAt(email.length-4)!=='.')
      return alert("Invalid email id")

    if(password===""  || password.length < 6)
      return alert("Fill  at least 6 characters  password ")    
    if(password!==confirPassword)
     return alert("Confirmpassword did not match") 
    
   
    auth.createUserWithEmailAndPassword(email, password)
   .then((userCredential) => {
    if(userCredential) 
      history.push("/menteepage")
    else alert(userCredential.user) 
    var user = userCredential.user;
    // ...
   // sendEmail(name,email)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage ,errorCode )
  });
  }

//  function sendEmail(name,email){
//    Email.send({
//      Host: "smtp.gmail.com",
//      Username :"nitishkumar84049@gmail.com",
//      password: "qnvekabcxyfdflqk",
//      To: "nitishkumar84049@gmail.com",
//      From: " nitishkumar84049@gmail.com ",
//      Subject : `${name} sent you a message`,
//      Body: ` Name : ${name} <br/> 
//              Email : ${email} `
//    }).then( (message)=>alert( "mail sent successfully") );
//  }



  return (
    <div>
       
      <div className="alignment">
        <form className="center"  onSubmit={sendEmail}>
          <p className="innerheading">Your Name</p>
          <div className="center3">
            <input
              type="Name"
              className="input-box"
              placeholder="Your full name"
              name="name" 
              onChange={(event) => 
                setName(event.target.value)
              }
            />
          </div>
          <div>
            <p className="innerheading">Email Address</p>
            <input
              type="email"
              className="input-box"
              placeholder="Your email address"
              name="user_email" 
              onChange={(event) => 
                setEmail(event.target.value)
              }
            />
          </div>
          <div>
            <p className="innerheading">Password</p>
            <input
              type="Password"
              className="input-box"
              placeholder="Password"
              onChange={(event) => 
                setPassword(event.target.value)
              }
            />
          </div>
          <div>
            <p className="innerheading">Confirm Password</p>
            <input
              type="Confirm Password"
              className="input-box"
              placeholder="Confirm Password"
              onChange={(event) => 
                setConfirmPassword(event.target.value)
              }
            />
            <br/>
            <input type='submit' value='send' onClick={createUser} />
          </div>
        </form>
      </div>
     
    </div>
   
  );
}

export default Input;

// function Input() {
//   return (
//     <div>
//       <div className="alignment">
//         <form className="center">
//           <p className="innerheading">Your Name</p>
//           <div className="center3">
//             <input
//               type="Name"
//               className="input-box"
//               placeholder="Your full name"
//             />
//           </div>
//           <div className="center3">
//             <p className="innerheading">Email Address</p>
//             <input
//               type="email"
//               className="input-box"
//               placeholder="Your email address"
//             />
//           </div>
//           <div className="center3">
//             <p className="innerheading">Password</p>
//             <input
//               type="Password"
//               className="input-box"
//               placeholder="Password"
//             />
//           </div>
//           <div className="center3">
//             <p className="innerheading">Confirm Password</p>
//             <input
//               type="Confirm Password"
//               className="input-box"
//               placeholder="Confirm Password"
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Input;
