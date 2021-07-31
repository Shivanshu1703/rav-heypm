import React, {useState}from 'react'
import "./body.css"
import {db,auth,firebase} from "../../firebase"
import { useHistory } from 'react-router'

export default function Body() {

  const [skill,setSkill]=useState("")
  const [currentcompany,setCurrentcompany]=useState("")
  const [designation,setDesignation]=useState("")
  const [domain,setDomain]=useState("")
  const [linkurl,setLinkurl]=useState("")
  const [textabout, setTextabout]=useState("")
  const [industry,setIndustry] =useState("")
  const [name ,setName]=useState("")
  const [email,setEmail]=useState("")
  const history=useHistory()
  const [file,setFile]=useState(null) 
  const [imageUrl ,setImageUrl] =useState(null)


  const user=auth.currentUser
  if(user){
    db.collection("users").doc(user.uid).get()
    .then(doc => {
       setName(doc.data().name)
       setEmail(doc.data().email)
      console.log(name,email)
    })
  }


  //upload and download image from firestorage
  const handleSave=async ()=>{
    let storageRef= firebase.storage().ref()
    let fileRef=storageRef.child(file.name)
    await  fileRef.put(file)  
    setImageUrl(await fileRef.getDownloadURL()) 
    console.log(imageUrl) 
  } 


  const isValidLinkedinUrl = (url) => {
    return /(https?:\/\/(www.)|(www.))?linkedin.com\/(mwlite\/|m\/)?in\/[a-zA-Z0-9_.-]+\/?/.test(url);
  };

  const handler =async()=>{
    if(industry === "")
    return alert("industry is compulsory") 
   if(skill === "")
    return alert("skill is necessary")
   if(currentcompany === "")
    return alert("company is necessary") 
   if(designation === "")
    return alert("designation is necessary") 
   if(domain === "")
    return alert("domain is necessary")     
   if(linkurl === "")
    return alert( "linkedin url is compulsory") 
   const result=await isValidLinkedinUrl(linkurl) 
    if(!result)
      return alert( "linkedin url not is compulsory") 
   if(textabout === "")
    return alert("text cann't be empty")     
 
    const rs= await handleSave()


    const data={
      name            :  name,
      email           :  email,
      industry        :  industry,
      skill           :  skill,
      currentcompany  :  currentcompany,
      designation     :  designation, 
      domain          :  domain, 
      linkurl         :  linkurl,
      textabout       :  textabout, 
      role            : "mentee",
      uid             :  user.uid ,
      imageUrl        : imageUrl
   }
    db.collection("users").doc(user.uid).set(data)
    history.push("/profilepage")
 }


  return (

    <>
    <div className="boxmentee">
      <container className="containermentee">
        <div className="row1mentee">
          <div className="headingmentee">
            <p className="textmentee">
              Hey <span className="jeanmentee">{name},</span> let us get you
              ready!
            </p>
          </div>
        </div>

        <div className="row2mentee">
          <div className="inputboxmentee">
            <div className="uploadphotomentee">
              <label className="labelmentee">Industries *</label>
              <input
                className="inputfieldmentee"
                type="text"
                placeholder="Ex - FMCG, manufacturing, Oil & Gas..... "
                 onChange={(e)=>setIndustry(e.target.value)}
              />
            </div>

            <div className="qualificationmentee">
              <label className="labelmentee">Skill Set *</label>
              <input
                className="inputfieldmentee"
                type="text"
                placeholder="Leader, Collaborative..."
                onChange={(e) => setSkill(e.target.value)}
              />
            </div>

            <div className="companymentee">
              <label className="labelmentee"> Company *</label>
              <input
                className="inputfieldmentee"
                type="text"
                placeholder="Ex: Google"
                onChange={(e) => setCurrentcompany(e.target.value)}
              />
            </div>

            <div className="designationmentee">
              <label className="labelmentee">Designation *</label>
              <input
                className="inputfieldmentee"
                type="text"
                placeholder="Ex: Product Manager"
                onChange={(e) => setDesignation(e.target.value)}
              />
            </div>

            <div className="pastcompmentee">
              <label className="labelmentee">Domain *</label>
              <input
                className="inputfieldmentee"
                type="text"
                placeholder="Ex: Sales, marketing, product, operatiosn "
                onChange={(e) => setDomain(e.target.value)}
              />
            </div>

            <div className="photomentee">
              <label className="labelmentee">Upload Photo </label>
              <input type="file" onChange={(e)=>{setFile(e.target.files[0])}  } 
              placeholder="hiii"
              className="inputfieldmentee"
              accept="images/*"
             />
            </div>

            <div className="linkurlmentee">
              <label className="labelmentee">Linkedin Profile Url *</label>
              <input
                className="inputfieldmentee"
                type="url"
                placeholder="Paste your profile url here"
                onChange={(e) => setLinkurl(e.target.value)}
              />
            </div>

            <div className="aboutmentee">
              <div
                className="aboutmenteelabel"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <label className="labelmentee">About *</label>
              </div>
              <textarea
                className="textareamentee"
                row="5"
                column="10"
                placeholder="Tell us a bit about yourself!"
                onChange={(e)=> setTextabout(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="row3mentee">
          <div className="creatementee">
            <button id="button1mentee" onClick={handler}>
              Create{" "}
            </button>
          </div>

          <div className="cancelmentee">
            <button id="button2mentee" onClick={()=> history.push("/home")} >Cancel </button>
          </div>
        </div>
      </container>
    </div>
  </>
);
 }   
  
