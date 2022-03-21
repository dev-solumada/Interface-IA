import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./image/logo.png";

const Header = () => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">
          <img
            alt=""
            src={logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
          />
          OPTIMUM SOLUTION
        </a>
        <form class="d-flex">John Doe Admin</form>
      </div>
    </nav>
  );
};

export default Header;
