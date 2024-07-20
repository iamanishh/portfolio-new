import React from "react";
import "./hero.scss";
import NavBar from "../Navbar/Navbar";
import Header from "../Header/Header";

const Hero = () => {
  return (
    <div className="hero">
      <NavBar />
      <Header />
    </div>
  );
};

export default Hero;
