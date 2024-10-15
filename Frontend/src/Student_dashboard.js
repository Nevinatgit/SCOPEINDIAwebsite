import React, { useEffect, useState } from 'react'
import Header2 from './Hearder2'
import Student_Pofile from './Student_Pofile'

import Footer1 from './footer'
import Student_Search from './Student_Search'
import { useAppContext } from './Context'
import { useNavigate } from 'react-router-dom'

export default function Student_dashboard() {
  const { state, dispatch } = useAppContext();
  let navigate = useNavigate()
  let token= state.token
  let getProfile=async ()=>{
      if(token){
          console.log("Token saved ")
          localStorage.setItem('authToken', token);
      }else{
        console.log("Token Taken")
         token=localStorage.getItem('authToken') || '';
      }
  }
 
   useEffect(()=>{
   
        getProfile()
   },[])
  
  return (
    <div className='w'>
        <Header2/>
        <div className='STop1'>
        <div className="d-flex align-items-start">
        <div style={{width:"200px"}} className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
          <button style={{width:"200px"}} className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Courses</button>
        </div>
  <div className="tab-content" id="v-pills-tabContent">
    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0"><Student_Pofile/></div>
    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0"><Student_Search/></div>
    
  </div>
</div>
           
        </div>
        <br/>
        <Footer1/>
    </div>
  )
}
