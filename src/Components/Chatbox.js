import React from "react";
import "./Chatbox/Appm.css";
import SignInChat from "./Chatbox/SignIn";
import Chatchatbox from "./Chatbox/Chatchat";
// import { auth } from "./Chatbox/firebase1";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignOutchat from "./Chatbox/SignOut";

function Chatbox() {
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="App">
        {/* <SignOutchat /> */}
        <section>{user ? <Chatchatbox /> : <SignInChat />}</section>
      </div>
    </>
  );
}

export default Chatbox;
