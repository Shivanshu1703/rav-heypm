import React, { useState } from "react";
import "./bio.css";

export default function Bio() {
  const [domain, setDomain] = useState("Design");
  const [industry, setIndustry] = useState("Information Technology");
  const [about, setAbout] = useState(
    "Hi, I'm Jean. I've got over 10 years of experience in some sort of design. I started off in the world of editorial as a graphicdesigner and art director and now lead a fast growing team of product designers in Copenhagen.I tend to take the same approach to mentoring, as I do to design; ask lots of questions, and work together to find a solution. ✨"
  );
  const [tools, setTools] = useState("Figma");
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
    //   return (
    //     <>
    //       <div className="centre2">
    //         <h className="heading">About</h>
    //         <br></br>
    //         <textarea
    //           className="line"
    //           name="aboutreview"
    //           rows="4"
    //           cols="50"
    //         ></textarea>
    //         <br></br>
    //         <textarea
    //           className="line"
    //           name="aboutreview"
    //           rows="4"
    //           cols="50"
    //         ></textarea>{" "}
    //         <br></br>
    //         <hr className="line" />
    //         <br></br>
    //         <h className="heading">Industry</h>
    //         <p>Information Technology</p>
    //         <br></br>
    //         <hr className="line" />
    //         <br></br>
    //         <h className="heading">Domain</h>
    //         <p id="design">Design</p>
    //         <br></br>
    //         <button className="designbutton">Ux Design</button>
    //         <button className="designbutton">Product Design</button>
    //         <br></br>
    //         <hr className="line" />
    //         <br></br>
    //         <h className="heading">Tools</h>
    //         <br></br>
    //         <p>Figma</p> <br></br>
    //         <p>Useberry</p>
    //         <br></br>
    //       </div>
    //     </>
  );
}
