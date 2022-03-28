import React from "react";
import Header from "./../../nouveau-header/Header";
import Sidebar from "./../../nouveau-header/Sidebar";
import Topbar from "./../../nouveau-header/Topbar";


import "./../../../../node_modules/font-awesome/css/font-awesome.min.css";
import "./Client.css";



const Client = () => {
    return(
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
                    <div className="row row-cols-1 row-col-sm-2 row-cols-md-2 row-cols-lg-2 mb-5 tab-act">
                        <div className="actionSide col">
                            <div className="row">
                                <div className="col d-flex flex-column">
                                    <div className="up row">
                                        <div className="col-9 col-sm-12 col-md-12 col-lg-8 mx-auto">
                                            <div className="row">
                                                <div className="col d-flex d-inline-flex justify-content-center">
                                                    <div className="col">
                                                        <div className="d-flex max-auto align-center justify-content-center">
                                                            <div className="mt-2">
                                                                <span>Action:</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-10 colorized">
                                                        <div className="row my-auto">
                                                            <div className="d-flex mt-1 d-inline-flex justify-content-center">
                                                                <div className="col mt-1 down">
                                                                    <span id="ico-down"><i className="fa fa-angle-down"></i></span>
                                                                </div>
                                                                <div className="col-7">
                                                                    <div className="select">
                                                                        <select class="form-select form-select-sm text-center slct" width="100%" aria-label=".form-select-sm example">
                                                                            <option disabled selected>-----------</option>
                                                                            <option value="1">Edit</option>
                                                                            <option value="2">Remove</option>
                                                                            <option value="3">Detail</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-3">
                                                                    <div class="apply d-flex d-inline-flex justify-content-start">
                                                                        <span id="act-sep">|</span>
                                                                        <button id="btn-apply">Apply</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="under row justify-content-center">
                                        <div className="col-8 col-sm-10 col-md-12 col-lg-10 d-flex d-inline-flex justify-content-end">
                                            <span>0 of 4 items selected</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="searchSide col">
                            <div className="row">
                                <div className="col d-flex flex-column">
                                    <div className="up row">
                                        <div className="col-9 col-sm-12 col-md-12 col-lg-10 mx-auto">
                                            <div className="row">
                                                <div className="col d-flex d-inline-flex justify-content-center">
                                                    <div className="col-10 colorized">
                                                        <div className="row">
                                                            <div className="col-9">
                                                                <div className="d-flex d-inline-flex">
                                                                    <div className="m-2">
                                                                        <span id="src-ico"><i class="fa fa-search"></i></span>
                                                                    </div>
                                                                    <div className="d-block mt-1">
                                                                        <div className="input-group input-group-sm input-container">
                                                                            <input className="form-control input-search" type="search" name="" id="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-2">
                                                                <div className="d-flex d-inline-flex mt-1">
                                                                    <div className="sep-search">
                                                                        <span id="act-sep">|</span>
                                                                    </div>
                                                                    <input type="search" id="btn-apply" name="search" />
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
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-8 col-lg-10 justify-content-center mx-auto">
                            <div class="row row-table">
                                <table class="table">
                                    <thead class="table-light">
                                        <tr>
                                            <th><input type="checkbox" name="quickAct" id="" /></th>
                                            <th>CLIENT</th>
                                            <th>NAME</th>
                                            <th>CREATED AT</th>
                                            <th>UPDATED AT</th>
                                            <th>SHOW CLIENT PROJECT</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input type="checkbox" name="" id="" /></td>
                                            <td>Mathieu</td>
                                            <td>Personalisation</td>
                                            <td>March 8, 2022, 5:43</td>
                                            <td></td>
                                            <td>Show Document</td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" name="" id="" /></td>
                                            <td>Mathieu</td>
                                            <td>Personalisation</td>
                                            <td>March 8, 2022, 5:43</td>
                                            <td></td>
                                            <td>Show Document</td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" name="" id="" /></td>
                                            <td>Mathieu</td>
                                            <td>Personalisation</td>
                                            <td>March 8, 2022, 5:43</td>
                                            <td></td>
                                            <td>Show Document</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="row">
                                <div class="col justify-content-end">
                                    <button id="btn-add" class="d-flex d-inline-flex">
                                        <span class="add-ico"><i class="fa fa-plus-circle"></i></span>
                                        <span class="add-txt">Add Client</span>
                                    </button>
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
