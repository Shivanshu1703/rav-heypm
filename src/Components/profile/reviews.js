import React, { useState } from "react";
import "./review.css";
import profilepics from "./images/Ellipse.png";
import ReviewCard from "./reviewCard";
import { reviewdata } from "./reviewdata";

function ncard(val) {
  return (
    <ReviewCard
      // name={val.name}
      // designation={val.designation}
      // about={val.about}
      // image={val.image}
    />
  );
}

export default function Reviews() {
  return (
    <>
      <div>{reviewdata.map(ncard)}</div>
      
    </>
  );
}
