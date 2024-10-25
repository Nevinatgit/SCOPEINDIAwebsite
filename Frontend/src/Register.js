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
    courses: [],
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
    else if(id=="course"){
      const { options } = e.target;
      const selectedValues = [];

      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
          selectedValues.push(options[i].value);
        }
      }

      setFormData({
        ...formData,
        courses: selectedValues, // Update the courses array
      });
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
    let pass=Math.floor(Math.random() * 9000) + 1000
    console.log(pass)
    try {
       result = await axios.post("http://localhost:8000/api/login/Signup", {
        email: formData.email,
        password: pass
      });
      console.log(result.data.token)
      if(!result.data.status)
      {
        alert("Email already exists")
      }
      else{
          dispatch({ type: 'SET_TOKEN', token: result.data.token });
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
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }

 
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
          value={formData.courses}
          onChange={handleChange}
        
          required
        >
           <option selected disabled value="">Choose...</option>
          <option value="Java">Java Full Stack Internship</option>
          <option value="Python Full Stack Internship">Python Full Stack Internship</option>
          <option value="PHP Full Stack Internship">PHP Full Stack Internship</option>
          <option value=".Net Core Full Stack Internship">.Net Core Full Stack Internship</option>
          <option value="MERN Full Stack Internship">MERN Full Stack Internship</option>
          <option value="MEAN Full Stack Internship">MEAN Full Stack Internship</option>
          <option value="Android/iOS Mobile App Course in Google Flutter">Android/iOS Mobile App Course in Google Flutter</option>
          <option value="Android/iOS Mobile App Course in IONIC">Android/iOS Mobile App Course in IONIC</option>
          <option value="Website Designing Course">Website Designing Course</option>
          <option value="UI/UX Designing Software Testing Advanced Course">UI/UX Designing Software Testing Advanced Course</option>
          <option value="Networking, Server, & Cloud Administration">Networking, Server, & Cloud Administration</option>
          <option value="AWS Architect Associate">AWS Architect Associate</option>
          <option value="Ms Azure Cloud Administrator">Ms Azure Cloud Administrator</option>
          <option value="Red Hat Certified System Administrator (RHCSA)">Red Hat Certified System Administrator (RHCSA)</option>
          <option value="Red Hat Certified Engineer (RHCE)">Red Hat Certified Engineer (RHCE)</option>
          <option value="DevOps Engineer">DevOps Engineer</option>
          <option value="Cisco Certified Network Associate (CCNA)">Cisco Certified Network Associate (CCNA)</option>
          <option value="Data Science & AI">Data Science & AI</option>
          <option value="Data Analytics">Data Analytics</option>
          <option value="Digital Marketing Expert">Digital Marketing Expert</option>
          <option value="Microsoft Power BI">Microsoft Power BI</option>
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
