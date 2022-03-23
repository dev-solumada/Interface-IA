import React from "react";

const Topbar = () => {
  return (
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid navbar-optimum-haut">
      <div className="navbar-optimum">
        <a class="navbar-brand">
          <div>
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
  </nav>)
};

export default Topbar;
