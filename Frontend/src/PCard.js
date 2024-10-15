import React from 'react'

export default function PCard(props) {
  return (
    <div className="card" style={{borderStyle:"solid",borderWidth:"5px",height:"300px"}}>
    <div style={{padding:"10px"}}>
      <div >
      <img className="card-img-top" style={{width:"200px",height:"200px"}} src={props.logo}/></div>
      <div className='card-body'>
          <h5 className='card-title'>{props.Name}</h5>
          <p style={{fontSize:"15px"}} className='card-text'>{props.post}</p>
      </div>
      </div>
</div>
  )
}
