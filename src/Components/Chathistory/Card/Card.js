import React, { useState } from "react";
import "./Card.css";

function Card(props) {
  //   const [name, setName] = useState("Shivanshu Jaiswal");
  //   const [title, setTitle] = useState("Pre-seed angel investor");
  //   const [history, setHistory] = useState(
  //     "Hey guys, love what you’re doing and I’m convinced that together we’ll achieve amazing things"
  //   );
  //   const [lastdate, setLastdate] = useState("02-12-2020");
  // console.log(props);
  return (
    <div className="Cards">
      <div className="Card">
        <div className="Upper">
          <div className="Leftupper">
            <div className="Image">
              <img src={props.image} alt="" />
            </div>
          </div>
          <div className="Rightupper">
            <div className="Name">{props.name}</div>
            <div className="Title">{props.title}</div>
            <div className="History">{props.history}</div>
            <div className="Lastdate">Last chat date {props.lastdate}</div>
          </div>
        </div>
        <div className="Lower">
          <div className="Button">
            <button className="Button1">Resume Chat</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
// import Jassir from "./Jassir.png";
// import { Carddata } from "./Carddata";
// const Card = (props) => {
//   const { name, title, history, image, lastdate } = props;
//   return (
//     <div className="Card">
//       <div className="Upper">
//         <div className="Leftupper">
//           <div className="Image">
//             <img src={image} alt="" />
//           </div>
//         </div>
//         <div className="Rightupper">
//           <div className="Name">{name}</div>
//           <div className="Title">{title}</div>
//           <div className="History">{history}</div>
//           <div className="Lastdate">Last chat date {lastdate}</div>
//         </div>
//       </div>
//       <div className="Lower">
//         <div className="Button">
//           <button className="Button1">Resume Chat</button>
//         </div>
//       </div>
//     </div>
//   );
// };
