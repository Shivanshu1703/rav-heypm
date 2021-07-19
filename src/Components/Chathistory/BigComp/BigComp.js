import React from "react";
import Midcomp from "../Midcom/Midcomp";
import Card from "../Card/Card";
import { Carddata } from "../Card/Carddata";
import "./BigComp.css";
function Chatcarddata(val) {
  return (
    <Card
      name={val.name}
      title={val.title}
      history={val.history}
      image={val.image}
      lastdate={val.lastdate}
    />
  );
}
function BigComp() {
  return (
    <div className="Bigcomp">
      <Midcomp />
      <div className="Separator">{Carddata.map(Chatcarddata)}</div>
    </div>
  );
}

export default BigComp;
