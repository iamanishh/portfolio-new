import React from "react";
import "./projectcard.scss";
import { projects } from "../../data/data";

import { ImArrowUpRight2 } from "react-icons/im";

import projectImg from "../../assets/images/proj.svg";
import capture from "../../assets/images/Capture.webp";

const ProjectCard = () => {
  return (
    <section id="project">
      <div className=" container project">
        <div className="project__top">
          <div className="heading">
            <h1>Peek into my</h1>
            <h1>latest projects</h1>
            <p>
              Here are some of the current projects I've been working on. I'm
              always working on something new, so check back often!
            </p>
          </div>
          <div className="projImage">
            <img src={projectImg} alt="project" />
          </div>
        </div>

        <div className="project__bottom">
          <div className="project-cards">
            {projects.map((project, index) => (
              <div className="card " key={index}>
                <h4 className="card-title">
                  <span className="tiny-md">{project.id}</span> {project.title}
                </h4>
                <div className="image">
                  <img src={capture} alt="" />
                </div>

                <div className="desc-box">
                  <p className="description">{project.description}</p>

                  <div className="tech">
                    <p className="technology">{project.technology}</p>
                    <div className="git">
                      <ImArrowUpRight2 />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
