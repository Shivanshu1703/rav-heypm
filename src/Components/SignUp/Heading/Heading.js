import React from "react";
import "./Heading.css";
import {auth} from '../../../firebase'

function Heading() {
  return (
    <div className="center1">
      <div className="center2">
        <p className="h1">
          Join <span style={{ color: "#0126a8" }}>Rav!</span> today.
        </p>
      </div>
      <div className="center2">
        {/* <h3 style={{ textAlign: "center", padding: 5 }}> */}
        <p className="h2">A place to meet mentors in global community</p>
      </div>
    </div>
  );
}

export default Heading;
