import React from "react";
import "./Bottombox.css";

function Bottombox() {
  return (
    <div>
      <div className="b1">
        <div>
          <button className="button">
            <span className="l1">Sign me up as Mentee</span>
          </button>
        </div>
        <div>
          <button className="button1">
            <span className="l2">Sign me up as Mentor</span>
          </button>
        </div>
      </div>
      <div className="b2">
        <p className="heading">
          I am seeking advice and guidance from the mentors
        </p>
        <p className="heading">
          I would be able to offer my guidance to those who need it
        </p>
      </div>
      <div className="b3">
        <p className="secondLast">Terms of Service!</p>
        <p className="lastLine">
          Already Have Account? <a href="">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Bottombox;
