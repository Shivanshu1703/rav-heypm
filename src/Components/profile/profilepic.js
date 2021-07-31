import React, { setState ,useState } from "react";
import Bio from "./bio";
import Reviews from "./reviews";
import img1 from "./images/profilepic.png";
import "./profilepic.css";
import {auth,db} from "../../firebase"

  function Profilepic(){ 
   const [showBio ,setShowBio] =useState(true)
   const [name ,setName] =useState("")
   const [designation,setDesignation]=useState("")
   const [image, setImage] = useState("")
   const [imageURL,setImageURL] = useState(null)

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
          setImageURL(doc.data().imageUrl)
          console.log(imageURL)
        }
        else {
            setName(doc.data().name)
            setDesignation(doc.data().designation)
            setImageURL(doc.data().imageUrl)
            // console.log(name,designation)
        }
    })
  }
    return (
      <>
        <container className="container">
          <div className="row1">
            <div className="pic">
              <img src={imageURL} alt="" width="144px" height="124px"  /> <br />
              <h3>{name}</h3>
              <p>{designation}</p>
            </div>
            <div className="col2">
              <button id="hi">Say Hi!</button>
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
