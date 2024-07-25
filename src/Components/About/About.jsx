import React from "react";
import "./about.scss";
import { useNavigate } from "react-router-dom";

const About = () => {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/about");
  // };
  return (
    <section id="about">
      <div className="container about">
        <div className="about__content">
          <div className="left">
            <h4>
              I throughly enjoy building things that live on the internet, one
              line of code at a time.
            </h4>
          </div>
          <div className="right">
            <p>
              I specialize in creating robust, scalable, and efficient solutions
              that drive innovation and success.
            </p>
            <button className="btn btn-round">About me</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
