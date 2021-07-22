import React from "react";
import Nav from "../Components/profile/nav";
import Footerdown from "../Components/profile/footerdown";
import Footer from "../Components/profile/footer";
import BigComp from "../Components/Chathistory/BigComp/BigComp";
import Bordernav from "../Components/profile/bordernav";

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
