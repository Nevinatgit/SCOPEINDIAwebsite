import React from 'react';
import "./styles/Style.css"

export default function Cardz({ name = 'Default Name', logo = "",width="240px" ,height="160px"}) {
  return (
    <div className="card-container">
      <div style={{display:"flex",justifyContent:"center"}}>
      <img  style={{width:width,height:height,display:"flex",justifyContent:"center"}}
        src={logo}
        alt="Overlay"
       
      /></div>
     
      <hr/>
      <div style={{display:"flex",justifyContent:"center",padding:"5px",textAlign:"center"}}>
        <p style={{fontSize:"25px",fontWeight:"600"}}>{name}</p>
      </div>
    </div>
  );
}

