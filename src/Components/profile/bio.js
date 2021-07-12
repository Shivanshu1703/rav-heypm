import React  from 'react'
import './bio.css'

export default function Bio() {
    return (
        <>
               <div className="centre2">
                    <h className="heading">About</h>
                    <br></br>
                    <textarea className="line" name="aboutreview" rows="4" cols="50">
               
                    </textarea> <br></br>
                    <textarea className="line" name="aboutreview" rows="4" cols="50">
               
                    </textarea> <br></br>
                    <hr className="line" />
                    <br></br>

                    <h className="heading">Industry</h>
                    <p>Information Technology</p>
                    <br></br>
                    <hr className="line" />
                    <br></br>

                    <h className="heading">Domain</h>
                    <p id="design">Design</p>
                    <br></br>
                    <button className="designbutton">Ux Design</button>
                    <button className="designbutton">Product Design</button>
                    <br></br>

                    <hr className="line"/>
                    <br></br>

                    <h className="heading">Tools</h>
                    <br></br>
                    <p>Figma</p> <br></br>
                    <p>Useberry</p>
                    <br></br>
               </div>  
              
      
     </>
    )
}
