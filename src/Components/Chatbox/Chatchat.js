import React, { useState, useEffect, useRef } from "react";
// import { db, auth } from "./firebase1";
import { db, auth } from "../../firebase";
import SendMessage from "./SendMessage";
import SignOut from "./SignOut";
import Nav from "../profile/nav";
import { flexbox } from "@material-ui/system";
import Chatleftcard from "./Chatleftcard";
import { Chatboxdata } from "./Chatboxdata";

function Chatboxdatacard(val) {
  return <Chatleftcard name={val.name} email={val.email} image={val.image} />;
}

function Chatchat() {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);
  // const [user] = useAuthState(auth);
  const { uid } = auth.currentUser;
  useEffect(() => {
    db.collection("messages")
      // .where("uid", "in", [uid, "Gqkxol6E5cX9UTlSakw0vyVbdDz1"])
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

      <div
        className="midchatboxbox"
        style={{
          background: `url('${process.env.PUBLIC_URL}/Chatbox.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "70% 35%",
        }}
      >
        <div className="midchatboxboxleft">
          <p>Start New Chat</p>
          <div>{Chatboxdata.map(Chatboxdatacard)}</div>
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
