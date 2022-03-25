import React from "react";
import Header from "./../../nouveau-header/Header";
import Sidebar from "./../../nouveau-header/Sidebar";
import Topbar from "./../../nouveau-header/Topbar";
import "./UpdateDoc.css"
import { Link } from 'react-router-dom';

const UpadateClient = () => {
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
              <div class="row d-flex tab-edit-doc">
                <div class="mb-3 row">
                  <label for="staticClient" class="col-sm-2 col-form-label d-inline-flex justify-content-end ">Client : </label>
                  <div class="col-sm-7 col-md-5">
                    <select class="form-select " aria-label="Default select example">
                      <option selected>Clara</option>
                      <option value="2">Mathieu</option>
                      <option value="3">Mark</option>
                    </select>
                  </div>
                  <div class="col-sm-2 col-md-3">
                    <Link to="/account/client/add" className="history">
                      <span className="fa-add-doc  "> History</span>
                    </Link>
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="inputProjet" class="col-sm-2 col-form-label d-inline-flex justify-content-end ">Projet : </label>
                  <div class="col-sm-7 col-md-7">
                    <select class="form-select" aria-label="Default select example">
                      <option selected>Impression</option>
                      <option value="1">Plastification</option>
                      <option value="2">Personnalisation</option>
                    </select>
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="inputName" class="col-sm-2 col-form-label d-inline-flex justify-content-end">Name : </label>
                  <div class="col-sm-7">
                    <input type="text" class="form-control" id="inputNamee" placeholder="test" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="inputPath" class="col-sm-2 col-form-label d-inline-flex justify-content-end">Path : </label>
                  <div class="col-sm-3">
                    <input type="text" class="form-control" id="inputPath" placeholder="test.pdf" />
                  </div>
                  <div class="col-sm-2">
                    <label for="inputClear" class="">Clear : </label>
                    <input type="checkbox" id="inputPath" />
                  </div>
                  <div class="col-sm-4">
                    <input type="file" class="form-control" id="inputPath" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="inputImage" class="col-sm-2 col-form-label d-inline-flex justify-content-end">Image annotation : </label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputImage" placeholder="table.png" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="inputType" class="col-sm-2 col-form-label d-inline-flex justify-content-end">Type : </label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputType" placeholder="['DI']" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="inputAccuracy" class="col-sm-2 col-form-label d-inline-flex justify-content-end">Accuracy : </label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputAccuracy" placeholder="0.7" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="inputContentAnnotation" class="col-sm-2 col-form-label d-inline-flex justify-content-end">Content Annotation : </label>
                  <div class="col-sm-10">
                    <input type="textArea" class="form-control" id="inputContentAnnotation" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="inputDataAnotorious" class="col-sm-2 col-form-label d-inline-flex justify-content-end">Data anotorious : </label>
                  <div class="col-sm-10">
                    <input type="textArea" class="form-control" id="inputDataAnotorious" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="inputCreateAt" class="col-sm-2 col-form-label d-inline-flex justify-content-end">Create at : </label>
                  <div class="col-sm-10">
                    <input type="date" class="form-control" id="inputCreateAt" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="inputTime" class="col-sm-2 col-form-label"></label>
                  <div class="col-sm-10">
                    <input type="time" class="form-control" id="inputTime" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="inputTime" class="col-sm-2 col-form-label"></label>
                  <div class="col-sm-10">
                    Note: You are 3 hours ahead of server time.
                  </div>
                </div>

                <div class="mb-3 row">
                  <label for="inputCreateAt" class="col-sm-2 col-form-label d-inline-flex justify-content-end">Updated at : </label>
                  <div class="col-sm-10">
                    <input type="date" class="form-control" id="inputCreateAt" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="inputTime" class="col-sm-2 col-form-label"></label>
                  <div class="col-sm-10">
                    <input type="time" class="form-control" id="inputTime" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="inputTime" class="col-sm-2 col-form-label"></label>
                  <div class="col-sm-10">
                    Note: You are 3 hours ahead of server time.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
};

export default UpadateClient;
