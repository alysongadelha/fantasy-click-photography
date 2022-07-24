import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Services from "./Pages/Services";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicos" element={<Services />} />
      <Route path="/portifolio" element={<Portfolio />} />
      <Route path="/sobre" element={<About />} />
    </Routes>
  );
};

export default Router;
