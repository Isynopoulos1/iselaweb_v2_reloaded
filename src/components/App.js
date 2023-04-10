import React from "react";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";

//IMPORT ROUTES
import { Route, Routes } from "react-router-dom";

// IMPORT COMPONENTS
import Home from "../components/pages/home/Home";
import Works from "../components/pages/works/Works";
import Contact from "../components/pages/contact/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
