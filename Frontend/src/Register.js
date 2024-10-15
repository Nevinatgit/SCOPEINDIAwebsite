import React, { useState } from 'react'
import Header from './Header'
import Footer1 from './footer'
import "./styles/RStyles.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from './Context';

export default function Register() {
  let navigate = useNavigate()
  const { state, dispatch } = useAppContext();
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    mobileNumber: '',
    guardiansMobile: '',
    email: '',
    guardiansName: '',
    guardiansOccupation: '',
    educationQualification: '',
    course: '',
    trainingMode: '',
    scopeLocation: '',
    address: '',
    state: '',
    city: '',
    zip: ''
  });
  const handleChange = (e) => {
    const { id, value, type, checked, name } = e.target;
    if (type === 'radio') {
      setFormData({
        ...formData,
        [name]: value
      });
    }else if (type === 'file') {
      setImage(e.target.files[0]);
    }
     else {
      setFormData({
        ...formData,
        [id]: value
      });
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    let result;
    try {
       result = await axios.post("http://localhost:8000/api/login/Signup", {
        email: formData.email,
        password: "DummyPass"
      });
      dispatch({ type: 'SET_TOKEN', token: result.data.token });
   
    } catch (error) {
      console.error('Error logging in:', error);
    }

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    
    if (image) {
      data.append('image', image);
    }
   
    data.append('token',result.data.token)
    try {
      const response = await axios.post("http://localhost:8000/api/login/register", data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setImageUrl(response.data.filePath);
    } catch (error) {
      console.error('Error submitting form:', error);
      navigate("/Register")
    }
   
    navigate("/Login")
  };
  return (
    <div>
     
        <Header/>
        <div className='RTop1'>
            <h1>Register Now!!</h1>
            <form className="row g-3 needs-validation" Validate onSubmit={handleSubmit}>
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
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="text"
          className="form-control"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <div className="invalid-tooltip">
           Enter your Email
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
          type="number"
          className="form-control"
          id="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
          min="1000000000" max="9999999999" 
        />
        <div className="invalid-tooltip">
          Please provide a valid mobile number.
        </div>
      </div>
      
      <div className="col-md-6 position-relative">
        <label htmlFor="guardiansMobile" className="form-label">Guardian's Mobile</label>
        <input
          type="number"
          className="form-control"
          id="guardiansMobile"
          value={formData.guardiansMobile}
          onChange={handleChange}
          required
          min="1000000000" max="9999999999" 
          maxLength={10}
        />
        <div className="invalid-tooltip">
          Please provide a valid guardian's mobile number.
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
          <option selected disabled value="">Choose...</option>
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
        <label for="imageUpload" class="form-label" >Upload Image</label>
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
