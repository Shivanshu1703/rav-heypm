import React from "react";
import Nav from "./profile/nav";
import Footerdown from "./profile/footerdown";
import Footer from "./profile/footer";
// import BigComp from "./Chathistory/BigComp/BigComp";
import BigComp1 from "./Schedulehistory/BigComp1/BigComp1";
import Bordernav from "./profile/bordernav";

function Schedule() {
  return (
    <div>
      <Nav />
      <Bordernav />
      <BigComp1 />
      <Footer />
      <Footerdown />
    </div>
  );
}

export default Schedule;
