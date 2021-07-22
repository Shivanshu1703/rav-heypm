import React from "react";
import Footer from "./find-mentor-without-login/Footer/Footer";
import NavSearch from "./find-mentor-without-login/Navbar/Navbar";
import Search from "./find-mentor-without-login/Search/Search";

function FindMentorWithoutLogin() {
  return (
    <div>
      <NavSearch />
      <Search />
      <Footer />
    </div>
  );
}

export default FindMentorWithoutLogin;
