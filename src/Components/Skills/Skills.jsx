import React from "react";
import "./skills.scss";
import TechIcons from "./TechIcons";
import skillImg from "../../assets/images/skill.png";

const Skills = () => {
  const skills = [
    {
      id: 1,

      title: "#Languages/ Library/ Frameworks",
      intro:
        "This is where I spend most of time working with APIs, implementing business logic and optimising data processing.",
      rowsToShow: [0, 1],
    },

    {
      id: 2,

      title: "#Tools & Technologies",
      intro:
        "These are some of the additional tools and technologies I frequently use to propel my development.",
      rowsToShow: [2, 3],
    },
  ];

  return (
    <section id="skill">
      <div className="container skill">
        <div className="skill__heading">
          <img src={skillImg} alt="skill-img" width={25} />
          <h4>Skills and Experiences</h4>
        </div>
        <div className="skill__content">
          {skills.map(({ id, title, intro, rowsToShow }) => (
            <div key={id} className="card">
              <h3>{title}</h3>
              <p className="intro">{intro}</p>
              <TechIcons rowsToShow={rowsToShow} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
