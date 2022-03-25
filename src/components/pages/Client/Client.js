import React from "react";
import Header from "../../Header";
import Sidebar from "../../Sidebar";


import "./../../../../node_modules/font-awesome/css/font-awesome.min.css";
import "./Client.css";



const Client = () => {
  return(
    <div>
      <Header />
      <Sidebar />
      {/* <!-- Main Content --> */}
      <div className="main-content">
          <div className="row">
              {/* <!-- Recent Section --> */}
              <div className="col-12 recent-section">
                  <div className="row d-flex justify-content-between sct">
                      <div className="col-4 ml-2 my-auto sect-item">
                          <h4 id="rct-act">Recent Actions</h4>
                      </div>
                      <div className="col-4 mr-2 my-auto sect-item d-flex justify-content-end">
                          <h4 id="breadcrumb">Home {'>'} Recent Actions</h4>
                      </div>
                  </div>
              </div>
              {/* <!-- End Recent Section --> */}
              {/* <!-- Changed Section --> */}
              <div className="col-12 cgd-sct">
                  <div className="container d-flex flex-column">
                      <div className="col-12 mb-5 sectionOption">
                          <div className="row d-flex w-100 h-100 d-inline-flex justify-content-between">
                              <div className="col-4 actionSide">
                                  <div className="d-flex flex-column">
                                      <div className="act-upper">
                                          <div className="row justify-content-between px-3">
                                              <div className="col-3 my-auto">
                                                  <h5 className="act-text">ACTION: </h5>
                                              </div>
                                              {/* <div className="col-9 colorized-action">
                                                  <div className="row">
                                                      <div className="col-8 act-container">
                                                          <div className="input-group select-act">
                                                              <select name="action" id="inputgroupAction" className="act-item">
                                                                  <option  value="delete" selected>Choose action</option>
                                                                  <option value="edit">Edit</option>
                                                                  <option value="edit">Delete</option>
                                                                  <option value="edit">Detail</option>
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
                                              </div> */}
                                          </div>
                                      </div>
                                      {/* <div className="d-flex justify-content-end">
                                          <span>0 of 4 item selected</span>
                                      </div> */}
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
                      <div className="col-12">
                          <div className="container d-flex">
                              <div className="col-12">
                                  <table className="table">
                                      <thead className="table-light">
                                          <tr>
                                              <th>
                                                  <input type="checkbox" name="select-all" id="selectAll" />
                                              </th>
                                              <th class="text-center" scope="col">USERNAME</th>
                                              <th class="text-center" scope="col">COUNTPROJET</th>
                                              <th class="text-center" scope="col">SHOW CLIENT PROJECT</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <td><input type="checkbox" name="" id="" /></td>
                                              <td ><span >Clara</span></td> 
                                              <td>1</td> 
                                              <td>Show Project</td>                                            
                                          </tr>
                                          <tr>
                                              <td><input type="checkbox" name="" id="" /></td>
                                              <td ><span >Mark</span></td> 
                                              <td>0</td> 
                                              <td>Show Project</td>                                            
                                          </tr>  
                                          <tr>
                                              <td><input type="checkbox" name="" id="" /></td>
                                              <td ><span >Jhon Doe</span></td> 
                                              <td>3</td> 
                                              <td>Show Project</td>                                            
                                          </tr>  
                                          <tr>
                                              <td><input type="checkbox" name="" id="" /></td>
                                              <td ><span >Mathieu</span></td> 
                                              <td>4</td> 
                                              <td>Show Project</td>                                            
                                          </tr>                                            
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* <!-- End changed Section --> */}
          </div>
      </div>
    </div>
  );
};

export default Client;
