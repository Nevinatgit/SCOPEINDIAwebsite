import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer1 from './footer'
import "./styles/RStyles.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
export default function Edit() {
 let defaultValues = useState({})
 const [formData, setFormData] = useState(defaultValues);
  let navigate = useNavigate()
 const [image, setImage] = useState(null);
  const defaultValues1 = {
    fullName: 'John Doe',
    dob: '1990-01-01',
    gender: 'male',
    mobileNumber: '1234567890',
    guardiansMobile: '0987654321',
    email: 'john.doe@example.com',
    guardiansName: 'Jane Doe',
    guardiansOccupation: 'Teacher',
    educationQualification: 'Bachelor\'s Degree',
    course: 'course1',
    trainingMode: 'online',
    scopeLocation: 'technopark',
    address: '123 Main St',
    state: 'State',
    city: 'City',
    zip: '123456'
  };

  
  const getProfile = async () => {
    let token=localStorage.getItem('authToken') || '';
    try {
      const response = await axios.post("http://localhost:8000/api/Student/getProfile", {
        token: token,
      });
      if (response.data && response.data.data) {
       defaultValues=response.data.data
       console.log(defaultValues)
       setFormData(defaultValues)
     
      } else {
        console.error("No data found in response.");
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
  useEffect(() => {
    console.log(formData)
  }, [formData]);
 
 
  const handleChange = (e) => {
    const { id, value, type, checked, name } = e.target;
    if (type === 'radio') {
      setFormData({
        ...formData,
        [name]: value
      });
    } else if (type === 'file') {
      setImage(e.target.files[0]);
    }else {
      setFormData({
        ...formData,
        [id]: value
      });
    }
  };

  
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  const handleSubmit =async  (e) => {
    e.preventDefault();
    const formData1 = new FormData();
    console.log(formData)
    delete formData._id
    const token = localStorage.getItem('authToken') || '';
    formData.token=token
    for (const key in formData) {
      formData1.append(key, formData[key]);    
    }
    
    if (image) {
      console.log("javier")
      formData1.append('image', image);
    }
   
   
    console.log(token)
 

     axios.post("http://localhost:8000/api/login/edit",formData1,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    console.log('Form submitted:', formData);
    await sleep(200);
    navigate("/Student_dashboard")
    
  };

  return (
    <div>
        <Header/>
        <div className='RTop1'>
            <h1>Register Now!!</h1>
       
            <form className="row g-3 needs-validation" novalidate onSubmit={handleSubmit}>
      <div className="col-md-6 position-relative">
        <label htmlFor="fullName" className="form-label">Full name</label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <div className="invalid-tooltip">
          Please provide your full name.
        </div>
      </div>
      
      <div className="col-md-6 position-relative">
        <label htmlFor="dob" className="form-label">Date of birth (required)</label>
        <input
          type="date"
          className="form-control"
          id="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
        <div className="invalid-tooltip">
          Please provide your date of birth.
        </div>
      </div>
      
      <div className="col-md-6 position-relative">
        <label className="form-label">Gender (required)</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
            required
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
            required
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="other"
            value="other"
            checked={formData.gender === 'other'}
            onChange={handleChange}
            required
          />
          <label className="form-check-label" htmlFor="other">
            Other
          </label>
        </div>
        <div className="invalid-feedback">
          Please select your gender.
        </div>
      </div>
      
      <div className="col-md-6 position-relative">
        <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
        <input
          type="tel"
          className="form-control"
          id="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
        />
        <div className="invalid-tooltip">
          Please provide a valid mobile number.
        </div>
      </div>
      
      <div className="col-md-6 position-relative">
        <label htmlFor="guardiansMobile" className="form-label">Guardian's Mobile</label>
        <input
          type="tel"
          className="form-control"
          id="guardiansMobile"
          value={formData.guardiansMobile}
          onChange={handleChange}
          required
        />
        <div className="invalid-tooltip">
          Please provide a valid guardian's mobile number.
        </div>
      </div>
      
      <div className="col-md-6 position-relative">
        <label htmlFor="email" className="form-label">Email (required)</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <div className="invalid-tooltip">
          Please provide a valid email address.
        </div>
      </div>
      
      <div className="col-md-6 position-relative">
        <label htmlFor="guardiansName" className="form-label">Guardian's Name</label>
        <input
          type="text"
          className="form-control"
          id="guardiansName"
          value={formData.guardiansName}
          onChange={handleChange}
          required
        />
        <div className="invalid-tooltip">
          Please provide your guardian's name.
        </div>
      </div>
      
      <div className="col-md-6 position-relative">
        <label htmlFor="guardiansOccupation" className="form-label">Guardian's Occupation</label>
        <input
          type="text"
          className="form-control"
          id="guardiansOccupation"
          value={formData.guardiansOccupation}
          onChange={handleChange}
          required
        />
        <div className="invalid-tooltip">
          Please provide your guardian's occupation.
        </div>
      </div>
      
      <div className="col-md-6 position-relative">
        <label htmlFor="educationQualification" className="form-label">Educational Qualification</label>
        <input
          type="text"
          className="form-control"
          id="educationQualification"
          value={formData.educationQualification}
          onChange={handleChange}
          required
        />
        <div className="invalid-tooltip">
          Please provide your educational qualification.
        </div>
      </div>
      
      <div className="col-md-6 position-relative">
        <label htmlFor="course" className="form-label">Choose your course (required)</label>
        <select
          className="form-select"
          id="course"
          value={formData.course}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Choose...</option>
          <option value="course1">Course 1</option>
          <option value="course2">Course 2</option>
        </select>
        <div className="invalid-tooltip">
          Please select a course.
        </div>
      </div>
      
      <div className="col-md-6 position-relative">
        <label className="form-label">Training Mode</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="trainingMode"
            id="online"
            value="online"
            checked={formData.trainingMode === 'online'}
            onChange={handleChange}
            required
          />
          <label className="form-check-label" htmlFor="online">
            Online Classes
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="trainingMode"
            id="offline"
            value="offline"
            checked={formData.trainingMode === 'offline'}
            onChange={handleChange}
            required
          />
          <label className="form-check-label" htmlFor="offline">
            Offline Classes
          </label>
        </div>
        <div className="invalid-feedback">
          Please select your preferred training mode.
        </div>
      </div>
      
      <div className="col-md-6 position-relative">
        <label className="form-label">Scope India Location (required)</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="scopeLocation"
            id="technopark"
            value="technopark"
            checked={formData.scopeLocation === 'technopark'}
            onChange={handleChange}
            required
          />
          <label className="form-check-label" htmlFor="technopark">
            Technopark TVM
          </label>
          <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="scopeLocation"
            id="technopark"
            value="technopark"
            checked={formData.scopeLocation === 'technopark'}
            onChange={handleChange}
            required
          />
           <label className="form-check-label" htmlFor="technopark">
          Thampanoor TVM, Kerala
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="scopeLocation"
            id="technopark"
            value="technopark"
            checked={formData.scopeLocation === 'technopark'}
            onChange={handleChange}
            required
          />
          <label className="form-check-label" htmlFor="technopark">
          Kochi, Kerala
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="scopeLocation"
            id="technopark"
            value="technopark"
            checked={formData.scopeLocation === 'technopark'}
            onChange={handleChange}
            required
          />
          
          <label className="form-check-label" htmlFor="technopark">
          Nagercoil, Tamil Nadu
          </label>
        </div>
        </div>
        <div className="invalid-feedback">
          Please select a location.
        </div>
      </div>
      
      <div className="col-md-6 position-relative">
        <label htmlFor="address" className="form-label">Address</label>
        <input
          type="text"
          className="form-control"
          id="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <div className="invalid-tooltip">
          Please provide your address.
        </div>
      </div>
      
      <div className="col-md-4 position-relative">
        <label htmlFor="state" className="form-label">State</label>
        <input
          type="text"
          className="form-control"
          id="state"
          value={formData.state}
          onChange={handleChange}
          required
        />
        <div className="invalid-tooltip">
          Please provide your state.
        </div>
      </div>
      
      <div className="col-md-4 position-relative">
        <label htmlFor="city" className="form-label">City</label>
        <input
          type="text"
          className="form-control"
          id="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <div className="invalid-tooltip">
          Please provide your city.
        </div>
      </div>
      
      <div className="col-md-4 position-relative">
        <label htmlFor="zip" className="form-label">PIN/Zip Code</label>
        <input
          type="text"
          className="form-control"
          id="zip"
          value={formData.zip}
          onChange={handleChange}
          required
        />
        <div className="invalid-tooltip">
          Please provide a valid ZIP code.
        </div>
      </div>
      <div class="mb-3">
        <label for="imageUpload" class="form-label" >Re-Upload Image</label>
        <input type="file" class="form-control"  id="imageUpload" accept="image/*" onChange={handleChange} required />
        <div  class="form-text">Select an image file to upload (JPG, PNG, GIF).</div>
      </div>
      <div className="col-12">
        <button className="btn btn-primary col-12" type="submit">Submit</button>
      </div>
    </form>

            <br/>
        </div>
    
       <Footer1/>
    </div>
  )
}
