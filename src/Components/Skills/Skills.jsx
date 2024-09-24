import React from "react";
import "./skills.scss";
import { GoArrowDownRight } from "react-icons/go";
import {
  FaJava,
  FaReact,
  FaDocker,
  FaAws,
  FaGithub,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNetworkWired,
  FaCubes,
} from "react-icons/fa";

import {
  SiSpring,
  SiSpringboot,
  SiHibernate,
  SiMongodb,
  SiRedis,
  SiApachekafka,
  SiKubernetes,
  SiMysql,
} from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills">
        <div className="left">
          <SkillHeader />
          <TechIcons />
        </div>
        <div className="right">
          <Experience />
        </div>
      </div>
    </section>
  );
};

const SkillHeader = () => (
  <div className="tech">
    <div className="skill-header text5">
      <GoArrowDownRight className="arrow" />
      <p>(Tech-Stack)</p>
    </div>
    <p className="text3">
      I specialize in a variety of languages, frameworks, and tools that allow
      me to build robust and scalable applications
    </p>
  </div>
);

const TechIcons = () => {
  const languagesLibraries = [
    { icon: <FaJava />, color: "#007396", name: "Java" },
    { icon: <SiSpring />, color: "#6DB33F", name: "Spring" },
    { icon: <SiSpringboot />, color: "#6DB33F", name: "Spring Boot" },
    { icon: <SiHibernate />, color: "#59666C", name: "Hibernate" },
    { icon: <FaNetworkWired style={{ color: "#4CAF50" }} />, name: "APIs" },
    { icon: <FaCubes style={{ color: "#FF5722" }} />, name: "Microservices" },
    { icon: <FaReact />, color: "#61DAFB", name: "ReactJS" },
    { icon: <FaJs />, color: "#F7DF1E", name: "JavaScript" },
    { icon: <FaHtml5 />, color: "#E34F26", name: "HTML5" },
    { icon: <FaCss3Alt />, color: "#1572B6", name: "CSS3" },
  ];

  const toolsTechnologies = [
    { icon: <SiMysql />, color: "#4479A1", name: "MySQL" },
    { icon: <SiMongodb />, color: "#47A248", name: "MongoDB" },
    { icon: <SiRedis />, color: "#DC382D", name: "Redis" },
    { icon: <SiApachekafka />, color: "#231F20", name: "Apache Kafka" },
    { icon: <FaGithub />, color: "#181717", name: "GitHub" },
    { icon: <FaLinux />, color: "#FCC624", name: "Linux" },
    { icon: <FaDocker />, color: "#2496ED", name: "Docker" },
    { icon: <SiKubernetes />, color: "#326CE5", name: "Kubernetes" },
    { icon: <FaAws />, color: "#FF9900", name: "AWS" },
  ];
  return (
    <div className="tech-icons">
      <div className="tech-row">
        {languagesLibraries.map((tech, index) => (
          <div key={index} className="tech-item">
            <div className="tech-icon" style={{ color: tech.color }}>
              {tech.icon}
            </div>
            <div className="tech-name">
              <p>{tech.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="tech-row">
        {toolsTechnologies.map((tech, index) => (
          <div key={index} className="tech-item">
            <div className="tech-icon" style={{ color: tech.color }}>
              {tech.icon}
            </div>
            <div className="tech-name">
              <span>{tech.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="experience">
      <div className="exp-header text5">
        <GoArrowDownRight className="arrow" />
        <p>(Experience)</p>
      </div>

      <div className="exp-details">
        <p>
          <strong>System Engineer @ Infosys Ltd</strong>
        </p>
        <p className="text5">March 2022 - Nov 2023</p>
        <p className="text3">
          Worked on various backend solutions, focusing on building scalable
          microservices using Spring Boot. Collaborated with cross-functional
          teams to deliver high-quality software solutions.
        </p>
      </div>
    </div>
  );
};

export default Skills;
