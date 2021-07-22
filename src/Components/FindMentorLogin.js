import React from "react";
import Footer from "./find-mentor-without-login/Footer/Footer";
import NavSearch from "./profile/nav";
import Search from "./find-mentor-without-login/Search/Search";

function FindMentorLogin() {
  return (
    <div>
      <NavSearch />
      <Search />
      <Footer />
    </div>
  );
}

export default FindMentorLogin;
