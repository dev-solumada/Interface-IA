import './Login.css';
import React from "react";

const Login = () => {
  return (
    <div className="App">
      <div className="login-container">
        <div className="login-content">
          <div className="login-title">
            <span className="title">Optimus Solution</span>
          </div>
          <div className="form-container">
            <div className="form-input">
              <span className='icon'>
                <i className='fa fa-user'></i>
              </span>
              <span className='separator'>|</span>
              <input className="input input-username" type="text" placeholder="Username" name="username" autocomplete="off" />
            </div>
            <div className="form-input">
              <span className='icon'>
                <i className='fa fa-lock'></i>
              </span>
              <span className='separator'>|</span>
              <input className="input input-password" type="password" placeholder="Password" name="password" autocomplete="off" />
            </div>
          </div>
          <div className='submit-btn'>
            <button typte='button'>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
