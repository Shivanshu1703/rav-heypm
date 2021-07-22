import React, { useState, useEffect, useRef } from "react";
// import { db, auth } from "./firebase1";
import { db, auth } from "../../firebase";
import SendMessage from "./SendMessage";
import SignOut from "./SignOut";
import Nav from "../profile/nav";
import { flexbox } from "@material-ui/system";

function Chatchat() {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);
  // const [user] = useAuthState(auth);
  const { uid } = auth.currentUser;
  useEffect(() => {
    db.collection("messages")
      .where("uid", "in", [uid, "Gqkxol6E5cX9UTlSakw0vyVbdDz1"])
      .orderBy("createdAt")
      // .limit(100)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div className="chatboxbox">
      {/* <SignOut /> */}
      <div>
        <Nav />
      </div>

      <div className="midchatboxbox">
        <div className="midchatboxboxleft">
          <p>Start New Chat</p>
        </div>
        <div className="msgschatbox">
          {messages.map(({ id, text, photoURL, uid }) => (
            <div>
              <div
                key={id}
                className={`msgchatbox ${
                  uid === auth.currentUser.uid
                    ? "sentchatbox"
                    : "receivedchatbox"
                }`}
              >
                <img src={photoURL} alt="" />
                <p>{text}</p>
              </div>
            </div>
          ))}
          <SendMessage scroll={scroll} />
          <div ref={scroll}></div>
        </div>
      </div>

      {/* <SendMessage scroll={scroll} />
      <div ref={scroll}></div> */}
    </div>
  );
}

export default Chatchat;
