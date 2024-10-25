
import './styles/App.css';
import {Home} from './Home';
import { H1 } from './Home';
import ContactUs from './ContactUs';
import About from './About';
import Register from './Register';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

import Placement from './Placement';
import Course from './Course';
import Login from './Login';
import Student_dashboard from './Student_dashboard';
import { AppProvider } from './Context';
import Edit from './edit_Profile';
import AnimatedCycle from './RCard';
import OTP from './OTP';
import ChangePassword from './changePassword';
import CourseDetails from './CourseDetails';
import ReviewSlider from './ReviewSlider';
import { useEffect, useState } from 'react';
import axios from 'axios';
import FormComponent from './edit_Profile';
import Signup from './Signup';
function App() {
 
  const reviews = [
    { author: 'Alice', text: 'Great product, highly recommend!', rating: 5 },
    { author: 'Bob', text: 'Good value for the money.', rating: 4 },
    { author: 'Charlie', text: 'It was okay, but could be improved.', rating: 3 },
    { author: 'David', text: 'Absolutely fantastic!', rating: 5 },
    { author: 'Eve', text: 'Not bad, but could be better.', rating: 3 },
    { author: 'Frank', text: 'I love it, will buy again.', rating: 4 },
  ];

  return (

    <BrowserRouter>
    <AppProvider>
    <div>
  
                   <Routes> 
                    <Route path="/" element={<Home />} /> 
                    <Route path="/About" element={<About/>} /> 
                    <Route path="/Contact" element={<ContactUs />} /> 
                    <Route path="/Register" element={<Register/>}/>
                    <Route path="/Courses" element={<Course/>}/>
                    <Route path='/Placement' element={<Placement/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/Student_dashboard" element={<Student_dashboard/>}/>
                    <Route path="/edit_profile" element={<Edit/>}/>
                    <Route path="/OTP" element={<OTP/>}/>
                    <Route path="/changepassword" element={<ChangePassword/>}/>
                    <Route path="/Signup" element={<Signup/>}/>
                    <Route path="/courseDetails" element={<CourseDetails/>}>
                      <Route path=":name" element={<CourseDetails />}/>
                    </Route>
                    
                </Routes> 
    </div>
    </AppProvider>
    </BrowserRouter>
  );
}

export default App;
