import React, {useState}from 'react'
import "./body.css"
import {db} from "../../firebase"

export default function Body() {
  const [latqual,setLatqual]=useState("")
  const [currentcompany,setCurrentcompany]=useState("")
  const [designation,setDesignation]=useState("")
  const [pastcompany,setPastcompany]=useState("")
  const [linkurl,setLinkurl]=useState("")
  // const [textabout, setTextabout]=usestate("")
  const [uploadphoto,setUploadphoto] =useState("")

  const handler =()=>{
    const data={
      uploadphoto     :  uploadphoto,
      latqual         :  latqual,
      currentcompany  :  currentcompany,
      designation     :  designation, 
      pastcompany     :  pastcompany, 
      linkurl         :  linkurl,
      // textabout       :  textabout,     
   }
    db.collection('mentee').add(data)
    console.log(data)
 }


    return (
        <>
        <div className="box">
          <container className="container" >
              <div className="row1"> 
                  
                     <div className="heading">
                     <p className="text"> Hey <span className="jean">Jean,</span> let us get you ready!</p>
                     </div> 
                     <div className="circe1">
                     <img className="ellipse1" src={process.env.PUBLIC_URL+"/Ellipse 27.png"} />
                     </div> 
                  
              </div >

              <div className="row2"> 
                   <div className="circle2">
                   <img  className="ellipse2" src={process.env.PUBLIC_URL+"/Ellipse 26.png"} />
                   </div> 
                   <div className="inputbox">

                    <div className="uploadphoto">
                      <label className="label">Upload Photo</label>
                        <input className="inputfield" type="file" placeholder="Choose a file to upload"
                        accept="image"
                        onChange={(e)=>setUploadphoto(e.target.vaue) }
                        />
                      </div>
                       
                       <div className="qualification">
                       <label className="label">Latest Qualifiaction</label>
                       <input className="inputfield" type="text" placeholder="Ex: MBA from IIMB"
                        onChange={(e)=>setLatqual(e.target.vaue) }
                        />
                       </div> 

                       <div className="company"> 
                       <label className="label">Current Company</label>
                       <input className="inputfield" type="text" placeholder="Ex: Google"
                        onChange={(e)=> setCurrentcompany(e.target.value)}/>
                       </div>
                        
                        <div className="designation">
                       <label className="label">Designation</label>
                       <input className="inputfield" type="text" placeholder="Ex: Product Manager"
                        onChange={(e)=>setDesignation(e.target.value) }/> 
                       </div>
                        
                        <div className="pastcomp">
                       <label className="label">Add past companies</label>
                       <input className="inputfield" type="text" placeholder="Ex: Ex-Flipkart, Ex-Myntra "
                        onChange={(e)=> setPastcompany(e.target.value)}/>
                       </div>   
                        
                       <div className="linkurl">
                       <label className="label">Linkedin Profile Url</label>
                       <input className="inputfield" type="text" placeholder="Paste your profile url here"
                        onChange={(e)=> setLinkurl(e.target.value)}/>
                       </div>

                       <div className="about">
                       <label className="label">About</label>
                       <textarea className="textarea" row="5" column="10"
                        // onChange={(e)=> setTextabout(e.target.value)}
                        >

                       </textarea>
                       </div>
                   </div>
                   <div className="image">
                   <img className="vector" src={process.env.PUBLIC_URL+"/Vector.png"} />
                   </div>
              </div>

              <div className="row3" > 
                <div className="create">
                <button id="button1" onClick={handler}>Create </button>  
                </div>
                 
                <div  className="cancel">
                <button id="button2">Cancel </button>  
                </div>  
              </div> 
              
          </container>
          </div>    
        </>
    )
}
