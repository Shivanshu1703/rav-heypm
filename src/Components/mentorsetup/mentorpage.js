import React,{useState,useEffect}  from 'react'
import Menteenav from '../menteesetup/menteenav'
import Menteefooter from '../menteesetup/menteefooter'
import Body1 from './body1'
import {auth}  from  "../../firebase"


export default function Mentorpage() {

     
  const [user,setUser] =useState(null)

  useEffect(() => {
     auth.onAuthStateChanged( user => {
       if(user) setUser(user)
       else setUser(null)
     })
  }, []) 


    return (
        <>
        <div className="menteepage">
        <Menteenav/>
        <Body1 user={user}/>
        <Menteefooter/>
        </div>   
        </>
    )
}
