import React from "react";
import "./Sidebar.css";
const Sidebar = (props) => {
  return (
    <div className="side-menu inactive">
      <div className="menu-left">
        <div className="toogle-menu-btn">
          <i class="bi bi-list"></i>
        </div>
      </div>

      <div className="main-menu">
        Account
        <ul>
          <li>
            <a className="menu-item">Clients</a>
          </li>
          <li>
            <a className="menu-item">Documents</a>
          </li>
          <li>
            <a className="menu-item">Projects</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
