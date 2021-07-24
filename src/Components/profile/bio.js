import React, { useState } from "react";
import "./bio.css";
import {db,auth} from "../../firebase"

export default function Bio() {
  const [domain, setDomain] = useState("");
  const [industry, setIndustry] = useState("");
  const [about, setAbout] = useState(
    "Hi, I'm Jean. I've got over 10 years of experience in some sort of design. I started off in the world of editorial as a graphicdesigner and art director and now lead a fast growing team of product designers in Copenhagen.I tend to take the same approach to mentoring, as I do to design; ask lots of questions, and work together to find a solution. ✨"
  );
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
          //  setDomain(doc.data().domain)
           setIndustry(doc.data().pastcompany ) 
        }
    })
  }
 

  
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
        <div className="ButtonDomain">
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
        </div>
        <div className="line1"></div>
        <h className="headingp">Tools</h>
        <div className="AboutP">{tools}</div>
      </div>
    </>
  
  );
}
