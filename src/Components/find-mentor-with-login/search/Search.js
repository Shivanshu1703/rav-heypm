import React from "react";
import { useState } from "react";
import "./search.css";
import { peoplee } from "./peoplee";

function Search() {
  const [people, setPeople] = useState(peoplee);

  const peopleSearched = (e) => {
    console.log(e.target.value);
    var newPeople = peoplee.filter((value) =>
      value.skill.toLowerCase().includes(e.target.value)
    );
    console.log(newPeople);
    setPeople(newPeople);
  };

  return (
    <>
      <div className="searchfind">
        <div className="findfind">
          <span>Find Mentor's</span>
        </div>
        find
        <div className="inputfind">
          <input
            class="input-tfind"
            onChange={(e) => peopleSearched(e)}
            type="text"
            placeholder="Design"
          />
        </div>
        <div>
          <button className="buttonfind">Filter by expertise</button>
        </div>
      </div>
      <div className="people-boxfind">
        {people.map((value, i) => {
          return (
            <div className="peoplefind" key={i}>
              <img src={value.imageUrl} alt="" />
              <div className="detailsfind">
                <h5>{value.name}</h5>
                <h5>{value.location}</h5>
                <span>{value.skill}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Search;
