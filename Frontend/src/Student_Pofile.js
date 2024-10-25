import React, { useEffect, useState } from 'react';
import './styles/SStyles.css';
import Footer1 from './footer'; // Assuming you have this component
import axios from 'axios';
import { useAppContext } from './Context';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

export default function StudentProfile() {
  const [imageUrl, setImageUrl] = useState('');
  const { state } = useAppContext();
  const [stateP, setStateP] = useState({});
  const navigate = useNavigate();
  const token = state.token || localStorage.getItem('authToken') || '';
  let [details,setdetails]=useState([])
  const getProfile = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/Student/getProfile", {
        token: token,
      });
      if (response.data && response.data.data) {
        console.log(response.data.data);
        setStateP(response.data.data);
      } else {
        console.error("No data found in response.");
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
    let values = await axios.get("http://localhost:8000/api/Student/getCourse")
    console.log(values.data)
    setdetails(values.data.result)
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <div className='Tag'>
        <h1>Personal Details</h1>
      </div>
      <br />
      <div className='Image_div'>
        {stateP && (
          <div>
           
            {stateP.imagePath && (
              <img src={`http://localhost:8000${stateP.imagePath}`} alt="Uploaded" style={{ maxWidth: '200px', maxHeight: '300px' }} />
            )}
          </div>
        )}
        {stateP && (
          <div>
            <div>
              <p>Name: {stateP.fullName}</p>
              <p>Gender: {stateP.gender}</p>
              {stateP.dob &&( <p>DOB: {stateP.dob.split('T')[0]}</p>)}
            </div>
            <div>
              <p>Email: {stateP.email}</p>
              <p>Phone Number: {stateP.mobileNumber}</p>
              <p>City: {stateP.city}</p>
            </div>
            <div>
              <p>Country: {stateP.country}</p>
              <p>State: {stateP.state}</p>
            </div>
          </div>
        )}
      </div>
      <br />
      <button className="btn btn-danger col-10" id="CB" onClick={() => { navigate('/edit_profile') }}>Edit</button>
      <br />
      <br />
      <div className='SPTop2'>
        <div className='Tag'>
          <h1>Courses Enrolled</h1>
        </div>
        <br />
        <div className='cards1'>
          {console.log(details)}
          {stateP.courses && Array.isArray(stateP.courses) && stateP.courses.map((course, index) =>{ 
            const courseDetails = details.find(course1 => course1.Name === course);
            const logo = courseDetails ? `/images/${courseDetails.imageName}.png` : '';
            console.log(courseDetails)
            return (
              <Card 
               Type={course.Type} 
               duration={course.Duration}
                Fee={course.fee}
                key={index} 
                rebutton={true} 
                rbutton={false} 
                Name={course} 
                logo={logo} 
              />
            );
        })}
        </div>
      </div>
      <br />
    
    </div>
  );
}
