import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Topbar from "./Topbar";
import "./Accueil.css";

const Accueil = () => {
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
              <div className=" my-action">My Action :</div></div>
            <div className="col-md-8">
              <table class="table ">
                <tbody>
                  <tr className="thead-color">
                    <td className="bi-cpl">ACTION</td>
                    <td >ITEM</td>
                    <td>PROJECT NAME</td>
                  </tr>
                  <tr className="tr-body">
                    <td className="bi-cpl"><i class="bi bi-plus-circle-fill bi-docmt "></i></td>
                    <td>Document</td>
                    <td>Project lanch</td>
                  </tr>
                  <tr className="tr-body">
                    <td className="bi-cpl"><i class="bi bi-pencil-square bi-usr bi-cpl"></i></td>
                    <td>User</td>
                    <td>Admin changed</td>
                  </tr>
                  <tr className="tr-body">
                    <td className="bi-cpl"><i class="bi bi-trash3 bi-drop-dc "></i></td>
                    <td >Document</td>
                    <td >Document droped</td>
                  </tr>
                  <tr className="tr-body">
                    <td className="bi-cpl"><i class="bi bi-plus-circle-fill bi-drop-dc"></i></td>
                    <td >Document</td>
                    <td>Project lanch</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Accueil;
