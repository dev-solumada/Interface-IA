import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Client from "./components/pages/Client/Client";
import Accueil from "./components/Accueil";
import UpdateClient from "./components/pages/Client/UpdateClient";
import ShowDoc from "./components/pages/Document/ShowDoc";
import Path from "./components/pages/Document/Path";
import AddDoc from "./components/pages/Document/AddDoc";
import UpdateDoc from "./components/pages/Document/UpdateDoc";
import Inspect from "./components/pages/Projet/Inspect";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/home" element={<Accueil />}></Route>
        <Route path="/account/client" element={<Client />}></Route>
        <Route
          path="/account/client/3/change"
          element={<UpdateClient />}
        ></Route>
        <Route path="/account/document/?projet=2" element={<ShowDoc />}></Route>
        <Route path="/path" element={<Path />}></Route>
        <Route path="/account/client/add" element={<AddDoc />}></Route>
        <Route
          path="/account/document/11/change/Utilisateur"
          element={<UpdateDoc />}
        ></Route>
        <Route
          path="/optimum/admin/annotation/11"
          element={<Inspect />}
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
