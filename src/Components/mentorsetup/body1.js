import React, {useState,useEffect} from 'react'
import "./body1.css"
import {db,auth} from "../../firebase"
import { useHistory } from 'react-router'

export default function Body1() {
  const [name ,setName]=useState("")
  const [email,setEmail]=useState("")
  const [jobtitle,setJobtitle]=useState("")
  const [company,setCompany]=useState("")
  const [domain,setDomain]=useState("")
  const [industry,setIndustry]=useState("")
  const [education,setEducation]=useState("")
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
  else history.push("/home")

  const handler =()=>{
    const data={
      name     : name,
      email    : email,
      jobtitle : jobtitle,
      company  : company,
      domain   : domain,
      industry : industry,
      education: education,
      role     : "mentor"
    }
    db.collection('users').doc(user.uid).set(data)
    history.push("/profilepage")
 }

    return (
        <>
        <div className="box">
          <container className="container" >
              <div className="row1"> 
                  
                     <div className="heading">
                     <p className="text">
                       {" "}
                      Hey <span className="jean">{name},</span> let us get you ready!
                      </p>
                     </div> 
                     <div className="circe1">
                     <img className="ellipse1" src={process.env.PUBLIC_URL+"/Ellipse 27.png"} />
                     </div> 
                  
              </div >
            <div className="row2">
            <div className="circle2">
              <img
                className="ellipse2"
                src={process.env.PUBLIC_URL + "/Ellipse 26.png"}
              />
            </div>
            <div className="inputbox">
              <div className="uploadphoto">
                <label className="label">Job Title</label>
                <input
                  className="inputfield"
                  type="text"
                  placeholder="Ex: Product Manager"
                  onChange={(e) => setJobtitle(e.target.value)}
                />
              </div>

              <div className="qualification">
                <label className="label">Company</label>
                <input
                  className="inputfield"
                  type="text"
                  placeholder="Ex: Google"
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <div className="company">
                <label className="label">Domain</label>
                <input
                  className="inputfield"
                  type="text"
                  placeholder="Ex: Product"
                  onChange={(e) => setDomain(e.target.value)}
                />
              </div>

              <div className="designation">
                <label className="label">Industry</label>
                <input
                  className="inputfield"
                  type="text"
                  placeholder="Ex: Information Technology"
                  onChange={(e) => setIndustry(e.target.value)}
                />
              </div>

              <div className="pastcomp">
                <label className="label">Education</label>
                <input
                  className="inputfield"
                  type="text"
                  placeholder="Ex: MBA in IIMB  "
                  onChange={(e) => setEducation(e.target.value)}
                />
              </div>
            </div>
            <div className="image">
              <img
                className="vector"
                src={process.env.PUBLIC_URL + "/Vector.png"}
              />
            </div>
          </div>

          <div className="row3">
            <div className="next">
              <button id="button" onClick={handler}>
                Next{" "}
              </button>
            </div>
          </div>
        </container>
      </div>
    </>
  );
}
