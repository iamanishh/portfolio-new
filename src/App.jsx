import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutMe from "./pages/about/about-me";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import WorkDetails from "./pages/work/work-detail";
import ContactMe from "./pages/contact/contact-me";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/work" element={<WorkDetails />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
