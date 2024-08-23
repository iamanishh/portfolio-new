import React from "react";
import "./skills.scss";
import { SiTicktick } from "react-icons/si";
import TechIcons from "./TechIcons";

const skillsList = [
  "Backend development with Java and Spring Boot",
  "Database management with SQL and MongoDB",
  "Microservices architecture",
  "RESTful API design and implementation",
  "Cloud services and deployment with AWS",
  "Containerization and orchestration with Docker & Kubernetes",
  // "Continuous Integration/Continuous Deployment (CI/CD)",
  // "Version control with Git and GitHub",
];

const Skills = () => {
  return (
    <section id="skill">
      <div className="container skill">
        <div className="heading">
          <p> &lt; Skills &gt;</p>
          <h2>Skills I possess as a specialist</h2>
        </div>
        <div className="skill__content">
          <div className="desc">
            <ul>
              {skillsList.map((skill, index) => (
                <div className="list">
                  <SiTicktick className="tick" />
                  <li key={index}> {skill} </li>
                </div>
              ))}
            </ul>
          </div>
          <div className="images">
            <TechIcons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
