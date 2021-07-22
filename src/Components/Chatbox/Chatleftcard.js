import React, { useState } from "react";
import "./Chatleftcard.css";
import { Link } from "react-router-dom";

function Chatleftcard(props) {
  function readchat() {
    console.log("hello world");
    <Link to="Chatchat"> </Link>;
  }
  return (
    <div>
      <div className="ChatleftcardCard" onClick={readchat}>
        <div className="Chatleftcardleft">
          <div className="Chatleftcardimage">
            <img src={props.image} alt="" />
          </div>
        </div>
        <div className="Chatleftcardright">
          <div className="Chatleftcardname">{props.name}</div>
          <div className="Chatleftcardemail">{props.email}</div>
        </div>
      </div>
      <div className="line1"></div>
    </div>
  );
}

export default Chatleftcard;
