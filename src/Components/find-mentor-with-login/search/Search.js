import React from 'react'
import { useState } from 'react'
import './search.css'
import { peoplee } from './peoplee'
function Search() {
  const [people, setPeople] = useState(peoplee)
  const peopleSearched = (e) => {
    console.log(e.target.value)
    var newPeople = peoplee.filter((value) =>
      value.expertise.toLowerCase().includes(e.target.value)
    )
    console.log(newPeople)
    setPeople(newPeople)
  }
  return (
    <>
      <div className='search'>
        <div className='find'>
          <span>Find Mentor's</span>
        </div>
        <div className='input'>
          <input
            class='input-t'
            onChange={(e) => peopleSearched(e)}
            type='text'
            placeholder='Design'
          />
        </div>
        <div>
          <button className='button'>Filter by expertise</button>
        </div>
      </div>
      <div className='people-box'>
        {people.map((value, i) => {
          return (
            <div className='people' key={i}>
              <img src={value.image} alt='' />
              <div className='details'>
                <h5>{value.name}</h5>
                <h5>{value.location}</h5>
                <span>{value.expertise}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Search
