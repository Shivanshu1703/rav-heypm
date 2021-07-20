import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import closeCircleOutline from "@iconify-icons/mdi/close-circle";
import triangleDown from "@iconify-icons/zmdi/triangle-down";
import "./Navbar.css";
import { auth } from "../../../firebase";
import { useHistory } from "react-router-dom";

function Navbar({ user }) {
  const history = useHistory();
  const logOut = () => {
    auth.signOut();
    history.push("/login");
  };

  return (
    <div className="Nav">
      <div>
        <Icon
          icon={triangleDown}
          width="41px"
          height="47px"
          className="polyimg"
        />

        <span className="ravimg">Rav</span>
      </div>
      <div>
        <div className="logout">
          {user ? (
            <button className="logoutbutton" onClick={logOut}>
              Log Out
            </button>
          ) : (
            <>
              <Icon icon={closeCircleOutline} className="vector" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
