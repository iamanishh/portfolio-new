import React from "react";
import "./projectcard.scss";
import { projects } from "../../data/data";
import capture from "../../assets/images/sushi3.jpg";
import { ImArrowUpRight2 } from "react-icons/im";

const ProjectCard = () => {
  return (
    <section id="project">
      <div className=" container project">
        <div className="project__top">
          <div className="heading">
            <div className="p-title">
              <h3 className="text-3xl">My Projects</h3>
            </div>
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
                  <h3 className="card-title text-2xl">{project.title}</h3>
                  <div className="fbet">
                    <p className="technology">{project.technology}</p>
                    <p className="desc-sm">March 2024</p>
                  </div>
                  <p className="desc-md">{project.description}</p>
                  <p className="t-top bt">
                    Know more &nbsp;
                    <ImArrowUpRight2 />
                  </p>
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
