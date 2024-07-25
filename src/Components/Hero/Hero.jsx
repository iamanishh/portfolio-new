import React from "react";
import "./hero.scss";
import profile from "../../assets/images/hero-image.svg";
import resume from "../../assets/images/resume.pdf";
import { MdOutlineFileDownload } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";

const Hero = () => {
  return (
    <div id="hero">
      <div className="container hero">
        <div className="hero__content">
          <img src={profile} alt="Profile" width={100} />
          <p>Hi, I'm Manish Kumar.</p>
          <h2>Behind-the-scenes architect</h2>
          <p className="desc">
            With nearly two years of experience as a Software Engineer, I have
            contributed in creating efficient backend systems designed for
            scalability and performance.
          </p>
          <div className="hero-btn">
            <a href="#contact">
              Contact &nbsp;
              <CiLocationArrow1 />
            </a>
            <a href="" download>
              Resume &nbsp;
              <MdOutlineFileDownload />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
