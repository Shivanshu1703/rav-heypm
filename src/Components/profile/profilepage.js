import React from "react";
import "./profilepage.css";
import Nav from "./nav.js";
import Profilepic from "./profilepic";
import Footer from "./footer";
import Footerdown from "./footerdown";
import Bordernav from "./bordernav";

export default function Profilepage() {
  //    const [review ,setReview] =useState(false)

  return (
    <>
      <div className="profile">
        <Nav />
        <Bordernav />
        <Profilepic />
        <Footer />
        <Footerdown />
      </div>
    </>
  );
}
