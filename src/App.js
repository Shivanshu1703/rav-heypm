import React from "react";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { Route, Switch } from "react-router-dom";
import Profilepage from "./Components/profile/profilepage";


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profilepage" component={Profilepage}/>
      </Switch>
    </>
  );
}

export default App;
