import React from 'react'
import './Register.css'
import { FaUser, FaLock } from 'react-icons/fa'
import { useState} from "react";

const Register = () => {

    const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      const [passwordconfirm, setPasswordConfirm] = useState("");
    
      const handleSubmit = (event) =>{
        event.preventDefault();


        if (password !== passwordconfirm) {
            alert("As senhas não coincidem!");
            return;
        }

        console.log("Envio", {username, password, passwordconfirm});
      }


  return (
        <div className='wrapper'>
              <form onSubmit={handleSubmit}>
                <h1>Register</h1>
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
                <div className='input-box'>
                  <input type="password" placeholder='Confirm Password' 
                  onChange={(e) => setPasswordConfirm(e.target.value)}/>
                  <FaLock className='icon'/>
                </div>
        
                <button type='submit'>Register</button>    
        
                <div className='register-link'>
                  <p>Your have an account? <a href="/login">Login</a></p>
                  
                </div>
              </form>
            </div>
  )
}

export default Register
