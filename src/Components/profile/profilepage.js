import React  from 'react'
import "./profile.css"
import Nav from "./nav.js"
import Profilepic from "./profilepic"
import Footer from "./footer"
import Footerdown from './footerdown'

export default function Profilepage() {
//    const [review ,setReview] =useState(false)

    return (
        <>
         <Nav/>
         <Profilepic/>
         <Footer/>
         <Footerdown/> 
        </>
    )
}
