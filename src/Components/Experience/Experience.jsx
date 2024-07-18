import React from "react";
import "./experience.scss";

const Experience = () => {
  return (
    <div className="experience">
      <div className="experience__heading">
        <p>Work</p>
        <p>Experience</p>
      </div>

      <div className="experience__sect">
        <div className="experience__sect-pos">
          <p>Infosys Ltd</p>
          <h2 className="sub">Backend Developer</h2>
          <ul>
            <li>
              Developed microservices using Java, Spring Boot and deployed them
              using Docker containers.
            </li>
            <li>
              Designed and implemented RESTful APIs for various platform
              features.
            </li>
            <li>
              Integrated with cloud providers such as AWS to manage
              infrastructure resources.
            </li>
            <li>
              Collaborated with DevOps engineers to automate deployment and
              testing processes.
            </li>
          </ul>
        </div>
        <div className="experience__sect-time">
          <p>
            March 2022 - November 2023 <span>(Bhubneshwar)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
