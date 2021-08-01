import React, {useState} from "react";
import img from "./images/Polygon.png";
import profilepic from "./images/Ellipse.png";
import "./nav.css";
// import { Icon } from "@iconify/react";
import { Icon, InlineIcon } from "@iconify/react";
import hamburgerButton from "@iconify-icons/icon-park-outline/hamburger-button";
import triangleDown from "@iconify-icons/zmdi/triangle-down";
import { useHistory } from "react-router";
import {auth,db} from  "../../firebase"


export default function Nav() {
  const history=useHistory()
  const [imageURL,setImageURL] = useState(null)
  const user=auth.currentUser

  if(user){
    db.collection("users").doc(user.uid).get()
    .then(doc => {
      if(doc.data().role === "mentor"){
         setImageURL(doc.data().imageUrl)
       }
       else {
           setImageURL(doc.data().imageUrl)
       }
   })
 }

 const logout= ()=>{
  auth.signOut()
  history.push("/home")
}


  return (
    <>
      <div className="headernavprofile">
        <div className="Leftheader">
          <div>
            <Icon
              icon={triangleDown}
              width="41px"
              height="47px"
              className="polyimg"
            />
          </div>
          <div>
            <span className="ravimg1" onClick={()=>{history.push("/landingpage_withlogin") }}  >Rav</span>
          </div>
        </div>
        <div className="Rightheader">
          <div className="Righthhome">
            <nav className="home1">
              <a href="#" onClick={()=>{history.push("/landingpage_withlogin") }} >HOME</a>
            </nav>
          </div>
          <div className="Righthgrid">
            <div className="grid">
              <div className="gridImage">
                <img src={imageURL} alt="" />
              </div>
              <div className="dropdownprofile">
                <button class className="profilebutton">
                  <Icon
                    icon={hamburgerButton}
                    color="White"
                    width="30px"
                    height="20px"
                    className="hamburger"
                  />
                </button>
                <div class="dropdowncontent">
                  <a href="" onClick={()=>{history.push("/profilepage") }} >My Profile</a>
                  <a href="" onClick={()=>{history.push("/chat") }} >Chats</a>
                  <a href="" onClick={logout} >Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="border"></div> */}
    </>
  );
}
