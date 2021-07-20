import React from "react";
import Menteenav from "./menteenav";
import Menteefooter from "./menteefooter";
import Body from "./body";

export default function Menteepage() {
  return (
    <>
      <div
        className="menteepage"
        style={{
          background: `url('${process.env.PUBLIC_URL}/Vector.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100% 63%",
        }}
      >
        <Menteenav />
        <Body />
        <Menteefooter />
      </div>
    </>
  );
}
