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
          {/* <img src="/hero-image.svg" alt="Profile" width={110} /> */}

          <div className="left">
            <h1 className="section-heading">
              Hey! /’m Manish
              <br /> A <span className="curs">Software developer</span>
            </h1>
          </div>

          <div className="right">
            <p className="text2">
              Passionate behind-the-scenes architect, specializing in backend
              engineering with Java and Spring Boot.
              {/* Passionate backend engineer specializing in (Java, Spring Boot).
              Skilled in designing and implementing robust APIs and
              microservices. Experienced in working with databases and cloud
              platforms */}
              {/* I specialize in crafting scalable backend solutions 🛠️with
              <strong> Java </strong> and <strong> Spring Boot </strong> ⚙️,
              while also building seamless applications with
              <strong> React</strong> 💻. */}
            </p>
          </div>

          {/* . */}

          {/* <p className="name">
          , efficient APIs
            🛠️, and microservices
            Building robust systems ⚙️, optimizing performance ⚡,
            <br />
            and solving complex problems with clean, scalable code 💻.
          </p>  */}
        </div>
        <div className="button">
          <a className="btn1" href="mailto:mmm.manish163@gmail.com">
            mmm.manish163@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
