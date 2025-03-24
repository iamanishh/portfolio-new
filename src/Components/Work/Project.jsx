import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ImArrowUpRight2 } from "react-icons/im";
import { projects } from "../../data/data";
import defaultImage from "../../assets/images/sushi3.jpg";
import "./project.scss";

const Project = () => {
  return (
    <section id="projects">
      <div className="container">
        <ProjectHeading />
        <ProjectCards projects={projects} />
      </div>
    </section>
  );
};

const ProjectHeading = () => {
  return (
    <motion.div
      className="projects-header"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-heading">
        Turning{" "}
        <motion.span
          className="accent-text"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          ideas
        </motion.span>{" "}
        <br />
        <motion.span
          className="accent-text"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          into
        </motion.span>{" "}
        reality
      </h2>

      <p className="section-subheading">
        I have worked on a variety of projects from simple websites to complex
        applications. Here are a few of my favorites:
      </p>

      <motion.img
        src="./arrowe.png"
        alt="arrow"
        className="arrow-icon"
        animate={{
          y: [0, 10, 0],
          rotate: -150,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

const ProjectCards = ({ projects }) => {
  return (
    <motion.div
      className="projects-grid"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
      viewport={{ once: true }}
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </motion.div>
  );
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  // Use project image if available, otherwise use default
  const imageUrl = project.image || defaultImage;

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        y: -10,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="card-image-container">
        <motion.img
          src={imageUrl}
          alt={project.title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="image-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.5 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="card-content">
        <motion.h3
          className="project-title"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          {project.title}
        </motion.h3>

        <motion.p
          className="project-description"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {project.description}
        </motion.p>

        <motion.div
          className="tech-stack"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          {project.technology.split(", ").map((tech, i) => (
            <span key={i} className="tech-tag">
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div
          whileHover={{ x: 5 }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link to={project.url || "#"} className="view-details-link">
            View details
            <motion.span
              className="arrow-icon"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ImArrowUpRight2 />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Project;
