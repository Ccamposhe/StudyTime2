import React from 'react';
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa'
import { useState} from "react";


const login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log("Envio", {username, password});
  }

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className='input-box'>
          <input type="text" placeholder='Username'
          onChange={(e) => setUsername(e.target.value)} 
          autoComplete="new-password"/>

          <FaUser className='icon'/>
        </div>
        <div className='input-box'>
          <input type="password" placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}/>
          <FaLock className='icon'/>
        </div>

        <div className='remember-forgot'>
          <label><input type="checkbox" />Remember me</label>
          <a href="#"> Forgot Password?</a>
        </div>

        <button type='submit'>Login</button>    

        <div className='register-link'>
          <p>Don't have an account? <a href="/register">Register</a></p>
          
        </div>
      </form>
    </div>
  )
}

export default login
