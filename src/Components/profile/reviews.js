import React, { useState } from "react";
import "./review.css";
import profilepics from "./images/Ellipse.png";
import ReviewCard from "./reviewCard";
import { reviewdata } from "./reviewdata";

function ncard(val) {
  return (
    <ReviewCard
      name={val.name}
      designation={val.designation}
      about={val.about}
      image={val.image}
    />
  );
}

export default function Reviews() {
  //   const [name, setName] = useState("Tony Stark");
  //   const [designation, setDesignation] = useState("Director of Magic @MCU");
  //   const [about, setAbout] = useState(
  //     "Hi, I'm Jean. I've got over 10 years of experience in some sort of design. I started off in the world of editorial as a graphicdesigner and art director and now lead a fast growing team of product designers in Copenhagen.I tend to take the same approach to mentoring, as I do to design; ask lots of questions, and work together to find a solution. ✨"
  //   );
  return (
    <>
      <div>{reviewdata.map(ncard)}</div>
      {/* <div className="reviewbox">
        <div className="imagereviewbox">
          <img src={profilepics} alt="" />
        </div>
        <div className="contentreviewbox">
          <div className="namereview">{name}</div>
          <div className="designationreview">{designation}</div>
          <div className="reviewreview">{about}</div>
        </div>
      </div> */}

      {/* <div className=" reviewarea ">
        <textarea
          className="about"
          name="aboutreview"
          rows="4"
          cols="50"
        ></textarea>{" "}
        <br />
        <textarea
          className="about"
          name="aboutreview"
          rows="4"
          cols="50"
        ></textarea>{" "}
        <br />
        <textarea
          className="about"
          name="aboutreview"
          rows="4"
          cols="50"
        ></textarea>{" "}
        <br />
        <textarea
          className="about"
          name="aboutreview"
          rows="4"
          cols="50"
        ></textarea>{" "}
        <br />
      </div> */}
    </>
  );
}
