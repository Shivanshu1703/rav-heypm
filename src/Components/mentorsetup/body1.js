import React, {useState,useEffect} from 'react'
import "./body1.css"
import {db,auth} from "../../firebase"
import { useHistory } from 'react-router'

export default function Body1() {
  const [name ,setName]=useState("")
  const [email,setEmail]=useState("")
  const [skill,setSkill]=useState("")
  const [location,setLocation]=useState("")
  const [domain,setDomain]=useState("")
  const [industry,setIndustry]=useState("")
  const [uploadphoto,setUploadphoto]=useState("")
  const [textabout,setTextabout] = useState("")
  const [recognition ,setRecognition] = useState("")
  const [linkurl,setLinkurl] =useState("")
  const history=useHistory()


  const user=auth.currentUser
  if(user){
    db.collection("users").doc(user.uid).get()
    .then(doc => {
       setName(doc.data().name)
       setEmail(doc.data().email)
      console.log(name,email)
    })
  }
  // else history.push("/home")

  const handler =()=>{
    const data={
      name       : name,
      email      : email,
      textabout  : textabout,
      skill      : skill,
      domain     : domain,
      industry   : industry,
      recognition: recognition,
      linkurl    : linkurl,
      uploadphoto: uploadphoto.name,
      location   : location,
      role       : "mentor",
      uid        : user.uid
    }
    db.collection('users').doc(user.uid).set(data)
    history.push("/profilepage")
    
    //mail verification
    // user.sendEmailVerification()
    // .then((result) =>{
    //  alert("mail sent successfully") 
    // }).catch(error =>{
    //   alert(error.message)
    // })
 }

 return (
     <>
     <div className="boxmentor">
      <container className="containermentor">
        <div className="row1mentor">
          <div className="headingmentor">
            <p className="textmentor">
              Hey <span className="jeanmentor">{name},</span> let us get you
              ready!
            </p>
          </div>
        </div>

        <div className="row2mentor">
          <div className="inputboxmentor">
             
          <div className="aboutmentor">
              <div
                className="aboutmentorlabel"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <label className="labelmentor">About</label>
              </div>
              <textarea
                className="textareamentor"
                row="5"
                column="10"
                placeholder="Tell us a bit about yourself!"
                onChange={(e)=> setTextabout(e.target.value)}
              ></textarea>
          </div>
             
             <div className="qualificationmentor">
              <label className="labelmentor">Skill Set *</label>
              <input
                className="inputfieldmentor"
                type="text"
                placeholder="Leader, Collaborative..."
                onChange={(e) => setSkill(e.target.value)}
              />
            </div>

            <div className="companymentor">
              <label className="labelmentor">Domains you worked in *</label>
              <input
                className="inputfieldmentor"
                type="text"
                placeholder="Ex: Sales, marketing, product, operatiosn"
                onChange={(e) => setDomain(e.target.value)}
              />
            </div>

            <div className="designationmentor">
              <label className="labelmentor">Recognition</label>
              <input
                className="inputfieldmentor"
                type="text"
                placeholder="Mention any awards you are proud of"
                onChange={(e) => setRecognition(e.target.value)}
              />
            </div>

            <div className="pastcompmentor">
              <label className="labelmentor">Industries you worked with*</label>
              <input
                className="inputfieldmentor"
                type="text"
                placeholder=" Ex - FMCG, manufacturing, Oil & Gas..... "
                onChange={(e) => setIndustry(e.target.value)}
              />
            </div>

            <div className="linkurlmentor">
              <label className="labelmentor">Linkedin Profile Url</label>
              <input
                className="inputfieldmentor"
                type="text"
                placeholder="Paste your profile url here"
                onChange={(e) => setLinkurl(e.target.value)}
              />
            </div>

            <div className="uploadphotomentor">
              <label className="labelmentor">Upload Photo</label>
              <input
                className="inputfieldmentor"
                type="file"
                placeholder="Choose a file to upload"
                accept="image"
                onChange={(e)=>setUploadphoto(e.target.files[0])}
              />
            </div>
              
            <div className="linkurlmentor">
              <label className="labelmentor">Your city/location</label>
              <input
                className="inputfieldmentor"
                type="text"
                placeholder="Your text goes here..."
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
      
          </div>
        </div>

        <div className="rowtext">
           <p className="info">In the next step, a email will be sent to you on your registered email id. </p>
           <p className="info" >P lease click on the link in the email to verify your account and connect with mentors in this platform  </p>
          
        </div>

        <div className="row3mentor">
          <div className="creatementor">
            <button id="button1mentor" onClick={handler}>
            Send verification email{" "}
            </button>
          </div>

          <div className="cancelmentor">
            <button id="button2mentor" onClick={()=> history.push("/home")} >Cancel </button>
          </div>
        </div>
      </container>
      </div>
       </>
  )
}
