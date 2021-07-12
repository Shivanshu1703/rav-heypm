import React from 'react'

export default function Landingpage() {
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
                    <list className="signup">
                        <a href="#" className="signup-button">Signup</a>
                    </list>
                </ul>
            </nav>
        </div>
    </div>
    <div className="upper-body">
        <div className="upper-body-left">
            <h1>
                Find,Book and meet mentors Around the world!
            </h1>
            <p>
                Get guidance from the best , form our global community
            </p>
            <button className="btn-primary">
                Ask Questions
            </button>
        </div>
        <div className="upper-body-right">
            <img src="images/Croods Keeping in Touch.svg"/>
        </div>
    </div>
    <div className="middle-body">
        <div className="middle-body-left">

            <div style={{backgroundImage: 'url('./images/Rectangle 98.svg')'}}>

            </div>
        </div>

        <div className="middle-body-right">
            <h1>
                How it works?
            </h1>
            <p>
                Rav is a community which helps you to clear your questions. with our mentors, who are experts in their field
            </p>
        </div>
    </div>
    <div className="lower-body">
        <div className="lower-body-left">
            <h1>What is in it for u?</h1>
            <p>
                Rav provides unique and trustworthy mentors so you don't need to worry about the ideas being stolen or replicated
            </p>
        </div>
        <div className="lower-body-right">

        </div>
    </div>
    <div className="testimony">

    </div>
    <div className="faq">
        <h1>
            FAQ
        </h1>
        <p>
            Find out how Rav helps you connect with the community
        </p>
        <list>
            <ul className="faq-list-1" style={{backgroundImage: "url('./images/Rectangle\ 82.svg')"}}>
                <p>
                    How is Rav diffrent from other platforms online?
                </p>
            </ul>
            <ul className="faq-list-2" style={{backgroundImage: "url('./images/Rectangle\ 82.svg')"}}>
                <p>
                    Are there any membership fee / subscription charges for joining?
                </p>
            </ul>
            <ul className="faq-list-3" style={{backgroundImage:' url('./images/Rectangle\ 82.svg')'}}>
                <p>
                    How introduction happen in Rav?
                </p>
            </ul>
        </list>
    </div>
    <div className="footer" style={{backgroundImage: 'url('./images/Rectangle_78.svg')',height:'400px',width:'1440px'}}>
        <div className="footer-left">
            <img src="images/Rav.svg"/>
            <h2>Revolutionizing the connection with the mentors around the world...</h2>
        </div>
        <div className="footer-right">
            <p>Create an account within minutes and get your queries solved</p>
            <input placeholder="Enter email address"/>
            <button>Get started</button>
        </div>
    </div>
    <script src="main.js"></script>

        </>
    )
}
