import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "./about.scss";

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section id="about">
      <motion.div
        className="container about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="about-heading" variants={containerVariants}>
          <p className="t-top">About Me</p>
          <h2 className="intro-heading">
            Aware of the accomplishments, <br />
            awake to achieve more.
          </h2>
        </motion.div>

        <div className="about-content">
          <motion.div className="intro" variants={containerVariants}>
            <motion.img
              src="./grid1.png"
              alt="men"
              className="intro-image"
              variants={imageVariants}
            />
            <motion.p className="intro-text" variants={containerVariants}>
              I'm a passionate backend developer with nearly 2 years of
              experience specializing in Java and Spring Boot. I've worked on a
              variety of projects, building robust APIs and interacting with
              databases like MySQL and MongoDB.
              <br />
              <br />
              While I've also had some exposure to frontend development with
              React, my primary strength lies in backend engineering. I'm
              comfortable working with various technologies and have a
              foundational understanding of dockerization and containerization.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
