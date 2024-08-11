import React from "react";
import "./about.scss";

const About = () => {
  return (
    <section id="about">
      <div className="container about">
        <div className="about__content">
          <div className="left">
            <h4>
              I contributed in designing scalable systems, optimizing
              performance, and developing robust APIs to drive impactful
              applications.
            </h4>
          </div>
          <div className="right">
            <p>I enjoy building things that live on the internet.</p>
            <button className="btn btn-round">About me</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
