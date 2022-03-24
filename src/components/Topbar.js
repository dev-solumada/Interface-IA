import React from "react";
import "./Topbar.css";
import {Link} from 'react-router-dom';

const Topbar = () => {
  return (
    <nav class="navbar">
      <div class="container-fluid navbar-recent-Action">
        <div className="navbar-rA">
          <a class="navbar-brand">
            <div className="rA">Recent Actions</div>
          </a>
        </div>
        <div className="John-1">
          <form class="d-flex">
            <span > <Link className="Home" to="/home" style={{ textDecoration: 'none' }}>Home</Link> </span>
             {/* &#62; Recent Actions</span> */}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
