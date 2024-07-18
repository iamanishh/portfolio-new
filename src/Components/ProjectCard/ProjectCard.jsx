import React from "react";
import "./projectcard.scss";
import { projects } from "../../data/data";

import { BsArrowUpRightSquare } from "react-icons/bs";

const ProjectCard = () => {
  return (
    <section className="project">
      <div className="project__top">
        <div className="heading">
          <h1>Peek into my</h1>
          <h1>latest projects</h1>
          <p>
            Here are some of the current projects I've been working on. I'm
            always working on something new, so check back often!
          </p>
        </div>

        {/* <div className="filter">
          <p>All projects</p>
          <p>Frontend</p>
          <p>Backend</p>
        </div> */}

        <div className="globe"></div>
      </div>

      <div className="project__bottom">
        <div className="project-cards">
          {projects.map((project, index) => (
            <div className="card" key={index}>
              <h4 className="card-title">{project.title}</h4>
              <div className="image"></div>

              <p className="description">{project.description}</p>

              <div className="tech">
                <p className="technology">{project.technology}</p>
                <div className="git">
                  <BsArrowUpRightSquare />
                </div>
              </div>
              {/* <hr /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
