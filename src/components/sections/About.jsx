"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaReact, FaDocker, FaGit, FaLinux } from "react-icons/fa";
import {
  SiSpringboot,
  SiPostgresql,
  SiHibernate,
  SiApachekafka,
  SiKubernetes,
} from "react-icons/si";

const techStack = [
  { icon: <FaJava color="#f89820" />, name: "Java" },
  { icon: <SiSpringboot color="#6DB33F" />, name: "Spring Boot" },
  { icon: <SiHibernate color="#59666C" />, name: "Hibernate" },
  { icon: "🧩", name: "Microservices" },
  { icon: <FaReact color="#61DBFB" />, name: "React" },
  { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL" },
  { icon: <FaGit color="#f34f29" />, name: "Git" },
  { icon: <FaLinux color="#FCC624" />, name: "Linux" },
  { icon: <FaDocker color="#0db7ed" />, name: "Docker" },
  { icon: <SiKubernetes color="#326ce5" />, name: "Kubernetes" },
  { icon: <SiApachekafka color="#231f20" />, name: "Kafka" },
  // Text-based microservices entry
];

const About = () => {
  return (
    <section className="about" id="about">
      {/* Profile Image */}
      <motion.div
        className="about__image"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src="/images/grid1.png" alt="Manish | Profile" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="about__content"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Intro */}
        <h2>About Me</h2>

        <div className="intro">
          I’m Manish Kumar, a Software Developer with 2 years of experience in
          building end-to-end applications. My main focus is backend development
          using Java and Spring Boot, where I design and build REST APIs, work
          with databases, and contribute to microservices-based systems.
        </div>

        <div className="intro">
          I’ve worked with ReactJS for responsive front-end development, giving
          me a full-stack view. I enjoy solving problems, optimizing
          performance, and building reliable, scalable applications.
        </div>

        <div className="intro">
          I’m passionate about continuous learning and adapting to modern
          practices, always aiming to deliver solutions that make a real impact.
        </div>
        {/* Socials */}
        <div className="about__socials">
          <h3>Connect with me: </h3>
          <div className="social_links">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href="https://x.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </div>
        </div>
        {/* Tech Stack */}
        <div className="about__stack">
          <motion.hr
            className="line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <h3>Tech Stack</h3>
          <div className="stack__rows">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                className="stack__item"
                whileHover={{ y: -3, scale: 1.05 }}
              >
                {tech.icon}
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Experience */}
        <div className="about__experience">
          <motion.hr
            className="line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <h3>Experience</h3>
          <div className="experience__card">
            <h4>Software Developer @ Infosys</h4>
            <span>March 2022 – Nov 2023</span>
            <ul>
              <li>
                Maintained and enhanced backend services for logistics
                applications using Java, Spring Boot, and REST APIs, ensuring
                smooth day-to-day operations.
              </li>

              <li>
                Fixed production issues, optimized queries, and improved
                application performance and stability for critical business
                workflows.
              </li>

              <li>
                Collaborated with senior developers in requirement analysis, bug
                fixing, and feature enhancements, gaining hands-on experience in
                real client projects.
              </li>

              <li>
                Worked with SQL/PostgreSQL, Git, and deployment processes,
                following industry best practices.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
