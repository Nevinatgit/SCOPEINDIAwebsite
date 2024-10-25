import './styles/Style.css'
import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
export default function Header2() {
  let navigate = useNavigate()
  let logout=()=>{
      alert("Logging Out")
      navigate('/')
  }
 
  return (<div>
    <div className='Top1' >
<div className='Top111' >
    <img width="150px" height="50px"src="https://scopeindia.org/images/scope-india-logo-home-page.png"/>
    <div style={{display:"flex"}}> 
    <button className="btn btn-link" style={{textDecoration:"none",color:"white"}} onClick={()=>{navigate("/changepassword")}}>Change Password</button>
    <button className="btn btn-link" style={{textDecoration:"none",color:"white"}} onClick={()=>{logout()}}>Logout</button>
    </div>
</div>
</div></div>
  )
}


