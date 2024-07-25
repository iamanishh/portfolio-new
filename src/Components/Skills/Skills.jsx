import React from "react";
import "./skills.scss";
import { techImages } from "../../data/data";

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
                  <div className="img-box">
                    <p className="tiny">java</p>
                    <img src={techImages.java} alt="" width={25} />
                  </div>
                  <div className="img-box">
                    <p className="tiny">springboot</p>
                    <img src={techImages.spring} alt="" width={25} />
                  </div>
                  <div className="img-box">
                    <p className="tiny">sql</p>
                    <img src={techImages.sql} alt="" width={25} />
                  </div>
                  <div className="img-box">
                    <p className="tiny">mongodb</p>
                    <img src={techImages.mongodb} alt="" width={25} />
                  </div>
                </div>
                <div className=" tech-desc">
                  <div className="tech lan">
                    <p className="bold">Language: </p>
                    <p>Java, C/C++, SQL </p>
                  </div>
                  <div className="tech fwork">
                    <p className="bold">Framework: </p>
                    <p>Spring Boot, Hiberanate</p>
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
                  <div className="img-box">
                    <p className="tiny">html</p>
                    <img src={techImages.html} alt="" width={25} />
                  </div>
                  <div className="img-box">
                    <p className="tiny">css</p>
                    <img src={techImages.css} alt="" width={25} />
                  </div>
                  <div className="img-box">
                    <p className="tiny">javascript</p>
                    <img src={techImages.javascript} alt="" width={25} />
                  </div>
                  <div className="img-box">
                    <p className="tiny">react</p>
                    <img src={techImages.react} alt="" width={25} />
                  </div>
                </div>

                <div className=" tech-desc">
                  <div className="tech lan">
                    <p className="bold">Language: </p>
                    <p> HTML, CSS, JavaScript </p>
                  </div>
                  <div className="tech fwork">
                    <p className="bold">Framework: </p>
                    <p>React, Redux</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tools">
              <div className="tool-desc">
                <h3>
                  {" "}
                  {"{"} Tools and Technologies{"}"}
                </h3>
                <p>
                  These are the some of the tools and technologies I often use
                  for my development purposes.
                </p>
              </div>
              <div className="tool-image">
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
    </section>
  );
};

export default Skills;
