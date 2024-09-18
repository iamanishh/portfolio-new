import React from "react";
import Project from "./Components/Work/Project";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Project />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
