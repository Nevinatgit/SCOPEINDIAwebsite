import React, { useState } from 'react'
import './styles/CStyle.css'
import ContactL from './ContactL'
import Header from './Header'
import Footer1 from './footer'
import './styles/Style.css'
import axios from 'axios'
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    Phone:""
  });
  const handleChange = (e) => {
    const { id, value} = e.target;
      setFormData({
        ...formData,
        [id]: value
      });
    
  };

  let Submit=async ()=>{
    console.log(formData)
    await axios.post("http://localhost:8000/api/login/callDetails",{
        data:formData
    })
    alert("Details submitted")
  }
  return (
    <div>
    <Header/>
    <div className='CTop10'>
        <div>
           
              <div>
            <h1>Get a Callback!</h1>
            <input  id="name" type="text" placeholder="Enter your name"  onChange={handleChange}/><br/>
            <input  id="Phone" type="text" placeholder="Enter your Phone"  onChange={handleChange}/><br/><br/>
            <input onClick={()=>Submit()} className="btn btn-danger col-10" type="submit" text="Submit"/>
            </div>
        </div>
        <div className='CTop1'>
          <img width="600px" height="500px" src="https://images.pexels.com/photos/7035855/pexels-photo-7035855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          
        </div>
    </div>
    <br/>
    <a href="https://images.pexels.com/photos/7035855/pexels-photo-7035855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">Designed by image pexels</a>
    <div className='CTop2'> 
      <br/>
      <h1>Our Branches</h1>
      <br/>
      <div>
    <table className="table table-bordered table-primary">
    <thead>
      <tr>
        <th>Location</th>
        <th>Details</th>
       
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Technopark TVM, Kerala</td>
        <td><div><p> Phase 1, Main Gate, Diamond Arcade, Near Technopark, Trivandrum</p>
        <p> 9745936073</p>
        <p> technopark@scopeindia.org</p>
        <p> www.scopeindia.org</p>
        <p> Location Route Map</p>
        </div></td>
        
      </tr>
      <tr>
        <td>Thampanoor TVM, Kerala</td>
        <td><div><p>  TC 25/1403/3, Athens Plaza, SS Kovil Road, Thampanoor, Trivandrum, Kerala 695001</p>
        <p> 9745936073</p>
        <p> info@scopeindia.org</p>
        <p> www.scopeindia.org</p>
        <p> Location Route Map</p>
        </div></td>
        
      </tr>
      <tr>
        <td>Kochi, Kerala</td>
        <td><div><p>  SCOPE INDIA, Vasanth Nagar Rd, near JLN Metro Station, Kaloor, Kochi, Kerala 682025</p>
        <p>  7592939481</p>
        <p>  kochi@scopeindia.org</p>
        <p> www.scopeindia.org</p>
        <p> Location Route Map</p>
        </div></td>
        
      </tr>
      <tr>
        <td>Nagercoil, Tamil Nadu</td>
        <td><div><p> SCOPE INDIA, Near WCC College, Palace Rd, Nagercoil, Tamil Nadu 629001</p>
        <p> 9745936073</p>
        <p>  ngl@scopeindia.org</p>
        <p> www.scopeindia.org</p>
        <p> Location Route Map</p>
        </div></td>
        
      </tr>
      <tr>
        <td>Nagercoil, Tamil Nadu</td>
        <td><div><p> SCOPE INDIA, Pharma Street, 5/2 Ward 28, Distillery Road, Putheri Nagercoil (Near WCC Jn)</p>
        <p> 9745936073</p>
        <p> technopark@scopeindia.org</p>
        <p> www.scopeindia.org</p>
        <p> Location Route Map</p>
        </div></td>
        
      </tr>
    
    </tbody>
  </table>

  </div>
  </div>
  <div  className='Top3'> 
        <h1>Our Acheivements</h1>
        <br/>
        <br/>
        <div id="Top31">
          <div>
        <img  src="https://scopeindia.org/images/5star.png" />
        <p style={{fontSize:"20px",color:"white"}}>We are rated 5 stars on <span style={{left:"20px"}}>google</span></p>
        </div>
        <div>
        <p style={{display:"flex",justifyContent:"center",fontFamily:"Impact",color:"blue",alignItems:"center",fontSize:"50px",backgroundColor:"white",width:"180px",height:"170px",borderStyle:"solid",borderRadius:"50%",borderColor:"white"}}>95%</p>
        <p style={{fontSize:"20px",color:"white"}}>We have a 95% placement <span style={{left:"20px"}}>rate</span></p>
        </div>
        <div>
        <p style={{display:"flex",justifyContent:"center",fontFamily:"Impact",color:"blue",alignItems:"center",fontSize:"50px",backgroundColor:"white",width:"180px",height:"170px",borderStyle:"solid",borderRadius:"50%",borderColor:"white"}}>1000+</p>
        <p style={{fontSize:"20px",color:"white"}}>We train 1000+ students <span style={{left:"20px"}}>every year</span></p>
        </div>
        <div>
        <p style={{display:"flex",justifyContent:"center",fontFamily:"Impact",color:"blue",alignItems:"center",fontSize:"50px",backgroundColor:"white",width:"180px",height:"170px",borderStyle:"solid",borderRadius:"50%",borderColor:"white"}}>17+</p>
        <p style={{fontSize:"20px",color:"white"}}>We have 17+ years of <span style={{left:"20px"}}>Experience</span></p>
        </div>
        </div>
    </div>
  
  <Footer1/>
    </div>
  )
}
