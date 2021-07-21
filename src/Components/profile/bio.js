import React, { useState, useEffect } from "react";
import "./bio.css";
import {db} from "../../firebase"

export default function Bio() {
  let [domain, setDomain] = useState("");
  let [industry, setIndustry] = useState("");
  let [about, setAbout] = useState(
    "Hi, I'm Jean. I've got over 10 years of experience in some sort of design. I started off in the world of editorial as a graphicdesigner and art director and now lead a fast growing team of product designers in Copenhagen.I tend to take the same approach to mentoring, as I do to design; ask lots of questions, and work together to find a solution. ✨"
  );
  const [tools, setTools] = useState("Figma");
  const [mentordata ,setMentordata]=useState([]);
  
  useEffect(()=>{
     db.collection("mentor").onSnapshot(snapshot => {
        setMentordata(snapshot.docs.map(doc => doc.data()))
   })
      
  },[])

   domain=mentordata.map(value => value.domain)
   industry=mentordata.map(value => value.industry)

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
