import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Navbar from "../Compnents/Navbar/Navbar";
import Footer from "../Compnents/Footer/Footer";
import Choose from "../Pages/Choose/Choose";
import Portfolio from "../Pages/Portfolio/Portfolio";
function ReactRouter() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/choose" element={<Choose/> }></Route>
          <Route path="/portfolio" element={<Portfolio/> }></Route>
          <Route path="/*" element={<Home />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default ReactRouter;
