import React from "react";
import "./skills.scss";
import skill from "../../assets/images/skill.png";

const Skills = () => {
  return (
    <section id="skill">
      <div className="container skill">
        <div className="skill__top">
          <h1>SKILLS</h1>
          <div className="skill__top-abb">
            <p>
              The skills, tools and <br />
              technologies I play with <span>(Techstack )</span>
            </p>
          </div>
        </div>

        <div className="skill__bottom">
          <div className="skill__bottom-img">
            <img src={skill} alt="skill" />
          </div>
          <div className="skill__bottom-stack">
            <div className="tech">
              <p>Languages</p>
              <ul>
                <li>JAVA</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>C/C++</li>
                <li>HTML / CSS</li>
              </ul>
            </div>

            <div className="tech">
              <p>Libraries/ Frameworks/ Databases</p>
              <ul>
                <li>Spring Boot</li>
                <li>React</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
            </div>

            <div className="tech">
              <p>Tools & Technologies</p>
              <ul>
                <li>Git & GitHub</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
