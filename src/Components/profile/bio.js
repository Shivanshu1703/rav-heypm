import React, { useState } from "react";
import "./bio.css";
import {db,auth} from "../../firebase"

export default function Bio() {
  const [domain, setDomain] = useState("");
  const [industry, setIndustry] = useState("");
  const [about, setAbout] = useState();
  const [tools, setTools] = useState("Figma");
  const user= auth.currentUser
  
  if(user){
     db.collection("users").doc(user.uid).get()
     .then(doc => {
       if(doc.data().role === "mentor"){
          setDomain(doc.data().domain)
          setIndustry(doc.data().industry)
          setAbout(doc.data().textabout)
          setTools(doc.data().skill)
          console.log(domain,industry)}
        else {
           setAbout(doc.data().textabout) 
           setDomain(doc.data().domain)
           setIndustry(doc.data().industry )
           setTools(doc.data().skill)
        }
    })
  }
  // else {
  //   setDomain(props.domain)
  //   setIndustry(props.industry)
  //   setAbout(props.about)
  //   setTools(props.skill) 
  // }
 

  
   console.log(domain,industry)
  return (
    <>
      <div className="centre2">
        <h className="headingp">About</h>
        <div className="AboutP" style={{ fontWeight: "normal" }}>
          {about}
        </div>
        <div className="line1"></div>
        <h className="headingp">Industry</h>
        <div className="AboutP">{industry}</div>
        <div className="line1"></div>
        <h className="headingp">Domain</h>
        <div className="AboutP">{domain}</div>
        {/* <div className="ButtonDomain">
          <button className="designbutton" disabled="true">
            <div className="AboutP" style={{ fontWeight: "normal" }}>
              Ux Design
            </div>
          </button>
          <button className="designbutton" disabled="true">
            <div className="AboutP" style={{ fontWeight: "normal" }}>
              Product Design
            </div>{" "}
          </button>
          <button className="designbutton" disabled="true">
            <div className="AboutP" style={{ fontWeight: "normal" }}>
              Ux Design
            </div>
          </button>
        </div> */}
        <div className="line1"></div>
        <h className="headingp">Skill-Set</h>
        <div className="AboutP">{tools}</div>
      </div>
    </>
  
  );
}
