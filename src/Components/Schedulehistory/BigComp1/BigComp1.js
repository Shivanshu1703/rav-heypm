import React from "react";
import Midcom1 from "../Midcom1/Midcom1";
import Card1 from "../Card1/Card1";
import { Schedulecalldata } from "../Card1/Schedulecalldata";
import "../../Chathistory/BigComp/BigComp.css";
function Schedulecarddata(val) {
  return (
    <Card1
      name={val.name}
      title={val.title}
      history={val.history}
      image={val.image}
      lastdate={val.lastdate}
    />
  );
}
function BigComp1() {
  return (
    <div className="Bigcomp">
      <Midcom1 />
      <div className="Separator">{Schedulecalldata.map(Schedulecarddata)}</div>
    </div>
  );
}

export default BigComp1;
