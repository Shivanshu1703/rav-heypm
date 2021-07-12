import React,{setState} from  'react'
import Bio from './bio'
import Reviews from './reviews'
import img1 from './images/profilepic.png'
import "./profilepic.css"
class Profilepic extends React.Component {


      constructor (){
         super()
       this.state={
         showBio : true 
       }
       this.toggleShowBio=this.toggleShowBio.bind(this)
     }

 toggleShowBio() {
    this.setState({showBio : !this.state.showBio })

 }
     
  render() { 
     return(
        <>
           <container className="container">

            <div className="row">
                <div className="pic">
                   <img src={img1} alt="prifilepic"/> <br/> 
                    <h3>JEAN GREY</h3>
                    <p>Director of Magic @MCU</p>
                </div>

                {/* <div className="logo1"> 
                   <img src={img2} alt="twitter"  className="twitter"/>
                   <img src={img3} alt="linkedin"  className="linkedin"/>
                </div> */}

            </div>

            <div className="col1">
               <div className="col2" > 
                 <button id="hi" >Say Hi!</button>
               </div>

               <div className="centre1">
                    {/* <div className="b1"> */}
                     <button className="bio"   onClick={this.toggleShowBio} >Bio</button>
                    {/* </div> */}
                     {/* <div className="b2"> */}
                     <button className="view"  onClick={this.toggleShowBio}>Reviews</button> 
                     {/* </div> */}
               </div> 

               <div className="review">{ this.state.showBio ? <Bio/> : <Reviews/>}</div>
            </div>

         </container>
      </>
     )
    }
 }


export default Profilepic;