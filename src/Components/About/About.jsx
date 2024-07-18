import React from "react";
import "./about.scss";
import "../../Styles/global.scss";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };
  return (
    <section className="aboutWrapper">
      <div className="about ">
        <div className="about__left">
          <h4>
            A software engineer with a passion for backend development. I
            throughly enjoy building things that live on the internet.
          </h4>
        </div>
        <div className="about__right">
          <div className="text">
            <p>
              I specialize in creating robust, scalable, and efficient solutions
              that drive innovation and success.
            </p>
          </div>
          <div className="btn">
            <button className="btn-round">About me</button>
          </div>
        </div>
      </div>

      <div class="about-more">
        <span class="line"></span>
        <a href="#" onClick={handleClick}>
          Read More
          <svg
            width="10px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            class="arrow"
          >
            <path
              d="M31 0H15v2h13.59L.29 30.29 1.7 31.7 30 3.41V16h2V1a1 1 0 0 0-1-1z"
              data-name="5-Arrow Up"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default About;
