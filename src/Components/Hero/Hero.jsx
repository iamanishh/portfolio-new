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
        <div className="hero__content flex-c">
          <img src="/hero-image.svg" alt="Profile" width={110} />
          <p className="desc">Hi, I'm Manish Kumar.</p>

          <h2 className="title">Behind-the-scenes architect</h2>
          <p className="desc">
            With nearly two years of experience as a Software Engineer, I have
            contributed in creating efficient backend systems designed for
            scalability and performance.
          </p>
          <div className="hero-btn">
            <a href="#contact">
              Talk with me &nbsp;
              <CiLocationArrow1 />
            </a>
            <a href="#projects">See my work &nbsp;</a>
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
