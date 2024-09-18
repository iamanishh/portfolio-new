import React from "react";
import "./project.scss";

import { projects } from "../../data/data";
import capture from "../../assets/images/sushi3.jpg";
import { ImArrowUpRight2 } from "react-icons/im";

const Project = () => {
  return (
    <section id="projects">
      <div className="container projects">
        <ProjectHeading />
        <ProjectCard projects={projects} />
      </div>
    </section>
  );
};

const ProjectHeading = () => (
  <div className="projects-header">
    <p className="t-top">Projects</p>
    <h3 className="title2">Check out my latest work</h3>
    <p>
      I have worked on a variety of projects from simple website to complex app.
      Here are a few of my favourites:-
    </p>
    <img src="./arrowe.png" alt="arrow" className="ImgHead" />
  </div>
);

const ProjectCard = ({ projects }) => (
  <div className="project-cards">
    {projects.map((project, index) => (
      <ProjectCardItem key={index} project={project} />
    ))}
  </div>
);

const ProjectCardItem = ({ project }) => (
  <div className="card">
    <div className="card-image">
      <img src={capture} alt="" />
    </div>
    <div className="card-content">
      <h4 className="subtitle">{project.title}</h4>
      <div className="f-all">
        <p className="desc-sm">March 2024</p>
        <p className="card-tech ">{project.technology}</p>
      </div>
      <p className="desp">{project.description}</p>
      <a href="#" className="card-link btn1">
        View details &nbsp;
        <ImArrowUpRight2 />
      </a>
    </div>
  </div>
);

export default Project;
