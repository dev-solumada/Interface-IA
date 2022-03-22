import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Topbar from "./Topbar";

const Accueil = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      Accueil
      <Topbar />
      <Footer />
    </div>
  );
};

export default Accueil;
