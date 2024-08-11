import React from "react";
import "./skills.scss";
import { techImages } from "../../data/data";
import skill from "../../assets/images/skill.png";

const Skills = () => {
  return (
    <section id="skill">
      <div className="container skill">
        <div className="skill__content">
          <div className="s-top">
            <p className="tiny-md">
              &lt; the list of technologies I am familiar with &gt;
            </p>
            <h1>Skillset</h1>
          </div>

          <div className="s-bottom">
            <div className="b-images">
              <img src={skill} alt="skill-image" />
            </div>
            <div className="techstack">
              <div className="s-back">
                <h3>
                  {" "}
                  {"{"} Backend Development {"}"}
                </h3>
                <p>
                  This is where i spend most of my time. I enjoy working with
                  APIs, implementing logic and optimising databases.
                </p>
                <div className="tech-image">
                  <img src={techImages.java} alt="" width={25} />
                  <img src={techImages.spring} alt="" width={25} />
                  <img src={techImages.cplus} alt="" width={25} />
                  <img src={techImages.sql} alt="" width={25} />
                  <img src={techImages.mongodb} alt="" width={25} />
                </div>
                <div className=" tech-desc">
                  <div className="tech lan">
                    <p className="bold">Language: </p>
                    <p>Java, C/C++, SQL </p>
                  </div>
                  <div className="tech fwork">
                    <p className="bold">Library/Framework: </p>
                    <p>Spring Boot, Node.js</p>
                  </div>
                  <div className="tech db">
                    <p className="bold">Databases: </p>
                    <p>MySQL, MongoDB</p>
                  </div>
                </div>
              </div>
              <div className="s-front">
                <h3>
                  {" "}
                  {"{"} Frontend Development {"}"}
                </h3>
                <p>
                  Although my experience is primarily in backend, I am equally
                  intrigued by frontend field.
                </p>

                <div className="tech-image">
                  <img src={techImages.html} alt="" width={25} />
                  <img src={techImages.css} alt="" width={25} />
                  <img src={techImages.javascript} alt="" width={25} />
                  <img src={techImages.typescript} alt="" width={25} />
                  <img src={techImages.react} alt="" width={25} />
                </div>

                <div className=" tech-desc">
                  <div className="tech lan">
                    <p className="bold">Language: </p>
                    <p> HTML, CSS, JavaScript </p>
                  </div>
                  <div className="tech fwork">
                    <p className="bold">Library/Framework: </p>
                    <p>React, Redux</p>
                  </div>
                </div>
              </div>
              <div className="s-tools">
                <h3>
                  {" "}
                  {"{"} Tools and Technologies {"}"}
                </h3>
                <p>
                  These are the some of the tools and technologies I often use
                  for my development purposes
                </p>

                <div className="tech-image">
                  <img src={techImages.github} alt="" width={25} />
                  <img src={techImages.aws} alt="" width={25} />
                  <img src={techImages.linux} alt="" width={25} />
                  <img src={techImages.docker} alt="" width={25} />
                  <img src={techImages.kubernetes} alt="" width={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
