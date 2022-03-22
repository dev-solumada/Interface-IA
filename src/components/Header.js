import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./image/logo.png";
import "./Header.css";
// import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid navbar-optimum-haut">
        <div className="navbar-optimum">
          <a class="navbar-brand">
            <div>
              <img
                alt=""
                src={logo}
                width="60"
                height="60"
                className="d-inline-block align-top"
              />
              <span id="ligne">|</span>{" "}
              <span id="optimum">
                OPTIMUM <br /> SOLUTION
              </span>
            </div>
          </a>
        </div>
        <div className="John-1">
          <form class="d-flex">
            <span id="John">John Doe</span> <br /> <span id="admin">Admin</span>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
