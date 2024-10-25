import React, { useState } from 'react'
import './styles/LStyles.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAppContext } from './Context';
export default function ChangePassword() {
    let [password,setPassword]= useState("")
    const { state,dispatch } = useAppContext();
    let navigate = useNavigate();
let API =async ()=>{
    console.log(state.token)
    await axios.post("http://localhost:8000/api/login/ChangePassword",{
        token:state.token,
        password:password
    })
    alert("password changed")
    navigate("/login")
}
  return (
    <div className='LTop1'>
        <h1>Enter the new password</h1>
        <input type="text" className='col-3' onChange={(e)=>setPassword(e.target.value)}/>
        <button className="btn btn-primary col-3 " onClick={()=>API()}>Submit</button>
    </div>
  )
}
