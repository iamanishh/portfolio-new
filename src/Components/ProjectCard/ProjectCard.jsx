import React from "react";
import "./projectcard.scss";
import { projects } from "../../data/data";

import { ImArrowUpRight2 } from "react-icons/im";

import capture from "../../assets/images/ecommerce.avif";

const ProjectCard = () => {
  return (
    <section id="project">
      <div className=" container project">
        <div className="project__top">
          <div className="heading">
            <p className="tiny">projects</p>
            <h3>Peek into my latest projects</h3>

            <p>
              Here are some of the current projects I've been working on. I'm
              always working on something new, so check back often!
            </p>
          </div>
        </div>

        <div className="project__bottom">
          <div className="project-cards">
            {projects.map((project, index) => (
              <div className="card " key={index}>
                <div className="image">
                  <img src={capture} alt="" />
                </div>

                <div className="desc-box">
                  <div className="fbet">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="technology">{project.technology}</p>
                  </div>
                  <div className="fbet">
                    <p className="description">{project.description}</p>
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
