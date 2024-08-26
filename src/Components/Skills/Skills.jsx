import React from "react";
import "./skills.scss";
import TechIcons from "./TechIcons";
import spoiler from "../../assets/images/spoiler.gif";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { HiMiniCodeBracket } from "react-icons/hi2";

const Skills = () => {
  const skills = [
    {
      id: 1,
      Icon: PiBracketsCurlyBold,
      title: "Languages and Frameworks",
      intro:
        "This is where I spend most of time I enjoy working with APIs, implementing business logic and optimising data processing.",
      rowsToShow: [0, 1],
    },

    {
      id: 2,
      Icon: HiMiniCodeBracket,
      title: "Tools and Technologies",
      intro:
        "These are some of the additional tools and technologies I frequently use to propel my development.",
      rowsToShow: [2, 3],
    },
  ];

  return (
    <section id="skill">
      <div className="container skill">
        <h4 className="skill__heading">Skills</h4>
        <div className="skill__content">
          {skills.map(({ id, Icon, title, intro, rowsToShow }) => (
            <div key={id} className="card">
              <div className="head">
                <Icon className="tech" />
                <h3>{title}</h3>
                <img src={spoiler} alt="img" width={50} />
              </div>
              <p>{intro}</p>
              <TechIcons rowsToShow={rowsToShow} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
