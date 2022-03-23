import React from "react";
import "./Topbar.css";

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
            <span className="Home">Home &#62; Recent Actions</span>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
