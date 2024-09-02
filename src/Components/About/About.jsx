import React from "react";
import "./about.scss";
import TechIcons from "../Skills/TechIcons";

const About = () => {
  const rowsToShow = [0, 1, 2, 3];
  return (
    <section id="about">
      <div className="container about ">
        <div about__heading>
          <p className=" t-top">About me</p>
        </div>

        <div className="about__content">
          <div className="intro">
            <h1 className="title2">Aware of the accomplishments,</h1>
            <h1 className="title2">awake to achieve more.</h1>

            <img className="introImg" src="./laptop.jpg" alt="" />

            <div className="subhead flex-r">
              <p className="ind">I thrive with shared efforts.</p>

              <p className="intro-desc desc-md">
                I'm a Software developer specializing in backend development
                with Java, Spring, and Spring Boot, React. I have a strong
                foundation in relational databases and RESTful APIs, allowing me
                to design and implement end-to-end solutions effectively.
                <br />
                <br />I thrive in collaborative environments and am dedicated to
                continuous learning to stay ahead in the ever-evolving tech
                landscape.
                <br />
                <br />
                <p className="t-top">Get in touch</p>
              </p>
            </div>
          </div>

          <div className="tech flex-rr">
            <p className="desc-md ">/TECKSTACK/</p>
            <div className="tech__cont">
              <p className=" desc-md">#Languages/ Libraries/ Frameworks</p>
              <p>
                Java, Spring Core, Spring Boot, Hibearnate, C/C++, Javascript,
                Html, CSS, React.js, Node.js, MySql, MongoDB, Redis
              </p>
              <br />

              <p className=" desc-md">#Tools and Technologies</p>
              <p>Git, GitHub, Linux, Docker, Kubernetes, AWS</p>
            </div>

            {/* <TechIcons rowsToShow={rowsToShow} className="techh" /> */}
          </div>

          <div className="experience flex-rr">
            <p className="desc-md">/EXPERIENCE/</p>
            <div className="exp">
              <div className="exp-details">
                <p className="company">
                  Infosys Ltd
                  <span>Bhubaneswar, Odisha</span>
                </p>
                <p className="position">
                  System Engineer
                  <span>March 2022 - Nov 2023</span>
                </p>
              </div>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore itaque quod, doloribus vel impedit ipsam, nostrum
                distinctio sapiente non velit quasi? Qui perferendis repudiandae
                aliquid dolore similique neque iste. Autem!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
