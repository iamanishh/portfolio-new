import React from "react";
import College from "../../Components/College/College";
import Information from "../../Components/Information/Information";

import Experience from "../../Components/Experience/Experience";

const Aboutme = () => {
  return (
    <>
      <Information />
      <div className="container">
        <Experience />
        <College />
      </div>
    </>
  );
};

export default Aboutme;
