/* eslint-disable react/prop-types */
import React from "react";
import "./project.scss";

import { projects } from "../../data/data";
import capture from "../../assets/images/sushi3.jpg";
import { ImArrowUpRight2 } from "react-icons/im";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <section id="work">
      <div className="container projects">
        <ProjectHeading />
        <ProjectCard projects={projects} />
      </div>
    </section>
  );
};

const ProjectHeading = () => (
  <div className="projects-header">
    <h2 className="section-heading">
      Turning <span className="curs">ideas</span> <br />
      <span className="curs">into</span> reality
    </h2>
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
      <div className="f-all">
        <p className="subtitle">{project.title}</p>
        <p className="text7">March 2024</p>
      </div>
      <p className="textt4">{project.description}</p>
      <p className="text6 ">{project.technology}</p>
      <Link
        href="https://github.com/iamanishh"
        // target="_blank"
        className="card-link btn1"
      >
        View details &nbsp;
        <ImArrowUpRight2 />
      </Link>
    </div>
  </div>
);

export default Project;
