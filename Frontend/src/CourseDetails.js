import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer1 from './footer'
import './styles/CDStyle.css'
import { useAppContext } from './Context';
import axios from 'axios';
import './styles/SStyles.css'
import { useNavigate, useParams } from 'react-router-dom';

export default function CourseDetails(props) {
    const { state,dispatch } = useAppContext(); 
    let [stateP,setStateP]= useState({})
    let {name} =useParams()
    let [rows,setrows]= useState([])
    let navigate = useNavigate()
   
let Enroll= async ()=>{
        let token=localStorage.getItem('authToken') || '';
        const response = await axios.post("http://localhost:8000/api/Student/getProfile", {
            token: token,
        });
     
      if (response.data.data) {
        if (response.data.data.courses && response.data.data.courses.includes(name)) {
            alert("Course Already Selected")
            navigate("/Student_dashboard")
        }else{
            let result= await axios.post("http://localhost:8000/api/Student/addCourse",{
                course:name,
                token:token
            })
            console.log(result)
           
            navigate("/Student_dashboard")
        }
      }
   
}
let getDetails=async ()=>{
    console.log("Course Details"+name)
    
    let values = await axios.post("http://localhost:8000/api/Student/getDetails",{
        name:name
    })
    console.log(values.data.result)
    setStateP(values.data.result)
    console.log("Sdf")
}
useEffect(()=>{
    getDetails()
},[])
useEffect(()=>{
    
    if(Object.keys(stateP).length>0){
    let row1=[]
    for (let i = 0; i < stateP.Content.length; i += 3) {
        row1.push(stateP.Content.slice(i, i + 3));
      }
     
      setrows(row1)
    }
},[stateP])
  return (
    <div>
        <Header/>
        <div className='CDTop1'>
        <h1 style={{color:"darkgoldenrod"}}>{stateP.Name}</h1>
        <p>{stateP.about}</p>
        <button className='btn btn-danger col-8' onClick={()=>Enroll()}>Enroll now</button>
        </div>
        <div className='CDTop2'>
            <div className='margin'>
                <div>
                    <div className='Tag'>
                    <p >Course Duration</p></div>
                    <div>
                        <p>{stateP.Duration}</p>
                    </div>
                </div>
                <div><div className='Tag'>
                    <p>Course Fee</p></div>
                    <div>
                        <p>{stateP.fee}</p>
                    </div>
                </div>
                <div><div className='Tag'>
                    <p>Course Slots</p></div>
                    <div>
                       {
                       // stateP.Slots.map((slot)=>{
                      //      <p>{slot}</p>
                       // })
                       }
                    </div>
                </div>
            </div>
            <div id="B"></div>
            <div className='contentz'>
                <div>
                <div>
                <div className='Tag'>
                    <h1>About Course</h1></div>
                    <p>{stateP.About}</p>
                </div>
                <hr/>
                <div><div className='Tag'>
                    <h1>Course Content</h1></div>
                    <br/>
                    <table className="table ">
                    <tbody>
                        { 
                        rows.map((row)=>{
                            
                            
                             return(<tr>
                            {
                            row.map((item)=>{
                                {console.log("sdfsdf",item)}
                            return <td>{item}</td>
                        }) }</tr> )
                        }
                        )
                        }

                    </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
        

        <Footer1/>
    </div>
  )
}
