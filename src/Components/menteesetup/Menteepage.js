import React,{useState,useEffect} from 'react'
import Menteenav from './menteenav'
import Menteefooter from './menteefooter'
import Body from './body'
import {auth}  from  "../../firebase"


export default function Menteepage() {

  const [user,setUser] =useState(null)

  useEffect(() => {
     auth.onAuthStateChanged( user => {
       if(user) setUser(user)
       else setUser(null)
     })
  }, []) 

    return (
      <>  
        <div
        className="menteepage"
        style={{
          background: `url('${process.env.PUBLIC_URL}/Vector.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100% 63%",
        }}>
        <Menteenav/>
        <Body user={user}/>
        <Menteefooter/>
        </div>
      </>  
    )

}
