import React from "react";

import Information from "../../Components/Information/Information";

import Experience from "../../Components/Experience/Experience";

const Aboutme = () => {
  return (
    <>
      <Information />
      <div className="container">
        <Experience />
      </div>
    </>
  );
};

export default Aboutme;
