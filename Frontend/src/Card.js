import React from 'react'
import "./styles/Style.css"
import { useNavigate } from 'react-router-dom'
import { useAppContext } from './Context';
import axios from 'axios';
export default function Card(props) {
  const { state,dispatch } = useAppContext(); 
  let navigate = useNavigate()
  let Enroll=async ()=>{
    navigate('/courseDetails/'+props.Name)
  }
  let Remove= async ()=>{
    const token = state.token || localStorage.getItem('authToken') || '';
   await axios.post("http://localhost:8000/api/Student/removeCourse",{
      name:props.Name,
      token:token
  })
  window.location.reload();
  }
  return (
    <div  >
        <div >
          <div  >
          <img  style={{width:"210px",height:"225px",margin:"20px"}} src={props.logo}/>
          </div>
          <hr/>
          <div id="CBody" >
            <div>
              <h5>{props.Name}</h5></div>
              <br/>
              <ul>
               {props.duration &&( <li><p>Course duration: {props.duration.split('+')[0]}</p></li>)}
               <li> <p>Course Fee: {props.Fee}</p></li>
               <li><p>Course Type: {props.Type}</p></li>
              </ul>
              {props.Sbutton &&  <button className='btn btn-danger col-12' onClick={()=>{   navigate('/courseDetails/'+props.Name)}}>See more</button>}
          </div>

          </div>
          {props.rbutton && <button  className='btn btn-danger col-12' onClick={()=>Enroll()}>Enroll</button>}
          {props.rebutton && <button  className='btn btn-danger col-12' onClick={()=>Remove()}>Remove</button>}
    </div>
  )//style={{borderStyle:"solid",borderWidth:"10px",borderColor:"green"}}
}
