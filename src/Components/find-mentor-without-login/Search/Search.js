import React, { useState, useEffect } from "react";
import "./Search.css";
import { auth, db } from "../../../firebase";
// import { peoplee } from "./peoplee";
import { UseSearchUtility } from "./Utils";
import Bio from "../../profile/bio";
import { peoplee } from "../../find-mentor-with-login/search/peoplee";

function Search() {
  const [peoplee, setPeoplee] = useState([]);
  const [imageid, setImageid] =useState(null)
  const [Name, setName] = useState([]);
  const [Location, setLocation] = useState([]);
  const [Skill, setSkill] = useState([]);
  const user = auth.currentUser;

  useEffect(() => {
    db.collection("users")
      .where("role", "==", "mentor")
      // .get()
      .onSnapshot((snapshot) => {
        setPeoplee(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);


  const people= peoplee;
  console.log(people);
  const [searchText, setSearchText] = useState({
    name: "",
    location: "",
    skill: "",
  });


  const peopleNames = (e) => {
    const targetValue = e.target.value.toLowerCase();
    setSearchText({ ...searchText, name: targetValue });
    const newNames = peoplee.filter((value) => {
      if (value.name.toLowerCase().includes(targetValue)) return value.name;
    });
    setName(Array.from(new Set(newNames)));

    console.log(targetValue);
  };

  const peopleLocations = (e) => {
    const targetValue = e.target.value;
    setSearchText({ ...searchText, location: targetValue });
    const newLocations = peoplee.filter((value) => {
      if (value.location.toLowerCase().includes(targetValue))
        return value.location;
    });
    setLocation(Array.from(new Set(newLocations)));
    console.log(targetValue);
  };

  const peopleExpertise = (e) => {
    const targetValue = e.target.value;
    setSearchText({ ...searchText, expertise: targetValue });
    const newExpertises = peoplee.filter((value) => {
      if (value.skill.toLowerCase().includes(targetValue))
        return value.skill;
    });
    setSkill(Array.from(new Set(newExpertises)));
    console.log(targetValue);
  };

  const setValue = (e) => {
    // console.log(e.target.dataset)

    document.getElementById(e.target.dataset.id).value = e.target.innerHTML;
    if (e.target.dataset.id === "name") {
      setSearchText({ ...searchText, name: e.target.innerHTML });
      setName([]);
    }
    if (e.target.dataset.id === "location") {
      setSearchText({ ...searchText, location: e.target.innerHTML });

      setLocation([]);
    }
    if (e.target.dataset.id === "skill") {
      setSearchText({ ...searchText, skill: e.target.innerHTML });

      setSkill([]);
    }
  };

  const search = (e) => {
    const arr = [
      searchText.name.toLowerCase(),
      searchText.location.toLowerCase(),
      searchText.skill.toLowerCase(),
    ];
    setPeoplee(UseSearchUtility(arr, peoplee));
    console.log(peoplee)
  };

  console.log(peoplee);
  console.log(peoplee.length);

  return (
    <div>
      <div className="find-mentorwologin">Find a mentor</div>
      <div className="searchwologin">
        <div className="inputswologin">
          <div className="search-elementwologin">
            <label htmlFor="">Search</label> <br />
            <input
              type="text"
              onChange={(e) => peopleNames(e)}
              name="name"
              placeholder="Type 'sara' or 'Product Design'"
              id="name"
            />
            {Name.length ? (
              <div className="searchedwologin">
                {Name.map((value, i) => (
                  <div key={i} data-id="name" onClick={(e) => setValue(e)}>
                    {value.name}
                  </div>
                ))}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="search-elementwologin">
            <label htmlFor="">Location</label>
            <br />
            <input
              type="text"
              name="location"
              onChange={(e) => peopleLocations(e)}
              placeholder="Select Location"
              id="location"
            />
            {Location.length ? (
              <div className="searchedwologin">
                {Location.map((value, i) => (
                  <div key={i} data-id="location" onClick={(e) => setValue(e)}>
                    {value.location}
                  </div>
                ))}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="search-elementwologin last-elewologin">
            <label htmlFor="">Expertise</label>
            <br />
            <input
              type="text"
              name="expertise"
              onChange={(e) => peopleExpertise(e)}
              placeholder="Select Expertise"
              id="expertise"
            />
            {Skill.length ? (
              <div className="searchedwologin">
                {Skill.map((value, i) => (
                  <div key={i} data-id="expertise" onClick={(e) => setValue(e)}>
                    {value.skill}
                  </div>
                ))}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <button>Filters</button>
        </div>
      </div>
      <div className="button1wologin">
        <button onClick={(e) => search()} className="button-searchwologin">
          Search
        </button>
      </div>
      <div className="top-mentorswologin">Top Mentors</div>
      <div className="people-boxwologin">
        {peoplee.length ? (
          peoplee.map((value, i) => {
            return (
              <div className="peoplewologin" key={i}>
                {/* <img src={process.env.PUBLIC_URL + "/Chatbox.png"} alt="" /> */}
                <img src={value.imageUrl} alt="" />
                <div className="detailswologin">
                  <h5>{value.name}</h5>
                  <span>
                    <a href="/profilepage" 
                    // onClick={setImageid(i)}
                    >more &gt;</a>
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No mentors Found</h1>
        )}
      </div>
    </div>
  );
}

export default Search;


