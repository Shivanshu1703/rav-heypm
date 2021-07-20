import React from "react";
import Nav from "./profile/nav";
import Footerdown from "./profile/footerdown";
import Footer from "./profile/footer";
import BigComp from "./Chathistory/BigComp/BigComp";
import Bordernav from "./profile/bordernav";

function chat() {
  return (
    <div>
      <Nav />
      <Bordernav />
      <BigComp />
      <Footer />
      <Footerdown />
    </div>
  );
}

export default chat;
