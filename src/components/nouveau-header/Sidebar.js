import React from "react";
import { Link } from 'react-router-dom';
import "./Sidebar.css"

const Sidebar = (props) => {
  return (

    <div class="sidebar">
      <div class="menu-container flex-column">
        <div class="menu main-menu1">
          <div class="menu-account">
            Account
          </div>
          <ul class="d-flex flex-column">
            <li class="menu-item d-inline-flex " >
              <Link to="/account/client" style={{ textDecoration: 'none' }}>
                <a className="menu-item">
                  <span class="menu-icon "><i class="fa fa-user"></i></span>
                  <span class="menu-text">Clients</span>

                </a>
              </Link>
            </li>
            <li class="menu-item d-inline-flex">
              <Link to="/account/document" style={{ textDecoration: 'none' }}>
                <a className="menu-item">
                  <span class="menu-icon"><i class="fa fa-file"></i></span>
                  <span class="menu-text">Documents</span>
                </a>
              </Link>
            </li>
            <li class="menu-item d-inline-flex">
              <Link to="/account/projet" style={{ textDecoration: 'none' }}>
                <a className="menu-item">
                  <span class="menu-icon"><i class="fa fa-clipboard"></i></span>
                  <span class="menu-text">Projects</span>
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
