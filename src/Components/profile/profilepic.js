import React, { setState } from "react";
import Bio from "./bio";
import Reviews from "./reviews";
import img1 from "./images/profilepic.png";
import "./profilepic.css";
import {auth,db} from "../../firebase"
class Profilepic extends React.Component {
  constructor() {
    super();
    this.state = {
      showBio: true,
      name   : "",
      desination : ""
    };
    // this.user= this.auth.currentUser.bind(this)
    this.toggleShowBio = this.toggleShowBio.bind(this);
  }
   
  
  // if(user){
  //   db.collection("users").doc(this.user.uid).get()
  //   .then(doc => {
  //      if(doc.data().role === "mentor")
  //      this.setState({
  //        name : doc.data().name,
  //        desination:doc.data().recognition
  //       })
     
  //      console.log(this.name,this.desination)
  //   })
  // }

  toggleShowBio() {
    this.setState({ showBio: !this.state.showBio });
  }

   
  render() {
    return (
      <>
        <container className="container">
          <div className="row1">
            <div className="pic">
              <img src={img1} alt="prifilepic" /> <br />
              <h3>{this.state.name}</h3>
              <p>{this.state.recognition}</p>
            </div>
            <div className="col2">
              <button id="hi">Say Hi!</button>
            </div>
           </div>

          <div className="col1">
            <div className="centre1">
              <div>
                <button className="bio" onClick={this.toggleShowBio}>
                  Bio
                </button>
              </div>
              <div>
                <button className="view" onClick={this.toggleShowBio}>
                  Reviews
                </button>
              </div>
            </div>

            <div className="review">
              {this.state.showBio ? <Bio /> : <Reviews />}
            </div>
          </div>
        </container>
      </>
    );
  }
}

export default Profilepic;
