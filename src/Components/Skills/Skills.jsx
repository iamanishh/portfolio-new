import React from "react";
import "./skills.scss";
import { GoArrowDownRight } from "react-icons/go";

import TechIcons from "./TechIcons";
import Experience from "./Experience";

const Skills = () => {
  return (
    <div id="skills">
      <div className="skills">
        <SkillHeader />
        <TechIcons />

        <Experience />
      </div>
    </div>
  );
};

const SkillHeader = () => (
  <div className="skill-header ">
    <div className="skill-head text5">
      <GoArrowDownRight className="arrow" />
      <p>(Tech-Stack)</p>
    </div>

    <p className="text3">
      I specialize in a variety of languages, frameworks, and tools that allow
      me to build robust and scalable applications
    </p>
  </div>
);

export default Skills;
