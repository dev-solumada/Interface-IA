import React from "react";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import Topbar from "../../nouveau-header/Topbar";


import "./../../../../node_modules/font-awesome/css/font-awesome.min.css";
import "./Client.css";



const Client = () => {
    return(
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
              <div className="row d-flex">
                <div className="row">
                <div className="col-12 cgd-sct">
                        <div className="container d-flex flex-column">
                            <div className="col-12 mb-5 sectionOption">
                                <div className="row">
                                    <div className="col actionSide">
                                        <div className="row d-flex flex-column ctn-act">
                                            <div className="col">
                                                <div className="row">
                                                    <div className="col-2 my-auto">
                                                        <div className="d-flex justify-content-end">
                                                            <span id="act-title">Action :</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="px-auto my-auto colorized-act">
                                                            <div className="row">
                                                                <div className="col-8">
                                                                    <div className="d-flex d-inline-flex justify-content-between">
                                                                        <span id="ang-down"><i className="fa fa-angle-down"></i></span>
                                                                        <div class="input-group mx-3">
                                                                            <select className="custom-select" name="action-slct" id="#slct-act">
                                                                                <option selected style={{color:"#9e9e9e"}}></option>
                                                                                <option value="Edit">Edit</option>
                                                                                <option value="Detail">Detail</option>
                                                                                <option value="Delete">Delete</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <span id="act-sep">|</span>
                                                                    <button className="app-btn">Apply</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col d-flex justify-content-center">
                                                <span id="slct-item">0 of 4 item seleced</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col searchSide">
                                        <div className="row d-flex justify-content-center">
                                            <div className="col-8">
                                                <div className="colorized-search">
                                                    <div className="row">
                                                        <div className="d-flex d-inline-flex my-auto">
                                                            <div className="col">
                                                                <span><i className="fa fa-search"></i></span>
                                                            </div>
                                                            <div className="col-8">
                                                                <input id="search-input" type="text" />
                                                            </div>
                                                            <div className="col-3">
                                                                <div className="d-flex d-inline-flex">
                                                                    <span id="act-sep">|</span>
                                                                    <button className="app-btn">Search</button>
                                                                </div>
                                                            </div>
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
                                                    <th scope="col">CLIENT</th>
                                                    <th scope="col">NAME</th>
                                                    <th scope="col">CREATED AT</th>
                                                    <th scope="col">UPDATED AT</th>
                                                    <th scope="col">SHOW CLIENT PROJECT</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><input type="checkbox" name="" id="" /></td>
                                                    <td>Mathieu</td> 
                                                    <td>Personnalisation</td> 
                                                    <td>March 8, 2022, 5:43</td> 
                                                    <td></td> 
                                                    <td>
                                                        <div className="rounded-brd">
                                                            Show Document
                                                        </div>
                                                    </td>                                            
                                                </tr>
                                                <tr>
                                                    <td><input type="checkbox" name="" id="" /></td>
                                                    <td>Mathieu</td> 
                                                    <td>Impression</td> 
                                                    <td>March 8, 2022, 5:43</td> 
                                                    <td></td> 
                                                    <td>
                                                        <div className="rounded-brd">
                                                            Show Document
                                                        </div>
                                                    </td>                                            
                                                </tr>
                                                <tr>
                                                    <td><input type="checkbox" name="" id="" /></td>
                                                    <td>Mathieu</td> 
                                                    <td>Plastification</td> 
                                                    <td>March 8, 2022, 5:43</td> 
                                                    <td></td> 
                                                    <td>
                                                        <div className="rounded-brd">
                                                            Show Document
                                                        </div>
                                                    </td>                                            
                                                </tr>                                       
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Client;
