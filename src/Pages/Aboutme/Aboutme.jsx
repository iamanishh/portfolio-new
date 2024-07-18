import React from "react";
import College from "../../Components/College/College";
import Information from "../../Components/Information/Information";
import Navbar from "../../Components/Navbar/Navbar";
import Experience from "../../Components/Experience/Experience";

const Aboutme = () => {
  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <Information />
      <div className="container">
        <Experience />
        <College />
      </div>
    </>
  );
};

export default Aboutme;
