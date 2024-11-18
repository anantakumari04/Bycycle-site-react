import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cars from "./pages/Cars";
import Services from "./pages/Services";
import Revieww from "./pages/Revieww";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/services" element={<Services />} />
          <Route path="/revieww" element={<Revieww />} />
         
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
