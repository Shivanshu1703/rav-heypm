import React from "react";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { Route, Switch } from "react-router-dom";
import Profilepage from "./Components/profile/profilepage";
import Chat from "./Components/Chat";
import Schedule from "./Components/Schedule";
import Landingpage from "./Components/Landingpage/Landingpage";
import "./App.css";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profilepage" component={Profilepage} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/home" component={Landingpage} />
      </Switch>
    </>
  );
}

export default App;
