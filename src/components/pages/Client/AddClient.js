import React from "react";
import Header from "./../../nouveau-header/Header";
import Sidebar from "./../../nouveau-header/Sidebar";
import Topbar from "./../../nouveau-header/Topbar";

import "./AddClient.css";

const AddClient = () => {
   return( 
        <div className="container-fluid d-flex flex-column .main-container">
            <Header />
            <div className="row d-flex d-inline-flex side-topbar">
                <div className="col-md-2 col-2 sidebar-color">
                    <Sidebar />
                </div>
                <div className="col-md-12 col-12 main-content">
                    <div className="row">
                        <div className="col-12 recent-section">
                            <Topbar />
                        </div>
                    </div>
                </div>
                <div className="row formSide">
                    <div className="container p-3">
                        <div className="row d-flex flex-column align-item-center">
                            <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-5 mx-auto">
                                <div className="mb-3">
                                    <label for="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-5 mx-auto">
                                <div className="mb-3">
                                    <label for="passowrd" className="form-label">passowrd 1</label>
                                    <div className="input-group">
                                        <input type="password" className="form-control rounded-right" id="password" />
                                        <span className="input-group-text"><i className="fa fa-eye"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-5 mx-auto">
                                <div className="mb-3">
                                    <label for="passowrd" className="form-label">passowrd 2</label>
                                    <div className="input-group">
                                        <input type="password" className="form-control password-input" id="password" />
                                        <span className="input-group-text"><i className="fa fa-eye"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-5 mx-auto">
                                <div class="mb-3">
                                    <div class="row">
                                        <div class="d-flex d-inline-flex">
                                            <div class="col-3">
                                                <span>Created At</span>
                                            </div>
                                            <div class="col-9">
                                                <div class="mb-3">
                                                    <div class="bootstrap-timepicker">
                                                        <div class="form-group">
                                                        <label>Date :</label>
                                                        <div class="input-group date" id="timepicker" data-target-input="nearest">
                                                            <input type="date" class="form-control datetimepicker-input" data-target="#timepicker" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="bootstrap-timepicker">
                                                        <div class="form-group">
                                                        <label>Time :</label>
                                                        <div class="input-group date" id="timepicker" data-target-input="nearest">
                                                            <input type="time" class="form-control datetimepicker-input" data-target="#timepicker" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-5 mx-auto">
                                <div class="mb-3">
                                    <div class="row">
                                        <div class="d-flex d-inline-flex">
                                            <div class="col-3">
                                                <span>Updated At</span>
                                            </div>
                                            <div class="col-9">
                                                <div class="mb-3">
                                                    <div class="bootstrap-timepicker">
                                                        <div class="form-group">
                                                        <label>Date :</label>
                                                        <div class="input-group date" id="timepicker" data-target-input="nearest">
                                                            <input type="date" class="form-control datetimepicker-input" data-target="#timepicker" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="bootstrap-timepicker">
                                                        <div class="form-group">
                                                        <label>Time :</label>
                                                        <div class="input-group date" id="timepicker" data-target-input="nearest">
                                                            <input type="time" class="form-control datetimepicker-input" data-target="#timepicker" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-5 mx-auto">
                                <div class="mb-3">
                                    <div class="row d-fex d-flex-inline">
                                        <div className="col">
                                            <div className="row d-flex justify-content-center">
                                                <button class="btn btn-sm saveButton">Save And Add Another</button>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row d-flex justify-content-center">
                                                <button class="btn btn-sm saveButton">Save And continue Editing</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-5 mx-auto">
                                <hr/>
                            </div>
                            <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-5 mx-auto">
                                <div class="mt-3">
                                    <div class="row">
                                        <div class="d-flex d-inline-flex justify-content-end">
                                            <button class="btn btn-sm btn-outline-success save">
                                                <span class="save-ico"><i class="fa fa-save"></i></span>
                                                <span class="save-text">Save User</span>
                                            </button>
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

export default AddClient;
