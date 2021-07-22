import React from "react";
import "./Bottombox.css";
import { Link, useHistory } from "react-router-dom";
import { auth, provider } from "../../../firebase";

function Bottombox() {
  const history = useHistory();

  const signUp = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        if (result) history.push("/profilepage");
        else alert(result.user);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      <div className="b1">
        <div>
          <button
            className="button"
            style={{ cursor: "pointer" }}
            onClick={signUp}
          >
            <span className="l1">Sign me up as Mentee</span>
          </button>
        </div>
        <div>
          <button
            className="button1"
            style={{ cursor: "pointer" }}
            onClick={signUp}
          >
            <span className="l2">Sign me up as Mentor</span>
          </button>
        </div>
      </div>
      <div className="b2">
        <p className="heading1">
          I am seeking advice and guidance from the mentors
        </p>
        <p className="heading1">
          I would be able to offer my guidance to those who need it
        </p>
      </div>
      <div className="b3">
        <p className="secondLast">Terms of Service!</p>
        <p className="lastLine">
          Already Have Account? <Link to="../../Login"> Login </Link>
        </p>
      </div>
    </div>
  );
}

export default Bottombox;
