import React from "react";
import "./Sidebar.css";
const Sidebar = (props) => {
  return (
    <div className="side-menu inactive">

      <div className="menu-list-with-acc">
        <div className="menu-account">
          Account
        </div>

        <div className="main-menu">
          <ul>
            <li>
              <a className="menu-item">
                <div className="menu-icon"><i class="bi bi-person-fill"></i>
                </div>
                <span className="menu-li">Clients</span></a>
            </li>
            <li>
              <a className="menu-item">
                <div className="menu-icon"><i class="bi bi-file-earmark-fill"></i>
                </div>
                <span className="menu-li">Documents</span></a>
            </li>
            <li>
              <a className="menu-item">
                <div className="menu-icon"><i class="bi bi-clipboard2-check"></i>
                </div>
                <span className="menu-li">Projects</span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
