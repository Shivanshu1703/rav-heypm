import React from "react";
import Faq from "react-faq-component";
import Footer from "../profile/footer";
import Footerdown from "../profile/footerdown";
import "./Landingpage.css";
import { useHistory } from "react-router-dom";
const data = {
  rows: [
    {
      title: "1. How is rav different from other platforms on the online?",
      content: "Rav heps to connect mentees with the right mentors based on their experience,domain and industry. It also helps resolve queries in the least possible time. ",
    },
    {
      title:
        "2.  Are there any memborship fees/ subsciption charges for joining?",
      content:
        "All the services in the platform are available for free of cost.",
    },
    {
      title: "3.  How introductions happen in Rav?",
      content:
        "The mentee can choose to connect with the right mentor by filling a small questionaire suggesting their interest.",
    },
    {
      title: "4.  Which members which i will get introduced to?",
      content:
        "All the best industry leaders who are experts in their domains."},
    {
      title: "5.  What kind of business goals does the Rav helps me with?",
      content:
        "You can get the best guidances from the mentors for highly specific strategic and tactical advices."},
  ],
};
function Landingpage() {
  const history=useHistory()
  return (
    
    <div>
      <div id="Landing_page_nav">
        <div id="Images">
          <img src={process.env.PUBLIC_URL + "/Polygon14.jpg"} />
          <img src={process.env.PUBLIC_URL + "/Rav.jpg"} />
        </div>
        <div id="Nav_text">Find Mentor</div>
        <div id="Landing_page_login">
          <button id="LandLogin" onClick={()=> history.push("/login")}>Login</button>
          <button id="LandSignup" onClick={()=> history.push("/signup")}>Signup</button>
        </div>
      </div>
      <div id="Landing_mid1">
        <div id="mid_box_alignment">
          <div id="mid1_box1">
            Find, Book and Meet Mentors around the world.
          </div>
          <div id="mid1_box2">
            Get guidance from the best, form our global community.
          </div>
          <button id="mid1_button" onClick={()=> history.push("/findwithoutlogin")}>Connect to mentor</button>
        </div>
        <div id="Mid_image">
          <img
            id="mid1_image"
            src={process.env.PUBLIC_URL + "/Mid_image.png"}
          />
        </div>
      </div>
      <div id="Landing_mid2">
        <div id="Mid2_heading1">
          <h2> How it works?</h2>
        </div>
        <div id="Mid2_heading2">
          Rav is a community which helps you to clear your questions.
          <br />
          With our mentors, who are experts in their fields.
        </div>
        <div id="Mid2_pictures">
          <img
            className="MidImage"
            src={process.env.PUBLIC_URL + "/mid2_image1.png"}
          />
          <img
            className="MidImage"
            src={process.env.PUBLIC_URL + "/mid2_image2.png"}
          />
          <img
            className="MidImage"
            src={process.env.PUBLIC_URL + "/mid2_image3.png"}
          />
          <img
            className="MidImage"
            src={process.env.PUBLIC_URL + "/mid2_image4.png"}
          />
        </div>
      </div>
      <div id="Landing_mid3">
        <div id="Mid3_heading1">What is in it for u?</div>
        <div id="Mid3_heading2">
          Rav provides the unique and trustworthy mentors so you don’t need to
          worry about the ideas being stolen or replicated
        </div>
        <div id="Mid3_pictures">
          <img
            className="MidImage"
            src={process.env.PUBLIC_URL + "/mid3_image1.png"}
          />
          <img
            className="MidImage"
            src={process.env.PUBLIC_URL + "/mid3_image2.png"}
          />
          <img
            className="MidImage"
            src={process.env.PUBLIC_URL + "/mid3_image3.png"}
          />
          <img
            className="MidImage"
            src={process.env.PUBLIC_URL + "/mid3_image4.png"}
          />
        </div>
      </div>
      <div id="FAQ">
        <div id="FAQ_heading1">FAQ</div>
        <div id="FAQ_heading2">
          Find out how Rav helps u connect with the community
        </div>
        <div>
          <Faq data={data} />
        </div>
      </div>
      <Footer />
      <Footerdown />
    </div>
  );
}
export default Landingpage;
