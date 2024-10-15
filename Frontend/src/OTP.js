import React, { useState } from 'react'
import './styles/LStyles.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from './Context';
export default function OTP() {
    let navigate = useNavigate();
    let [OTP,setOTP]= useState("")
    let [email,setEmail]= useState("")
    let [display,setDisplay]= useState(false)
    const { state,dispatch } = useAppContext(); 
let API =async ()=>{
    console.log(OTP)
    if(OTP.length!=0){
        
        let auth = await axios.post("http://localhost:8000/api/login/verifyOTP",{
            token:state.token,        
            OTP:OTP
        })
        console.log(auth.data)
        if(auth.data.status==true){
            navigate("/changepassword")
        }
    }
    else{
        console.log("sEmail"+email)
        
        let result= await axios.post("http://localhost:8000/api/login/OTP",{
              email:email
        })
        console.log("Status"+result.data.status)
        if(result.data.status==false){
            alert("Email isnt registered with us")
        }else{setDisplay(true)
        dispatch({ type: 'SET_TOKEN', token: result.data.token });
    }}
}
  return (
    <div className='LTop1'>
        {!display && (<h1>Enter the email</h1>)}
        {display && (<h1>An OTP has been sent to the email registered with us, Enter it below</h1>)}
        {!display && (<input type="text" placeholder='email' className='col-3' onChange={(e)=>setEmail(e.target.value)}/>)}
        {display && (<input type="text" placeholder="OTP" className='col-3' onChange={(e)=>setOTP(e.target.value)}/>)}
        <button className="btn btn-primary col-3 " onClick={()=>API()}>Submit</button>
    </div>
  )
}
