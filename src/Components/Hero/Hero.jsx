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
          {/* <p className="desc name">Hi, I'm Manish Kumar.</p> */}

          <p
            className="desc name"
            style={{ position: "relative", display: "inline-block" }}
          >
            Hi, I'm Manish &nbsp; &nbsp;
            <svg
              className="rough-annotation"
              style={{
                position: "absolute",
                top: "-5px",
                right: "275px",
                overflow: "visible",
                pointerEvents: "none",
                width: "100px",
                height: "100px",
                zIndex: 0,
              }}
            >
              <path
                d="M274.7750140931457 20.01779023744166 C304.2199523134535 18.096653828246342, 336.51149964936195 23.163175174815404, 368.5973683502525 13.723885038867593"
                fill="none"
                stroke="#FFC5C5"
                strokeWidth="23.75"
              ></path>
              <path
                d="M364.6826284918934 21.316182186827064 C332.90639524561414 21.049898582047607, 292.36659121381234 17.36635853583255, 278.22166053391993 13.088132848963141"
                fill="none"
                stroke="#FFC5C5"
                strokeWidth="23.75"
              ></path>
            </svg>
            <span style={{ position: "relative", zIndex: 1 }}>Kumar</span>
          </p>

          <h2 className="title">Behind-the-scenes architect</h2>
          <p className="desc">
            With nearly two years as a Software Engineer, I have contributed in
            building scalable, high-performance backend systems.
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
