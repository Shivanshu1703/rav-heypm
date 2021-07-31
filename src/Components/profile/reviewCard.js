import React from "react";
import "./review.css";
function reviewCard(props) {
  return (
    <>
      <div className="reviewbox">
        <div className="imagereviewbox">
          {/* <img src={props.image} alt="" /> */}
           <h2>No Reviews Yet </h2>
        </div>
        <div className="contentreviewbox">
          <div className="namereviewbox">
            <div className="namereview">{props.name}</div>
          </div>
          <div className="reviewreview">{props.designation}</div>
          <div className="reviewreview">{props.about}</div>
        </div>
      </div>
      <div className="line1"></div>
    </>
  );
}

export default reviewCard;
