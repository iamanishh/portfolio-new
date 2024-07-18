import React from "react";
import NavBar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import About from "../../Components/About/About";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Skills from "../../Components/Skills/Skills";

const Home = () => {
  return (
    <div className="container">
      <NavBar />
      <Header />
      <About />
      <ProjectCard />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
