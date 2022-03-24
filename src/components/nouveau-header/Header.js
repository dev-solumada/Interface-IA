import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./../image/logo.png";
import "./Header.css"
// import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
  return (

    <div class="row header">
    <div class="d-flex justify-content-between">
        <div class="col-lg-2 d-flex d-inline-flex justify-content-center logo-container">
            <span class="my-auto img">
                <img class="logo" src={logo} alt="Optimum Solution Logo"/>
            </span>
            <span class="mx-2 my-auto" id="separator">|</span>
            <span class="my-auto cpn-name">Optimum <br/> Solution</span>
        </div>
        <div class="col-lg-2 d-flex d-inline-flex justify-content-end  p-3">
            <div class="d-flex user-icon-container">
                <span class="my-auto icon-container">
                    <i class="fas fa-user" id="user-icon"></i>
                </span>
            </div>
            <div class="d-flex justify-content-center mx-2 flex-column info-container">
                <h4 id="username">Jhon Doe</h4>
                <span id="user-status">Admin</span>
            </div>
        </div>
    </div>
</div>
  );
};

export default Header;
