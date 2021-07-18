import React from "react";
import Nav from "./profile/nav";
import Footerdown from "./profile/footerdown";
import Footer from "./profile/footer";
import BigComp from "./Chathistory/BigComp/BigComp";

function chat() {
  return (
    <div>
      <Nav />
      <BigComp />
      <Footer />
      <Footerdown />
    </div>
  );
}

export default chat;
