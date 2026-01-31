// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { FaJava, FaReact, FaDocker, FaGit, FaLinux } from "react-icons/fa";
// import {
//   SiSpringboot,
//   SiPostgresql,
//   SiHibernate,
//   SiApachekafka,
//   SiKubernetes,
// } from "react-icons/si";

// const techStack = [
//   { icon: <FaJava color="#f89820" />, name: "Java" },
//   { icon: <SiSpringboot color="#6DB33F" />, name: "Spring Boot" },
//   { icon: <SiHibernate color="#59666C" />, name: "Hibernate" },
//   { icon: "🧩", name: "Microservices" },
//   { icon: <FaReact color="#61DBFB" />, name: "React" },
//   { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL" },
//   { icon: <FaGit color="#f34f29" />, name: "Git" },
//   { icon: <FaLinux color="#FCC624" />, name: "Linux" },
//   { icon: <FaDocker color="#0db7ed" />, name: "Docker" },
//   { icon: <SiKubernetes color="#326ce5" />, name: "Kubernetes" },
//   { icon: <SiApachekafka color="#231f20" />, name: "Kafka" },
//   // Text-based microservices entry
// ];

// const About = () => {
//   return (
//     <section className="about" id="about">
//       {/* Profile Image */}
//       <motion.div
//         className="about__image"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <img src="/images/grid1.png" alt="Manish | Profile" />
//       </motion.div>

//       {/* Content */}
//       <motion.div
//         className="about__content"
//         initial={{ opacity: 0, x: 40 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         {/* Intro */}
//         <h2>About Me</h2>

//         <div className="intro">
//           I’m Manish Kumar, a Software Developer with 2 years of experience in
//           building end-to-end applications. My main focus is backend development
//           using Java and Spring Boot, where I design and build REST APIs, work
//           with databases, and contribute to microservices-based systems.
//         </div>

//         <div className="intro">
//           I’ve worked with ReactJS for responsive front-end development, giving
//           me a full-stack view. I enjoy solving problems, optimizing
//           performance, and building reliable, scalable applications.
//         </div>

//         <div className="intro">
//           I’m passionate about continuous learning and adapting to modern
//           practices, always aiming to deliver solutions that make a real impact.
//         </div>
//         {/* Socials */}
//         <div className="about__socials">
//           <h3>Connect with me: </h3>
//           <div className="social_links">
//             <a href="https://linkedin.com" target="_blank" rel="noreferrer">
//               LinkedIn
//             </a>
//             <a href="https://github.com" target="_blank" rel="noreferrer">
//               GitHub
//             </a>

//             <a href="https://x.com" target="_blank" rel="noreferrer">
//               Twitter
//             </a>
//           </div>
//         </div>
//         {/* Tech Stack */}
//         <div className="about__stack">
//           <motion.hr
//             className="line"
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: 1 }}
//             transition={{ duration: 1.5, ease: "easeInOut" }}
//           />
//           <h3>Tech Stack</h3>
//           <div className="stack__rows">
//             {techStack.map((tech, i) => (
//               <motion.div
//                 key={i}
//                 className="stack__item"
//                 whileHover={{ y: -3, scale: 1.05 }}
//               >
//                 {tech.icon}
//                 <span>{tech.name}</span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//         {/* Experience */}
//         <div className="about__experience">
//           <motion.hr
//             className="line"
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: 1 }}
//             transition={{ duration: 1.5, ease: "easeInOut" }}
//           />
//           <h3>Experience</h3>
//           <div className="experience__card">
//             <h4>Software Developer @ Infosys</h4>
//             <span>March 2022 – Nov 2023</span>
//             <ul>
//               <li>
//                 Maintained and enhanced backend services for logistics
//                 applications using Java, Spring Boot, and REST APIs, ensuring
//                 smooth day-to-day operations.
//               </li>

//               <li>
//                 Fixed production issues, optimized queries, and improved
//                 application performance and stability for critical business
//                 workflows.
//               </li>

//               <li>
//                 Collaborated with senior developers in requirement analysis, bug
//                 fixing, and feature enhancements, gaining hands-on experience in
//                 real client projects.
//               </li>

//               <li>
//                 Worked with SQL/PostgreSQL, Git, and deployment processes,
//                 following industry best practices.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default About;

"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { FaJava, FaReact, FaDocker, FaGit, FaLinux } from "react-icons/fa";
import {
  SiSpringboot,
  SiPostgresql,
  SiHibernate,
  SiApachekafka,
  SiKubernetes,
} from "react-icons/si";

const techStack = [
  { icon: <FaJava color="#f89820" />, name: "Java", category: "core" },
  {
    icon: <SiSpringboot color="#6DB33F" />,
    name: "Spring Boot",
    category: "core",
  },
  {
    icon: <SiHibernate color="#59666C" />,
    name: "Hibernate",
    category: "core",
  },
  { icon: "🧩", name: "Microservices", category: "architecture" },
  { icon: <FaReact color="#61DBFB" />, name: "React", category: "frontend" },
  {
    icon: <SiPostgresql color="#336791" />,
    name: "PostgreSQL",
    category: "database",
  },
  { icon: <FaGit color="#f34f29" />, name: "Git", category: "tools" },
  { icon: <FaLinux color="#FCC624" />, name: "Linux", category: "tools" },
  { icon: <FaDocker color="#0db7ed" />, name: "Docker", category: "devops" },
  {
    icon: <SiKubernetes color="#326ce5" />,
    name: "Kubernetes",
    category: "devops",
  },
  {
    icon: <SiApachekafka color="#231f20" />,
    name: "Kafka",
    category: "messaging",
  },
];

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const stackRef = useRef(null);
  const experienceRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const stackInView = useInView(stackRef, { once: false, amount: 0.3 });
  const experienceInView = useInView(experienceRef, {
    once: false,
    amount: 0.3,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Reduce parallax movement on mobile
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [50, -50] : [100, -100],
  );
  const imageRotate = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [2, -2] : [5, -5],
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stackItemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: isMobile ? i * 0.03 : i * 0.05, // Faster on mobile
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about__container">
        {/* Animated Background Elements */}
        <motion.div
          className="about__bg-grid"
          style={{
            opacity: useTransform(
              scrollYProgress,
              [0, 0.3, 0.7, 1],
              [0, 1, 1, 0],
            ),
          }}
        />

        {/* Profile Image with Parallax */}
        <motion.div
          className="about__image"
          style={
            !isMobile
              ? {
                  y: imageY,
                  rotateZ: imageRotate,
                }
              : {}
          }
        >
          <motion.div
            className="image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="image-border" />
            <img src="/images/grid1.png" alt="Manish | Profile" />
            <motion.div
              className="image-glow"
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="about__content"
          ref={contentRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header with Accent */}
          <motion.div className="content__header" variants={itemVariants}>
            <motion.div
              className="header-accent"
              initial={{ width: 0 }}
              animate={isInView ? { width: "60px" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <h2>About Me</h2>
            <motion.div
              className="header-code"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="code-bracket">{"<"}</span>
              <span className="code-tag">developer</span>
              <span className="code-bracket">{"/>"}</span>
            </motion.div>
          </motion.div>

          {/* Intro Paragraphs */}
          <motion.div className="intro" variants={itemVariants}>
            <span className="intro-highlight">Backend Engineer</span> with 3
            years of experience architecting and building scalable systems. I
            specialize in Java and Spring Boot, designing robust REST APIs,
            optimizing database performance, and implementing microservices
            architectures that handle real-world enterprise demands.
          </motion.div>

          <motion.div className="intro" variants={itemVariants}>
            My expertise extends to full-stack development with ReactJS,
            enabling me to bridge backend complexity with intuitive user
            experiences. I thrive on solving intricate technical challenges,
            from query optimization to distributed system design.
          </motion.div>

          <motion.div className="intro" variants={itemVariants}>
            Driven by engineering excellence and continuous improvement, I'm
            committed to building solutions that scale, perform, and deliver
            measurable impact.
          </motion.div>

          {/* Socials */}
          <motion.div className="about__socials" variants={itemVariants}>
            <h3>Connect</h3>
            <div className="social_links">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="link-arrow">→</span>
                LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="link-arrow">→</span>
                GitHub
              </motion.a>
              <motion.a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="link-arrow">→</span>
                Twitter
              </motion.a>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <div className="about__stack" ref={stackRef}>
            <motion.div
              className="section-divider"
              initial={{ scaleX: 0 }}
              animate={stackInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={
                stackInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6 }}
            >
              Tech Stack
              <span className="stack-count">{techStack.length}</span>
            </motion.h3>
            <div className="stack__rows">
              {techStack.map((tech, i) => (
                <motion.div
                  key={i}
                  className="stack__item"
                  custom={i}
                  variants={stackItemVariants}
                  initial="hidden"
                  animate={stackInView ? "visible" : "hidden"}
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="item-icon">{tech.icon}</span>
                  <span className="item-name">{tech.name}</span>
                  <motion.div
                    className="item-glow"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="about__experience" ref={experienceRef}>
            <motion.div
              className="section-divider"
              initial={{ scaleX: 0 }}
              animate={experienceInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={
                experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6 }}
            >
              Experience
              <span className="timeline-badge">2022 - 2023</span>
            </motion.h3>

            <motion.div
              className="experience__card"
              initial={{ opacity: 0, y: 30 }}
              animate={
                experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ y: -6 }}
            >
              <div className="card-header">
                <div className="card-title-group">
                  <h4>Software Developer</h4>
                  <span className="company">@ Infosys</span>
                </div>
                <span className="duration">March 2022 – Nov 2023</span>
              </div>

              <ul>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    experienceInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <span className="bullet-icon">▹</span>
                  Architected and maintained backend services for logistics
                  applications using{" "}
                  <strong>Java, Spring Boot, and REST APIs</strong>, ensuring
                  99.9% uptime for critical business operations.
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    experienceInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <span className="bullet-icon">▹</span>
                  Resolved production incidents, optimized SQL queries achieving
                  <strong> 40% performance improvement</strong>, and enhanced
                  application stability through proactive monitoring.
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    experienceInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <span className="bullet-icon">▹</span>
                  Collaborated in agile teams for requirement analysis, code
                  reviews, and feature development, delivering{" "}
                  <strong>15+ production releases</strong>
                  with zero critical defects.
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    experienceInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <span className="bullet-icon">▹</span>
                  Implemented CI/CD pipelines using Git, automated testing, and
                  deployment strategies following{" "}
                  <strong>enterprise best practices</strong>.
                </motion.li>
              </ul>

              <motion.div
                className="card-accent"
                initial={{ scaleX: 0 }}
                animate={experienceInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
