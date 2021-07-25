import React, { setState ,useState } from "react";
import Bio from "./bio";
import Reviews from "./reviews";
import img1 from "./images/profilepic.png";
import "./profilepic.css";
import {auth,db} from "../../firebase"
import { useHistory } from "react-router-dom";


  function Profilepic(){ 
    const history=useHistory()
   const [showBio ,setShowBio] =useState(true)
   const [name ,setName] =useState("")
   const [designation,setDesignation]=useState("")


   const toggleShow=()=>{
        setShowBio(!showBio) 
   }
    
   const user=auth.currentUser

     if(user){
     db.collection("users").doc(user.uid).get()
     .then(doc => {
       if(doc.data().role === "mentor"){
          setName(doc.data().name)
          setDesignation(doc.data().recognition)
          // console.log(name,designation)
        }
        else {
            setName(doc.data().name)
            setDesignation(doc.data().designation)
            // console.log(name,designation)
        }
    })
  }
    return (
     

      <>
        <container className="container">
          <div className="row1">
            <div className="pic">
              <img src={img1} alt="prifilepic" /> <br />
              <h3>{name}</h3>
              <p>{designation}</p>
            </div>
            <div className="col2">
              <button id="hi" onClick={()=> history.push("/chat")}>Connect!</button>
            </div>
           </div>

          <div className="col1">
            <div className="centre1">
              <div>
                <button className="bio" onClick={toggleShow}>
                  Bio
                </button>
              </div>
              <div>
                <button className="view" onClick={toggleShow}>
                  Reviews
                </button>
              </div>
            </div>

            <div className="review">
              {showBio ?  <Bio /> : <Reviews />}
            </div>
          </div>
        </container>
      </>
    );
  }

export default Profilepic;
