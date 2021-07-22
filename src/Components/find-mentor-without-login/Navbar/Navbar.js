import React from 'react'
import './Navbar.css'
import logo from './images/logo.png'
function Nav() {
  return (
    <div className='nav'>
      <div className='logo'>
        <img src={logo} alt='' />
      </div>
      <div className='right-menu'>
        <h6>Meet our mentors</h6>
        <button className='login'>Login</button>

        <button className='signup'>Signup</button>
      </div>
    </div>
  )
}

export default Nav
