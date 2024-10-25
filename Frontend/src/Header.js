import './styles/Style.css'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Header() {
  let login =localStorage.getItem('login') || '';
  return (
    <div className='Top1' >
<div className='Top11' >
    <img width="150px" height="50px"src="https://scopeindia.org/images/scope-india-logo-home-page.png"/>
    <div > 
      <Link to='/'>Home</Link>
      <Link to="/Placement">Placement</Link>
      <Link to="/Contact">Contact Us</Link>
      <Link to="/Courses">Courses</Link>
      <Link to="/About">About Us</Link>
      <Link to="/Login">Login</Link>

    </div>
</div>
</div>
  )
}

