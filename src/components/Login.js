import './Login.css';
import React from "react";

const Login = () => {
  return (
    <div className='wrapper'>
      <div className='title-container'>
        <span className='title'>Optimus Solution</span>
      </div>
      <div className='form'>
        <div className='row-form-username'>
          <i className='fas fa-user'></i>
          <input type='text' className='user-input' placeholder='Username' required></input>
        </div>
        <div className='row-form-password'>
          <i className='fas fa-lock'></i>
          <input type='password' className='user-input' placeholder='Password' required></input>
        </div>
        <div className='row-button'>
          <i className='fas fa-user'></i>
          <button type='submit' className='signIn'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
