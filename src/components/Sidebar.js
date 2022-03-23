import React from "react";
import "./Sidebar.css";
import {Link} from 'react-router-dom';
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
              <Link to="/account/client" style={{ textDecoration: 'none' }}>
                <a className="menu-item">
                  <div className="menu-icon">
                    <i class="bi bi-person-fill"></i>
                  </div>
                  <span className="menu-li">Clients</span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/account/document" style={{ textDecoration: 'none' }}>
                <a className="menu-item">
                  <div className="menu-icon">
                    <i class="bi bi-file-earmark-fill"></i>
                  </div>
                  <span className="menu-li">Documents</span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/account/projet" style={{ textDecoration: 'none' }}>
                <a className="menu-item">
                  <div className="menu-icon">
                    <i class="bi bi-clipboard2-check"></i>
                  </div>
                  <span className="menu-li">Projects</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
