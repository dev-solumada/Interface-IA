import React from "react";
import Header from "./../../Header";
import Sidebar from "./../../Sidebar";
import Topbar from "./../../Topbar";

const Document = () => {
  return (
    <div>
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <Topbar />
          <div className="row tab-act">
            <div className="col-md-2">
              <div className=" my-action">DOCUMENTS</div>
            </div>
          </div>
        </div>
      </div>
    </div>);
};

export default Document;