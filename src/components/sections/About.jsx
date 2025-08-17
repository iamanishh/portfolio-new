import React from "react";
import {
  FaUser,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaJava,
  FaDatabase,
  FaDocker,
  FaAws,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import { SiSpringboot, SiKubernetes } from "react-icons/si";
import { GoArrowUpRight } from "react-icons/go";

const aboutSections = [
  {
    title: "Intro",
    icon: FaUser,
    content: (
      <>
        <p className="text-md">
          I'm a Backend Engineer based in India, with nearly two years of
          experience building scalable backend systems.
        </p>
        <p>
          I started my journey at Infosys, where I worked on high-performance
          applications in the logistics domain, fine-tuned databases, and
          developed efficient APIs. Debugging, optimizing performance, and
          ensuring seamless backend operations was a big part of my work.
        </p>
        <p>
          These days, I'm focused on learning and exploring new technologies to
          build even better, more scalable solutions. I'm always excited to take
          on new challenges and make a real impact with my work.
        </p>
      </>
    ),
  },
  {
    title: "Experience",
    icon: FaBriefcase,
    content: (
      <>
        <p>
          Worked as a <strong>System Engineer</strong> at Infosys for ~2 years,
          specializing in backend development in the logistics domain.
        </p>
        <p>
          Designed and optimized <strong>REST APIs</strong>, fine-tuned SQL
          databases, and improved application performance for enterprise
          clients.
        </p>
        <p>
          Collaborated in agile teams to deliver scalable, production-ready
          solutions using modern backend tools.
        </p>
      </>
    ),
  },
  {
    title: "Education",
    icon: FaGraduationCap,
    content: (
      <>
        <p className="edu-detail">
          Lovely Professional University, Jalanadhar(Punjab)
        </p>
        <p className="edu-degree">Bachelor of Technology (CSE)</p>
      </>
    ),
  },
  {
    title: "Skills",
    icon: FaCode,
    content: (
      <>
        <p>
          Java, Spring Boot, Spring MVC, Hibernate, REST APIs, SQL, PostgreSQL,
          AWS, Docker, Kubernetes, CI/CD
        </p>
        <div className="skills-icons">
          <FaJava className="skill-icon java" />
          <SiSpringboot className="skill-icon spring" />
          <FaDatabase className="skill-icon db" />
          <FaDocker className="skill-icon docker" />
          <SiKubernetes className="skill-icon k8s" />
          <FaAws className="skill-icon aws" />
          <FaGit className="skill-icon git" />
          <FaGithub className="skill-icon github" />
        </div>
      </>
    ),
  },
];

const About = () => {
  const introSection = aboutSections[0];
  const experienceSection = aboutSections[1];
  const educationSection = aboutSections[2];
  const skillsSection = aboutSections[3];

  return (
    <section id="about">
      <div className="about container">
        <AboutHeader />
        <div className="about__content">
          {/* Intro with image + social */}
          <div className="intro-section">
            <div className="about__image">
              <img
                src="/images/grid1.png"
                alt="About Me"
                className="about__img"
              />
            </div>

            <div className="intro-card">
              <div className="about__card-content">{introSection.content}</div>
              <div className="about__social">
                <p>Connect with me: </p>
                <div className="s-link">
                  <a
                    className="btn-social linkedin"
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    LINKEDIN
                    <span>
                      <GoArrowUpRight scale={16} />
                    </span>
                  </a>

                  <a
                    className="btn-social github"
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    GITHUB
                    <span>
                      <GoArrowUpRight scale={16} />
                    </span>
                  </a>

                  <a
                    className="btn-social twitter"
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    TWITTER
                    <GoArrowUpRight scale={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Experience + Education */}
          <div className="intro-section">
            <div className="about__card">
              <div className="about__card-header">
                <experienceSection.icon className="text-bold" />
                <h3 className="about__card-title">{experienceSection.title}</h3>
              </div>
              <div className="about__card-content">
                {experienceSection.content}
              </div>
            </div>

            <div className="about__card">
              <div className="about__card-header">
                <educationSection.icon className="text-bold" />
                <h3 className="about__card-title">{educationSection.title}</h3>
              </div>
              <div className="about__card-content edu-content">
                {educationSection.content}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="single-card">
            <div className="about__card">
              <div className="about__card-header">
                <skillsSection.icon className="text-bold" />
                <h3 className="about__card-title">{skillsSection.title}</h3>
              </div>
              <div className="about__card-content">{skillsSection.content}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutHeader = () => (
  <div className="about__header">
    <p className="btn-title">$_about</p>
    <h2 className="title-med">
      Engineering <span>Ideas</span> <br />
      into <span>Reality...</span>
    </h2>
  </div>
);

export default About;
