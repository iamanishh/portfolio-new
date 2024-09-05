import React from "react";

import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
// import Projects from "../../Components/ProjectCard/Projects";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <ProjectCard />
      {/* <Projects /> */}

      <About />

      <Contact />
      <Footer />
    </>
  );
};

export default Home;
