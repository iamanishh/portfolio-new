import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Project from "./Components/Work/Project";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/*" element={<h1>Error 404</h1>} /> */}
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
