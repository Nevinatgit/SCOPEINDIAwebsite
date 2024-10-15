import React, { useEffect, useState } from 'react'
import "./styles/C1Styles.css"
import Header from './Header'
import Footer1 from './footer'
import Card from './Card'
import axios from 'axios'

export default function Course() {
    let [details,setdetails]=useState([])
    let getDetails=async ()=>{
        let values = await axios.get("http://localhost:8000/api/Student/getCourse")
        values.data.result = values.data.result.map(course => {
            console.log(course.Name)
            if (course.Name === "Android/iOS Mobile App Course in Google Flutter") {
                console.log("reached")
                return { ...course, Name: "Google Flutter" }; // Replace the course name
            }
            if (course.Name === "Android/iOS Mobile App Course in IONIC") {
                console.log("reached")
                return { ...course, Name: "Mobile Development" }; // Replace the course name
            }
            
            return course; // Return the original course if no match
        });
        setdetails(values.data.result)
     
    }
    useEffect(()=>{
        getDetails()
      },[])
  
  return (
    <div>
        <Header/>
        <div className='C1Top1'>
            <div>
            <h1>Courses</h1>
            <button className='btn btn-primary' onClick={() => window.location.hash = "#SP"}>
    Software Programming Courses
    </button>
    <button className='btn btn-primary' onClick={() => window.location.hash = "#ST"}>
    Software Testing Courses
    </button>
    <button className='btn btn-primary' onClick={() => window.location.hash = "#SC"}>
    Networking, Server, & Cloud
    </button>
            <button className='btn btn-primary' onClick={() => window.location.hash = "#SO"}>
    Other Courses
    </button>
           </div>
            <div>
            <img width="500px" height="500px" alt="" src="https://img.freepik.com/free-vector/students-watching-webinar-computer-studying-online_74855-15522.jpg?w=740&t=st=1723179890~exp=1723180490~hmac=40f4ef1cf4eb5bf0c699360c4e65c507d9ed781465a5edc30a2fdede54064afd"/>
            <a href="https://www.freepik.com/free-vector/students-watching-webinar-computer-studying-online_13146648.htm#query=course&position=34&from_view=keyword&track=ais_hybrid&uuid=11984338-16d5-4edc-a71d-a8be167a0dd5">Designed by Freepick</a>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        {/*<div className='C1Top2'>
            <div>
                <div>Top Courses</div>
                <p>SCOPE India offers the best courses</p>
            </div>
            <div>
                <div>100% placement support</div>
                <p>We provide 100% placement support</p>
            </div>
        </div>*/}
        <div className='C1Top3'>
            <div id="SP" className='C1Div'><p className='C1Types'>Software Programming Courses</p></div>
            <div>
                <br/>
                <br/>
        <div id="CG" style={{marginLeft:"90px",backgroundColor:"white",width:"100%",flexWrap:"wrap",display:"flex",top:"50px",alignItems:"center",gap:"60px"}}>
   
          {details.map((detail)=>{
            if(detail.Type=="Programming"){
                console.log(detail.duration)
            return(<Card Name={detail.Name} Sbutton={true} Type={detail.Type} duration={detail.Duration} Fee={detail.fee} logo={"/images/"+detail.imageName+".png"}/>)
            }
          })}
         
         
      
        </div>
            </div>
        </div>
        <br/>
        <div className='C1Top3'>
            <div id="ST" className='C1Div'><p className='C1Types'>Software Testing Courses</p></div>
            <div>   
                 <div>
                    <br/>
                    <div style={{backgroundColor:"white",flexWrap:"wrap",display:"flex",top:"50px",alignItems:"center",marginLeft:"90px",gap:"30px"}}>
               
          {details.map((detail)=>{
            if(detail.Type=="Testing"){
                console.log(detail.duration)
            return(<Card Name={detail.Name} Sbutton={true} Type={detail.Type} duration={detail.Duration} Fee={detail.fee} logo={"/images/"+detail.imageName+".jpg"}/>)
            }
          })}
         
                   
                    </div>
                </div>
                </div>
        </div>
        <br/>
        <div className='C1Top3'>
            <div id="SC" className='C1Div'><p className='C1Types'>Networking, Server, & Cloud</p></div>
            <div>
                       <div>
                    <br/>
                    <br/>
                    <div style={{backgroundColor:"white",flexWrap:"wrap",display:"flex",alignItems:"center",marginLeft:"90px",gap:"50px"}}>
                           
          {details.map((detail)=>{
            if(detail.Type=="Cloud"){
                console.log(detail.duration)
            return(<Card Name={detail.Name} Sbutton={true} Type={detail.Type} duration={detail.Duration} Fee={detail.fee} logo={"/images/"+detail.imageName+".png"}/>)
            }
          })}
                    
         
                    </div>
                    </div>
            </div>
        </div>
        <br/>
        <br/>
        <div className='C1Top3'> 
            <div id="SO" className='C1Div'><p className='C1Types'>Other Courses</p></div>
            <div>
            <div>
                <br/>
                <div style={{backgroundColor:"white",flexWrap:"wrap",marginLeft:"90px",display:"flex",top:"50px",alignItems:"center",gap:"30px"}}> 
                {details.map((detail)=>{
            if(detail.Type=="Other"){
                console.log(detail.duration)
            return(<Card Name={detail.Name} Sbutton={true} Type={detail.Type} duration={detail.Duration} Fee={detail.fee} logo={"/images/"+detail.imageName+".png"}/>)
            }
          })}
                </div>
                </div>
            </div>
        </div>
        <br/>

        <Footer1/>
    </div>
  )
}
