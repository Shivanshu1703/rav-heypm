import React, { useState } from "react";
// import "./Card.css";
import "../../Chathistory/Card/Card.css";

function Card1(props) {
  return (
    <div className="Cards">
      <div className="Card">
        <div className="Upper">
          <div className="Leftupper">
            <div className="Image">
              <img src={props.image} alt="" />
            </div>
          </div>
          <div className="Rightupper">
            <div className="Name">{props.name}</div>
            <div className="Title">{props.title}</div>
            <div className="History">{props.history}</div>
            <div className="Lastdate">Last chat date {props.lastdate}</div>
          </div>
        </div>
        <div className="Lower">
          <div className="Button">
            <button className="Button1">Ask to schedule a call</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
