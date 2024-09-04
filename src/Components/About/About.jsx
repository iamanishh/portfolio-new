import React from "react";
import "./about.scss";
import {
  FaJava,
  FaReact,
  FaDocker,
  FaAws,
  FaGithub,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import {
  SiSpring,
  SiSpringboot,
  SiHibernate,
  SiMongodb,
  SiRedis,
  SiApachekafka,
  SiKubernetes,
  SiMysql,
} from "react-icons/si";

const About = () => {
  // Icons for languages, libraries, frameworks
  const languagesLibraries = [
    <FaJava />,
    <SiSpring />,
    <SiSpringboot />,
    <SiHibernate />,
    <FaReact />,
    <FaJs />,
    <FaHtml5 />,
    <FaCss3Alt />,
  ];

  // Icons for tools and technologies
  const toolsTechnologies = [
    <SiMysql />,
    <SiMongodb />,
    <SiRedis />,
    <SiApachekafka />,
    <FaGithub />,
    <FaLinux />,
    <FaDocker />,
    <SiKubernetes />,
    <FaAws />,
  ];

  return (
    <section id="about">
      <div className="container about">
        <div className="about-heading">
          <p className="section-title t-top">About Me</p>
        </div>

        <div className="about-content">
          <div className="intro">
            <h2 className="intro-heading title2">
              Aware of the accomplishments, <br />
              awake to achieve more.
            </h2>
            <p className="intro-text">
              I'm a backend developer with expertise in Java, Spring Boot, and
              React. My skills include:
            </p>
            <ul className="skills-list">
              <li>Creating end-to-end solutions</li>
              <li>Working with relational databases</li>
              <li>Building RESTful APIs</li>
              <li>Implementing microservices architecture</li>
              <li>Using Docker and Kubernetes</li>
            </ul>
          </div>

          <div className="tech">
            <h3 className="section-subtitle">Tech Stack</h3>
            <p>
              <strong>Languages / Libraries / Frameworks:</strong> Java, Spring
              Core, Spring Boot, Hibernate, C/C++, JavaScript, HTML, CSS,
              React.js, Node.js, MySQL, MongoDB, Redis
            </p>
            <p>
              <strong>Tools and Technologies:</strong> Git, GitHub, Linux,
              Docker, Kubernetes, AWS
            </p>

            <div className="tech-icons">
              <div className="tech-row">
                {languagesLibraries.map((icon, index) => (
                  <div key={index} className="tech-icon">
                    {icon}
                  </div>
                ))}
              </div>
              <div className="tech-row">
                {toolsTechnologies.map((icon, index) => (
                  <div key={index} className="tech-icon">
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="experience">
            <h3 className="section-subtitle">Experience</h3>
            <div className="experience-details">
              <p>
                <strong>System Engineer @ Infosys Ltd</strong>
              </p>
              <p className="experience-duration">March 2022 - Nov 2023</p>
              <p className="experience-description">
                Worked on various backend solutions, focusing on building
                scalable microservices using Spring Boot. Collaborated with
                cross-functional teams to deliver high-quality software
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
