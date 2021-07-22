import React, { useState } from "react";
import "./Search.css";
import { peoplee } from "./peoplee";
import { UseSearchUtility } from "./Utils";
function Search() {
  const [people, setPeople] = useState(peoplee);
  const [searchText, setSearchText] = useState({
    name: "",
    location: "",
    expertise: "",
  });
  const [Names, setNames] = useState([]);
  const [Locations, setLocations] = useState([]);
  const [Expertises, setExpertise] = useState([]);

  const peopleNames = (e) => {
    const targetValue = e.target.value.toLowerCase();
    setSearchText({ ...searchText, name: targetValue });
    const newNames = peoplee.filter((value) => {
      if (value.name.toLowerCase().includes(targetValue)) return value.name;
    });
    setNames(Array.from(new Set(newNames)));

    console.log(targetValue);
  };
  const peopleLocations = (e) => {
    const targetValue = e.target.value;
    setSearchText({ ...searchText, location: targetValue });
    const newLocations = peoplee.filter((value) => {
      if (value.location.toLowerCase().includes(targetValue))
        return value.location;
    });
    setLocations(Array.from(new Set(newLocations)));
    console.log(targetValue);
  };
  const peopleExpertise = (e) => {
    const targetValue = e.target.value;
    setSearchText({ ...searchText, expertise: targetValue });
    const newExpertises = peoplee.filter((value) => {
      if (value.expertise.toLowerCase().includes(targetValue))
        return value.expertise;
    });
    setExpertise(Array.from(new Set(newExpertises)));
    console.log(targetValue);
  };

  const setValue = (e) => {
    // console.log(e.target.dataset)

    document.getElementById(e.target.dataset.id).value = e.target.innerHTML;
    if (e.target.dataset.id === "name") {
      setSearchText({ ...searchText, name: e.target.innerHTML });
      setNames([]);
    }
    if (e.target.dataset.id === "location") {
      setSearchText({ ...searchText, location: e.target.innerHTML });

      setLocations([]);
    }
    if (e.target.dataset.id === "expertise") {
      setSearchText({ ...searchText, expertise: e.target.innerHTML });

      setExpertise([]);
    }
  };

  const search = (e) => {
    const arr = [
      searchText.name.toLowerCase(),
      searchText.location.toLowerCase(),
      searchText.expertise.toLowerCase(),
    ];
    setPeople(UseSearchUtility(arr, peoplee));
  };

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
            {Names.length ? (
              <div className="searchedwologin">
                {Names.map((value, i) => (
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
            {Locations.length ? (
              <div className="searchedwologin">
                {Locations.map((value, i) => (
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
            {Expertises.length ? (
              <div className="searchedwologin">
                {Expertises.map((value, i) => (
                  <div key={i} data-id="expertise" onClick={(e) => setValue(e)}>
                    {value.expertise}
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
        {people.length ? (
          people.map((value, i) => {
            return (
              <div className="peoplewologin" key={i}>
                <img src={value.image} alt="" />
                <div className="detailswologin">
                  <h5>{value.name}</h5>
                  <span>
                    <a href="">more &gt;</a>
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
