// import React from "react";

// const About = () => {
//   return (
//     <section id="about">
//       <div className="about container">
//         <div className="about__header">
//           <p className="btn-title">$_about</p>
//           <h2 className="about__title title">
//             Engineering Ideas <br />
//             into Reality...
//           </h2>
//           <div className="about__image">
//             <img
//               src="/images/grid1.png"
//               alt="About Me"
//               className="about__img"
//             />
//           </div>
//         </div>

//         <div className="about__content">
//           <div className="about__text">
//             <p>(01)</p>
//             <p>intro</p>
//             <div className="about__text-intro">
//               <p className="text-md">
//                 Hello, I'm Manish, a Backend Engineer with a passion for
//                 building scalable and efficient systems.
//               </p>
//               <br />

//               <p>
//                 I love turning ideas into reality through code. With a strong
//                 foundation in
//                 <strong> Java and Spring Boot.</strong> I thrive on solving
//                 complex problems and creating seamless digital experiences.
//               </p>
//               <p>
//                 My expertise includes designing and developing
//                 <strong> RESTful APIs, </strong>
//                 working with databases like
//                 <strong> PostgreSQL </strong>
//                 and deploying applications on <strong> AWS.</strong> I'm also
//                 experienced with
//                 <strong> Docker, Kubernetes, and CI/CD pipelines.</strong>
//               </p>
//               <br />
//               <p>
//                 I'm always eager to learn new technologies and take on
//                 challenging projects. I believe in writing clean, well-tested
//                 code and collaborating effectively with team members.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
"use client";
import React from "react";
import { motion } from "framer-motion";
import Hello from "../layout/Hello";
// import "./about.scss";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.div
        className="about container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.p className="btn-title" variants={fadeIn}>
          $_about
        </motion.p>

        <motion.div className="about__header" variants={fadeIn}>
          <div className="about__header-text">
            <h2>Engineering Ideas into Reality</h2>
            <p>
              I'm Manish, a backend engineer focused on scalable APIs, cloud
              deployment, and building meaningful systems with Java and Spring
              Boot.
            </p>
          </div>
          <motion.div className="about__image" variants={fadeIn}>
            <img
              src="/images/grid1.png"
              alt="About Me"
              className="about__img"
            />
          </motion.div>
        </motion.div>

        <motion.div className="about__grid" variants={fadeIn}>
          <div>
            <Hello />
          </div>
          <div className="block">
            <h3>Experience</h3>
            <div className="item">
              <div className="label">Backend Developer</div>
              <div className="details">
                <p>2 years experience in scalable backend systems</p>
                <p>Spring Boot, PostgreSQL, Docker, AWS</p>
              </div>
            </div>
          </div>

          <div className="block">
            <h3>Education</h3>
            <div className="item">
              <div className="label">
                B.Tech, Computer Science & Engineering
              </div>
              <div className="details">
                <p>Lovely Professional University</p>
                <p>Jalandhar(Punjab)</p>
              </div>
            </div>
          </div>

          <div className="block">
            <h3>Skills</h3>
            <div className="skills">
              {[
                "Java",
                "Spring Boot",
                "PostgreSQL",
                "MongoDB",
                "Docker",
                "Kubernetes",
                "AWS",
                "CI/CD",
                "Redis",
                "Kafka",
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  className="skill"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
