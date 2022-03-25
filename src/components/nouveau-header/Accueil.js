import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

import "./Accueil.css"
const Accueil = () => {
  return (
    <div className="container-fluid d-flex flex-column .main-container">
      <Header />
      <div className="row d-flex d-inline-flex side-topbar">
        <div className="col-md-2 col-2 sidebar-color">
          <Sidebar />
        </div>
        <div className="col-md-10 col-10 main-content">
          <div className="row">
            <div className="col-12 recent-section">
              <Topbar />
            </div>
          </div>

          <div className="row tab-act">
            <div className="col-md-2">
              <div className=" my-action">My Action :</div></div>
            <div className="col-md-8">
              <table class="table">
                <tbody >
                  <tr className="thead-color ">
                    <td className="text-center">ACTION</td>
                    <td >ITEM</td>
                    <td>PROJECT NAME</td>
                  </tr>
                  <tr className="tr-body">
                    <td className="text-center"><i class="fa fa-plus-circle fa-docmt"></i></td>
                    <td>Document</td>
                    <td>Project lanch</td>
                  </tr>
                  <tr className="tr-body">
                    <td className="text-center"><i class="fa fa-edit fa-edit-user"></i></td>
                    <td>User</td>
                    <td>Admin changed</td>
                  </tr>
                  <tr className="tr-body">
                    <td className="text-center"><i class="fa fa-trash fa-drop-doc"></i></td>
                    <td >Document</td>
                    <td >Document droped</td>
                  </tr>
                  <tr className="tr-body">
                    <td className="text-center"><i class="fa fa-plus-circle fa-docmt"></i></td>
                    <td >Document</td>
                    <td>Project lanch</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
