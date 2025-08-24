// import React from "react";
// import {
//   FaUser,
//   FaCode,
//   FaBriefcase,
//   FaGraduationCap,
//   FaJava,
//   FaDatabase,
//   FaDocker,
//   FaAws,
//   FaGit,
//   FaGithub,
// } from "react-icons/fa";
// import { SiSpringboot, SiKubernetes } from "react-icons/si";
// import { GoArrowUpRight } from "react-icons/go";

// const aboutSections = [
//   {
//     title: "Intro",
//     icon: FaUser,
//     content: (
//       <>
//         <p className="text-md">
//           I'm a Backend Engineer based in India, with nearly two years of
//           experience building scalable backend systems.
//         </p>
//         <p>
//           I started my journey at Infosys, where I worked on high-performance
//           applications in the logistics domain, fine-tuned databases, and
//           developed efficient APIs. Debugging, optimizing performance, and
//           ensuring seamless backend operations was a big part of my work.
//         </p>
//         <p>
//           These days, I'm focused on learning and exploring new technologies to
//           build even better, more scalable solutions. I'm always excited to take
//           on new challenges and make a real impact with my work.
//         </p>
//       </>
//     ),
//   },
//   {
//     title: "Experience",
//     icon: FaBriefcase,
//     content: (
//       <>
//         <p>
//           Worked as a <strong>System Engineer</strong> at Infosys for ~2 years,
//           specializing in backend development in the logistics domain.
//         </p>
//         <p>
//           Designed and optimized <strong>REST APIs</strong>, fine-tuned SQL
//           databases, and improved application performance for enterprise
//           clients.
//         </p>
//         <p>
//           Collaborated in agile teams to deliver scalable, production-ready
//           solutions using modern backend tools.
//         </p>
//       </>
//     ),
//   },
//   {
//     title: "Education",
//     icon: FaGraduationCap,
//     content: (
//       <>
//         <p className="edu-detail">
//           Lovely Professional University, Jalanadhar(Punjab)
//         </p>
//         <p className="edu-degree">Bachelor of Technology (CSE)</p>
//       </>
//     ),
//   },
//   {
//     title: "Skills",
//     icon: FaCode,
//     content: (
//       <>
//         <p>
//           Java, Spring Boot, Spring MVC, Hibernate, REST APIs, SQL, PostgreSQL,
//           AWS, Docker, Kubernetes, CI/CD
//         </p>
//         <div className="skills-icons">
//           <FaJava className="skill-icon java" />
//           <SiSpringboot className="skill-icon spring" />
//           <FaDatabase className="skill-icon db" />
//           <FaDocker className="skill-icon docker" />
//           <SiKubernetes className="skill-icon k8s" />
//           <FaAws className="skill-icon aws" />
//           <FaGit className="skill-icon git" />
//           <FaGithub className="skill-icon github" />
//         </div>
//       </>
//     ),
//   },
// ];

// const About = () => {
//   const introSection = aboutSections[0];
//   const experienceSection = aboutSections[1];
//   const educationSection = aboutSections[2];
//   const skillsSection = aboutSections[3];

//   return (
//     <section id="about">
//       <div className="about container">
//         <AboutHeader />
//         <div className="about__content">
//           {/* Intro with image + social */}
//           <div className="intro-section">
//             <div className="about__image">
//               <img
//                 src="/images/grid1.png"
//                 alt="About Me"
//                 className="about__img"
//               />
//             </div>

//             <div className="intro-card">
//               <div className="about__card-content">{introSection.content}</div>
//               <div className="about__social">
//                 <p>Connect with me: </p>
//                 <div className="s-link">
//                   <a
//                     className="btn-social linkedin"
//                     href="https://linkedin.com/in/yourusername"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="LinkedIn"
//                   >
//                     LINKEDIN
//                     <span>
//                       <GoArrowUpRight scale={16} />
//                     </span>
//                   </a>

//                   <a
//                     className="btn-social github"
//                     href="https://github.com/yourusername"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="GitHub"
//                   >
//                     GITHUB
//                     <span>
//                       <GoArrowUpRight scale={16} />
//                     </span>
//                   </a>

//                   <a
//                     className="btn-social twitter"
//                     href="https://twitter.com/yourusername"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Twitter"
//                   >
//                     TWITTER
//                     <GoArrowUpRight scale={16} />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Experience + Education */}
//           <div className="intro-section">
//             <div className="about__card">
//               <div className="about__card-header">
//                 <experienceSection.icon className="text-bold" />
//                 <h3 className="about__card-title">{experienceSection.title}</h3>
//               </div>
//               <div className="about__card-content">
//                 {experienceSection.content}
//               </div>
//             </div>

//             <div className="about__card">
//               <div className="about__card-header">
//                 <educationSection.icon className="text-bold" />
//                 <h3 className="about__card-title">{educationSection.title}</h3>
//               </div>
//               <div className="about__card-content edu-content">
//                 {educationSection.content}
//               </div>
//             </div>
//           </div>

//           {/* Skills */}
//           <div className="single-card">
//             <div className="about__card">
//               <div className="about__card-header">
//                 <skillsSection.icon className="text-bold" />
//                 <h3 className="about__card-title">{skillsSection.title}</h3>
//               </div>
//               <div className="about__card-content">{skillsSection.content}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const AboutHeader = () => (
//   <div className="about__header">
//     <p className="btn-title">$_about</p>
//     <h2 className="title-med">
//       Engineering <span>Ideas</span> <br />
//       into <span>Reality...</span>
//     </h2>
//   </div>
// );

// export default About;
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaDocker,
  FaGit,
  FaGithub,
  FaLinux,
} from "react-icons/fa";
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
  { icon: <FaReact color="#61DBFB" />, name: "React" },
  { icon: <FaGit color="#f34f29" />, name: "Git" },
  { icon: <FaGithub color="#000" />, name: "GitHub" },
  { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL" },
  { icon: <FaLinux color="#FCC624" />, name: "Linux" },
  { icon: <FaDocker color="#0db7ed" />, name: "Docker" },
  { icon: <SiKubernetes color="#326ce5" />, name: "Kubernetes" },
  { icon: <SiApachekafka color="#231f20" />, name: "Kafka" },
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
        <p className="intro">
          I’m <strong>Manish Kumar</strong>, a{" "}
          <strong>Full-Stack Developer</strong> with
          <strong> 3 years of experience</strong> specializing in{" "}
          <strong>backend development</strong>. My expertise lies in building{" "}
          <strong>scalable microservices</strong>,{" "}
          <strong>secure REST APIs</strong>, and{" "}
          <strong>distributed systems</strong> using{" "}
          <strong>Java & Spring Boot</strong>.
        </p>
        <p className="intro">
          I enjoy solving complex problems, from{" "}
          <strong>optimizing database queries</strong>
          to designing <strong>event-driven architectures with Kafka</strong>.
          My goal is to deliver applications that are{" "}
          <strong>reliable, secure, and cloud-ready</strong>, while keeping
          performance and user experience at the core.
        </p>

        {/* Tech Stack */}
        <div className="about__stack">
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
          <h3>Experience</h3>
          <div className="experience__card">
            <h4>Backend Developer @ ABC Tech</h4>
            <span>2022 – Present</span>
            <ul>
              <li>
                Designed and implemented <strong>microservices</strong> with
                Spring Boot, ensuring scalability and resilience across
                distributed systems.
              </li>
              <li>
                Integrated <strong>Kafka</strong> for event-driven architecture,
                reducing service latency and improving system reliability.
              </li>
              <li>
                Optimized <strong>PostgreSQL queries</strong> and caching
                strategies, achieving up to{" "}
                <strong>30% performance improvement</strong> in API responses.
              </li>
            </ul>
          </div>
        </div>

        {/* Socials */}
        <div className="about__socials">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
