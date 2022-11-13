import React from 'react';
import "./register.css"

const Register = () => {
  return (
    <div className='register'>
     <span className='registerTitle'>Login</span>
     <form className='registerForm'>
     <label>Username</label>
        <input type="text" className='registerInput' placeholder='Enter Your Username'/>
        
        <label>Email</label>
        <input type="text" className='registerInput' placeholder='Enter Your Email'/>
        <label>Password</label>
        <input type="password" className='registerInput' placeholder='Enter Your password'/>
        <button className='registerButton'>Register</button>
       
     </form>
     <button className='registerLoginButton'>Login</button>
    
    </div>
  )
}

export default Register