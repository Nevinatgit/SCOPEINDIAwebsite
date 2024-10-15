import React, { useEffect, useState } from 'react';
import './styles/LStyles.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAppContext } from './Context'; // Adjust the path as necessary


export default function Signup() {
  let navigate = useNavigate();
  let [values, setValues] = useState({ email: '', pass: '' });
  const { state,dispatch } = useAppContext(); 
  let verify = async () => {
    try {
      let result = await axios.post("http://localhost:8000/api/login/Signup", {
        email: values.email,
        password: values.pass
      });
      console.log(result.data.token)
      dispatch({ type: 'SET_TOKEN', token: result.data.token });
      navigate('/register')
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  return (
    <div className='LTop1'>
      <div>
        <h1>Signup</h1>
        <div>
          <label>Email</label><br />
          <input
            type="text"
            id="email"
            onChange={(e) => setValues({ ...values, [e.target.id]: e.target.value })}
          /><br />
        </div>
        <div>
          <label>Password</label><br />
          <input
            type="password"
            id="pass"
            onChange={(e) => setValues({ ...values, [e.target.id]: e.target.value })}
          /><br />
        </div>
        <button className='btn btn-danger' onClick={verify}>Submit</button>
     
      </div>
    </div>
  );
}
