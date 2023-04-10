import React from "react";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";

//IMPORT ROUTES
import { Route, Routes } from "react-router-dom";

// IMPORT COMPONENTS
import Home from "../components/pages/home/Home";
import Works from "../components/pages/works/Works";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
