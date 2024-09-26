import React from "react";
import { GoArrowDownRight } from "react-icons/go";

const Experience = () => {
  return (
    <div className="experience">
      <div className="experience-header text5">
        <GoArrowDownRight className="arrow-icon" />
        <p>(Experience)</p>
      </div>
      <div className="experience-details">
        <p>
          <strong>System Engineer @ Infosys Ltd</strong>
        </p>
        <p>March 2022 - Nov 2023</p>
        <p className="text3">
          Built scalable microservices using Spring Boot, collaborating with
          cross-functional teams to deliver high-quality software solutions.
        </p>
      </div>
    </div>
  );
};

export default React.memo(Experience);
