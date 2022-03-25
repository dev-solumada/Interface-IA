import React from "react";
import {Link} from 'react-router-dom';

const Topbar = () => {
  return (

    <div class="row d-flex justify-content-between sct">
        <div class="col-4 ml-2 my-auto sect-item">
            <h4 id="rct-act">Recent Actions</h4>
        </div>
        <div class="col-4 mr-2 my-auto sect-item d-flex justify-content-end">
            <h4 id="breadcrumb">Home</h4>
        </div>
    </div>
  );
};

export default Topbar;
