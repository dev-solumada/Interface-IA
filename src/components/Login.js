import './Login.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import React from "react";
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className="App">
      <div className="container-fluid opti-log">
        <div className="col-lg-5 flex-row mx-auto px-0">
            <div className="card container-card pt-2 pb-4" style={{background: "rgba(158, 158, 158, 0.5)", borderRadius: "50px"}}>
                <div className="container w-75">
                    <h4 className="title text-center mt-5">
                        Optimus Solution
                    </h4>
                    <div className="form form-box px-3">
                        <div className="form-input w-100 mr-2">
                            <span className="icon ml-2"><i className="fa fa-user"></i></span>
                            <span className="separator">|</span>
                            <input type="text" name="username" placeholder="Username" tabIndex="10" autoComplete="off" required/>
                        </div>
                        <div className="form-input password w-100">
                            <span className="icon"><i className="fa fa-lock"></i></span>
                            <span className="separator">|</span>
                            <input type="password" name="password" placeholder="Password" autoComplete="off" required/>
                        </div>
                        <Link to="/home">
                          <button className="button mt-5 mb-5" type="submit">Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
