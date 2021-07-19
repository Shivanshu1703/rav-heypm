import React  from 'react'
import "./menteenav.css"

export default function Menteenav() {
    return (
        <div>
             <div className="header">
               <img src={process.env.PUBLIC_URL+"/Polygon.png"} className="poly1" />
               <span className="ravimg">Rav</span>
           
               <nav className="home">
                 <a href="#">HOME</a> 
               </nav>
             <div className="grid">
                <button className="profilebutton"> grid </button>
             </div>
          </div>
          <hr className="line"/>
        </div>
    )
}
