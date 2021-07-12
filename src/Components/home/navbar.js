import React  from 'react'

export default function Navbar() {
    return (
    <>
     <div className="nav-container">
        <div className="wrapper">
            <nav>
                <img src="images/Rav.svg" alt=""/>
                <ul className="nav-items">
                    <list>
                        <a href="#" className="meet">Meet Our Mentors</a>
                    </list>
                    <list>
                        <a href="#" className="contact">Contact Us</a>
                    </list>
                    <list>
                        <a href="#" className="login">Login</a>
                    </list>
                    <list class="signup">
                        <a href="#" className="signup-button">Signup</a>
                    </list>
                </ul>
            </nav>
        </div>
    </div>

        </>
    )
}
