import React from "react";
import "./hero.scss";

import { CiLocationArrow1 } from "react-icons/ci";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const socialLinks = [
  { href: "https://github.com/iamanishh", icon: <FaGithub /> },
  { href: "https://linkedin.com/in/iamanishh", icon: <FaLinkedinIn /> },
  { href: "https://twitter.com/iamanish__", icon: <FaTwitter /> },
];

const Hero = () => {
  return (
    <section id="hero">
      <div className="container hero">
        <div className="hero__content ">
          <img src="/hero-image.svg" alt="Profile" width={110} />

          <p>Hi, I'm Manish &nbsp; </p>

          <h2 className="title">Behind-the-scenes architect</h2>
          <p className="name">
            {/* I am a backend developer with nearly 2 years of working experience
            in Java, Spring Boot and React. */}
            I specialize in crafting scalable backend solutions with
            <strong> Java </strong> and <strong>Spring Boot</strong> ⚙️,
            <br />
            building efficient <strong> APIs </strong> and
            <strong> microservices </strong>🛠️, while also proficient in
            creating seamless applications with
            <strong> React</strong> 💻.
          </p>
          {/* <p className="name">
            Building robust systems ⚙️, optimizing performance ⚡,
            <br />
            and solving complex problems with clean, scalable code 💻.
          </p> */}

          <div className="hero-btn">
            <a href="#projects">See my work &nbsp;</a>
            <a href="#contact">
              Contact &nbsp;
              <CiLocationArrow1 />
            </a>
          </div>
          <div className="hero-social">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} target="_blank">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
