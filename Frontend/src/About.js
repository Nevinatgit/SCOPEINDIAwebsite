import React, { useState } from 'react'
import './styles/AStyles.css'
import Header from './Header'
import Footer1 from './footer'
import axios from 'axios'

export default function About() {
  //      https://www.freepik.com/free-photo/person-advertising-his-new-smartphone-against-blurred-backdrop_3753597.htm#query=hand%20holding%20phone&position=7&from_view=keyword&track=ais_hybrid&uuid=ea554b54-c3ec-4682-b01d-109ffeb23d5a 
  let [Class,setClass]=useState('btn-primary')
  let [Text,setText]=useState('Submit')
  const [formData, setFormData] = useState({
    name:'',
    Phone:""
  });
  let Submit=async ()=>{
    console.log(formData)
    setClass('btn-success')
    setText('Submitted')
    await axios.post("http://localhost:8000/api/login/callDetails",{
        data:formData
    })
   
  }
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
        
        <div className='ATop00'>
        <br/>
        <br/>
        <br/>
          <div className='ATop0'>

        <div className='ATop1'>
        <h1 className='Text'>SCOPE INDIA, your career partner!</h1>
        <h3 className='Text'>One of the best Training Destination for Software, Networking and Cloud Computing courses in India with 17 years of Industrial experience.</h3>
        <p className='Text'>Software, Networking, and Cloud Professional Education Centre in Kerala and Tamil Nadu from Suffix E Solutions with WORKING PROFESSIONALS oriented on-the-job TRAINING model. SCOPE INDIA provides courses for Software Programming in Python (Data Science | Artificial Intelligence | Machine Learning | Deep Learning, Data Analytics), Java, PHP, .Net, MERN, Software Testing Manual and Automation, Cloud Computing (AWS | Azure), Server Administration (MicroSoft MCSE | Linux RHCE), Networking (CCNA), DevOps, Mobile App Development in Flutter, and Digital Marketing. Training with a 100% Trusted Job-Based Internship Model. SCOPE INDIA has a Strong Placement Cell that provides jobs to thousands of students every year. We assure you, you won't regret it after training from SCOPE INDIA!

This is how SCOPE INDIA can support both newbies and experienced in the industry to upgrade their skills.</p>
    </div>
    <div id="W">
    <div><img width="300px" height="300px" src="https://media.istockphoto.com/id/1916729901/photo/meeting-success-two-business-persons-shaking-hands-standing-outside.jpg?s=1024x1024&w=is&k=20&c=lDdAFbi0F3tfUu5tQMgTRbgQ-wKPPoltpzmKc9rc2D4="/></div>
    </div>
    </div>
    </div>
    <div className='ATop2'>
      <h1>Why Choose SCOPE INDIA??</h1>
        <div>
          <hr/>
        <div id="E">
        <img alt="" width="400px" height="400px" src="H.jpg"/>
        <div>
        <p>Top Courses</p><br/>
        <p>With a wide variety of courses on every aspect of the IT feild SCOPE INDIA offers the best courses in the industry making it the best plce to learn from.</p></div>
    </div>
    <hr/>
    
    <div id="E">
        <div>
        <p>Great Trainers</p>
        <p>Our trainers are experienced software proffessionals who are gonna hep you to step into the software industry on every step of your way</p></div>
        <img alt="" width="400px" height="400px" src="TR.jpg"/>
    </div>
    <hr/>
    <div id="E">
        <img alt="" width="400px" height="400px" src="H.jpg"/>
        <div>
        <p>100% Placement Support</p>
        <p>Scope india has a record of placing 1000's of students every year. Our dedicated placement department will support you every step of the way</p></div>
    </div>
    <hr/>
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
    <Footer1/>
    </div>
  )
}
