import React from "react";
import Header from "./../../Header";
import Sidebar from "./../../Sidebar";
import Topbar from "./../../Topbar";
import "./Document.css";
import {Link} from 'react-router-dom';

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
            
        <div class="row d-flex d-inline-flex">
          
            <div class="main-content">
                <div class="row">
                    <div class="col-12 cgd-sct ">
                        <div class="container d-flex d-inline-flex">
                            <div class="col-12">
                                <table class="table ">
                                    <tbody class="">
                                        <tr className="thead-color ">
                                          <td><span className="bi-client"><i class="bi bi-app"></i></span> CLIENT</td>
                                          <td>PROJET</td>
                                          <td>NAME</td>
                                          <td>PATH</td>
                                          <td>STATUS</td>
                                          <td>DATA ANATORIOUS</td>
                                          <td>TYPE</td>
                                          <td>IS TREATED</td>
                                          <td>CLS ACCURACY</td>
                                          <td>INSPECT</td>
                                        </tr>
                                        <tr>
                                          <td><span className="bi-client"><i class="bi bi-app"></i></span> Mark</td>
                                          <td>Impression</td>
                                          <td>test</td>
                                          <td>Table.pdf</td>
                                          <td className="text-center"><i class="bi bi-x-circle-fill fa-doc-xx"></i></td>
                                          <td></td>
                                          <td>['DI']</td>
                                          <td className="text-center"><i class="bi bi-check-circle-fill fa-doc-chek"></i></td>
                                          <td>0.7</td>
                                          <td>
                                            <Link to="/optimum/admin/annotation/11">
                                              <button className="button-inspect" type="submit">inspect</button>
                                            </Link>
                                          </td>                                           
                                        </tr>
                                        <tr>
                                          <td><span className="bi-client"><i class="bi bi-app"></i></span> Clara</td>
                                          <td>Impression</td>
                                          <td>My Document</td>
                                          <td></td>
                                          <td className="text-center"><i class="bi bi-x-circle-fill fa-doc-xx"></i></td>
                                          <td></td>
                                          <td>['DI']</td>
                                          <td className="text-center"><i class="bi bi-x-circle-fill fa-doc-xx"></i></td>
                                          <td>0.8</td>
                                          <td>
                                            <Link to="/optimum/admin/annotation/11">
                                              <button className="button-inspect" type="submit">inspect</button>
                                            </Link>
                                          </td>                                          
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Link to="/account/client/add" className="button-add-doc btn-add-d  mt-5">
              <span className="fa-add-doc  "><i class="fa fa-plus-circle"></i> Add document</span>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>);
};

export default Document;