import React from "react";
import Header from "../../nouveau-header/Header";
import Sidebar from "../../nouveau-header/Sidebar";
import Topbar from "../../nouveau-header/Topbar";
import { Link } from 'react-router-dom';
import "./Document.css"

const Document1 = () => {
  return (
    <div className="container-fluid d-flex flex-column ">
      <Header />
      <div className="row d-flex d-inline-flex side-topbar">
        <div className="col-md-2 col-2 sidebar-color">
          <Sidebar />
        </div>
        <div className="col-md-10 col-10 main-content">
          <div className="row">
            <div className="col-12 recent-section">
              <Topbar />
              <div class="row d-flex ">
                <div class="row">
                  <div class="col-12 cgd-sct ">

                    <div className="col-12 mb-5 sectionOption">
                      <div className="row d-flex w-100 h-100 d-inline-flex justify-content-between">
                        <div className="col-4 actionSide">
                          <div className="d-flex flex-column">
                            <div className="act-upper">
                              <div className="row justify-content-between px-3">
                                <div className="col-3 my-auto">
                                  <h5 className="act-text">ACTION: </h5>
                                </div>
                                <div className="col-9 colorized-action">
                                  <div className="row">
                                    <div className="col-8 act-container">
                                      <div className="input-group select-act">
                                        <select name="action" id="inputgroupAction" className="act-item">
                                          <option value="delete" selected>---------</option>
                                          <option value="edit">Delete selected documents</option>
                                          <option value="edit">Run annotation</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-3 my-auto">
                                      <div className="aply d-flex d-inline-flex">
                                        <span className="sep">|</span>
                                        <button className="btn-apply">Apply</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex justify-content-end">
                              <span>0 of 4 item selected</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-4 searchSide">
                          <div className="d-flex my-auto">
                            <div className="row colorized-search justify-content-around">
                              <div className="d-flex d-flex-inline">
                                <div className="col-10 search-input">
                                  <span className="search-Icon"><i class="fa fa-search"></i></span>
                                  <input type="text" />
                                </div>
                                <div className="col-2">
                                  <div className="d-flex d-flex-inline btn-search">
                                    <span className="search-sep">|</span>
                                    <button type="button">Search</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="container d-flex d-inline-flex">
                      <div class="col-12">
                        <table class="table ">
                          <tbody class="">
                            <tr className="thead-color ">
                              <td className="">
                                <input type="checkbox" name="select-all" id="selectAll" />
                              </td>
                              <td>CLIENT</td>
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
                              <td className="bi-client">
                                <input type="checkbox" name="select-all" id="selectAll" />
                              </td>
                              <td>
                                <Link to="/account/document/11/change/Utilisateur" style={{ textDecoration: 'none' }}>
                                  <a className="url-updat-doc">Mark</a>
                                </Link></td>
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
                              <td className="bi-client">
                                <input type="checkbox" name="select-all" id="selectAll" />
                              </td>
                              <td>
                                <Link to="/account/document/11/change/Utilisateur" style={{ textDecoration: 'none' }}>
                                  <a className="url-updat-doc">Clara</a>
                                </Link></td>
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

                <Link to="/account/client/add" className="button-add-doc btn-add-d  mt-5">
                  <span className="fa-add-doc  "><i class="fa fa-plus-circle"></i> Add document</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
};

export default Document1;