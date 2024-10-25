import React, { useEffect, useState } from 'react'
import Card from './Card'
import './styles/Style.css'
import Header from './Header'
import Footer1 from './footer'
import RCard from './RCard'
import Cardz from './Cardz'
import ReviewBox from './ReviewBox'
import ReviewSlider from './ReviewSlider'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export  function Home() {
  let [details,setdetails]=useState([])
  let [Class,setClass]=useState('btn-primary')
  let [Text,setText]=useState('Submit')
  const reviews = [
    { author: 'Alice', text: 'Great product, highly recommend!', rating: 5 },
    { author: 'Bob', text: 'Good value for the money.', rating: 4 },
    { author: 'Charlie', text: 'It was okay, but could be improved.', rating: 3 },
    { author: 'David', text: 'Absolutely fantastic!', rating: 5 },
    { author: 'Eve', text: 'Not bad, but could be better.', rating: 3 },
    { author: 'Frank', text: 'I love it, will buy again.', rating: 4 },
    { author: 'Alice', text: 'Great product, highly recommend!', rating: 5 },
    { author: 'Bob', text: 'Good value for the money.', rating: 4 },
    { author: 'Charlie', text: 'It was okay, but could be improved.', rating: 3 }
  ];

  let getDetails=async ()=>{
    let values = await axios.get("http://localhost:8000/api/Student/getCourse")
    console.log(values.data)
    setdetails(values.data.result)
}
useEffect(()=>{
  getDetails()
},[])

let Submit=async ()=>{
  console.log(formData)
  setClass('btn-success')
  setText('Submitted')
  await axios.post("http://localhost:8000/api/login/callDetails",{
      data:formData
  })
 
}
let navigate= useNavigate()
const [formData, setFormData] = useState({
  name:'',
  Phone:""
});
const handleChange = (e) => {
  const { id, value} = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  
};

  return (
   <div>
    <Header/>
    <div className='Top2'>
   <div>
    <div>
    <h1>SCOPE INDIA</h1>
    <p>One of India's best Training destinations for Software, Networking, and Cloud Computing courses with 17 years of Industrial experience.</p>
   <button  className='btn btn-primary btn-lg col-3' onClick={()=>{navigate("/Contact")}}>Contact Us</button>
   </div>
   </div>
    
    </div>
    <div  className='Top3'> 
        <h1>Our Acheivements</h1>
        <br/>
        <br/>
        <div id="Top31">
          <div>
        <img width="1
        0px" height="10px" src="https://scopeindia.org/images/5star.png" />
        <p style={{fontSize:"20px",textAlign:"center",color:"white"}}>We are rated 5 stars on <span style={{left:"20px"}}>google</span></p>
        </div>
        <div>
        <p style={{display:"flex",justifyContent:"center",fontFamily:"Impact",color:"blue",alignItems:"center",fontSize:"50px",backgroundColor:"white",width:"180px",height:"170px",borderStyle:"solid",borderRadius:"50%",borderColor:"white"}}>95%</p>
        <p style={{fontSize:"20px",textAlign:"center",color:"white"}}>We have a 95% placement <span style={{left:"20px"}}>rate</span></p>
        </div>
        <div>
        <p style={{display:"flex",justifyContent:"center",fontFamily:"Impact",color:"blue",alignItems:"center",fontSize:"50px",backgroundColor:"white",width:"180px",height:"170px",borderStyle:"solid",borderRadius:"50%",borderColor:"white"}}>1000+</p>
        <p style={{fontSize:"20px",textAlign:"center",color:"white"}}>We train 1000+ students <span style={{left:"20px"}}>every year</span></p>
        </div>
        <div>
        <p style={{display:"flex",justifyContent:"center",fontFamily:"Impact",color:"blue",alignItems:"center",fontSize:"50px",backgroundColor:"white",width:"180px",height:"170px",borderStyle:"solid",borderRadius:"50%",borderColor:"white"}}>17+</p>
        <p style={{fontSize:"20px",textAlign:"center",color:"white"}}>We have 17+ years of <span style={{left:"20px"}}>Experience</span></p>
        </div>
        </div>
    </div>
    <div className="card HTop5">  
        <div id="RS">
        <h1 >Our Courses</h1>
        <p>SCOPE India offers a wide variety of courses in various computer feilds check out our course range in various Software feilds</p>
        </div>
       
        <div className='cards'>
        <ul class="nav nav-pills mb-3 w-100" id="pills-tab" role="tablist">
  <li class="nav-item flex-fill" role="presentation">
    <button class="nav-link active w-100" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-development" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Software Development Courses</button>
  </li>
  <li class="nav-item flex-fill" role="presentation">
    <button class="nav-link w-100" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-testing" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Software Testing Courses</button>
  </li>
  <li class="nav-item flex-fill" role="presentation">
    <button class="nav-link w-100" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-Cloud" type="button" role="tab" aria-controls="pills-Cloud" aria-selected="false">Networking, Server, & Cloud</button>
  </li>
  <li class="nav-item flex-fill" role="presentation">
    <button class="nav-link w-100" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-Other" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Other Courses</button>
  </li>
  
</ul>

<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-development" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
  <div className='soft'>
  {
              details.map((course)=>{
                if(course.Type=="Programming"){
                  console.log(course.Name)
                return( <Cardz width="190px" name={course.Name} logo={"/images/"+course.imageName+".png"}/>)
}})
            }</div>
  </div>
  <div class="tab-pane fade" id="pills-testing" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
  <div className='soft'>
  {
              details.map((course)=>{
                if(course.Type=="Testing")
                return( <Cardz width="210px" name={course.Name}  logo={"/images/"+course.imageName+".jpg"} />)
              })
            }
            </div>
  </div>
  <div class="tab-pane fade" id="pills-Cloud" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
  <div className='soft'>
  {
              details.map((course)=>{
                if(course.Type=="Cloud"){
                  console.log()
                return( <Cardz width="210px" name={course.Name}  logo={"/images/"+course.imageName+".png"}/>)
                }
              })
            }
            </div>
  </div>
  <div class="tab-pane fade" id="pills-Other" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">
  <div className='soft'>
  {
              details.map((course)=>{
                if(course.Type=="Other")
                return( <Cardz width="210px" name={course.Name} logo={"./images/"+course.imageName+".png"}/>)
              })
            }</div>
  </div>
</div>
        </div>
      
   </div>

         <div style={{backgroundColor:"grey",width:"100%",height:"400px"}}>
          <div style={{display:"flex",padding:"30px",gap:"300px",marginLeft:"50px",alignItems:"center"}}> 
            <div style={{marginLeft:"60px",alignItems:"center",background:"grey"}}>
            <img width="350px" height="350px" src="Phone.jpg" />
            </div>
            <div style={{color:"white",justifyContent:"center",background:"grey",width:"600px",height:"300px",display:"flex",flexDirection:"column"}}>   
              <h1>Get a Callback</h1>
              <label>Name</label>
              <input id="name" type="text" style={{height:"40px",width:"400px"}} placeholder="Enter your Name"  disabled={Text=='Submitted'} onChange={handleChange}/><br/>
              <label>Phone Number</label>
              <input id="Phone" type="text"  style={{height:"40px",width:"400px"}} placeholder="Enter your Phone Number"  disabled={Text=='Submitted'} onChange={handleChange} /><br/>
              <button onClick={()=>Submit()} className={'btn '+Class+' col-8'} disabled={Text=='Submitted'}>{Text}</button>
            </div> 
          </div> 
          <div style={{position:"relative",top:"60%",left:"30%" }}>
           
          </div>
         </div>
        <div>
        </div>
        <br/>
        <div className='HTop7'>
          <div style={{display:"flex",gap:"10px"}}>
            <img style={{position:"absolute",background:"cover"}} width="730px" height="570px" src="/images/Customer.jpg" />
            <h1 style={{position:"relative",fontSize:"90px"}}>What People Say About Us</h1>
          </div>
          <div>
          <p>SCOPE INDIA is rated 5 stars on google Reviews, we are grateful for our customer feedback</p>
          <div className='slider1'>
             
          <ReviewSlider reviews={reviews} />
          </div>
          </div>
        </div>  
        <br/>
         <div><div style={{backgroundColor:"darkblue",width:"100%",height:"600px"}}>  
          
    <div style={{position:"relative",top:"20%",left:"30%" }}>
      <img  src="https://scopeindia.org/images/scope-india-logo-home-page.png"/>
    </div>
    <div style={{position:"relative",top:"20%",left:"17%" }}>
      <img  src="https://scopeindia.org/images/iso_iaflogo.png"/>
    </div>
   </div></div>
    </div>
    
  )
}
