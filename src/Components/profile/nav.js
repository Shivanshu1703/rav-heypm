import React from 'react'
import img from './images/Polygon.png'


export default function Nav (){
    return (
        <>
            <div className="header">
               <img src={img} className="poly1"/>
               <span className="ravimg">Rav</span>
           
               <nav className="home">
                 <a href="#">HOME</a> 
               </nav>
             <div className="grid">
                <button className="profilebutton"> grid </button>
             </div>
          </div>
          
          <div className="border" ></div> 
        </>
    );
}
