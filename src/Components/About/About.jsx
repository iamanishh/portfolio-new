import React from "react";
import "./about.scss";

const About = () => {
  return (
    <section id="about">
      <div className="container about">
        <div className="about-heading">
          <p className="section-title t-top">About Me</p>
        </div>

        <div className="about-content">
          <div className="intro">
            <h2 className="intro-heading title2">
              Aware of the accomplishments, <br />
              awake to achieve more.
            </h2>
            <p className="intro-text">
              "I am a software developer specializing in backend development
              with hands-on experience in Java, Spring Boot, and React.
              <br />
              <br />
              My expertise includes building APIs and working with relational
              databases such as MySQL,along with various other technologies. My
              skills include:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
