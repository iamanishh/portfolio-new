import React from "react";
import "./about.scss";
import Skills from "../Skills/Skills";

const About = () => {
  return (
    <section id="about">
      <div className="container about ">
        <header className="about__header">
          <h2 className="section-heading">
            <span className="curs">Coding,</span> meditation <br />
            and learning...
          </h2>
          <p className="about-sub text4">
            Discover more about me and the technologies I use that guide my work
            and shape my results.
          </p>
        </header>

        <figure className="about__image">
          <img src="./grid1.png" alt="men" />
        </figure>

        <article className="about__content">
          <div className="about-text ">
            <p className="text3">Hey, /'m Manish Kumar</p>
            <p className="text3">
              As a backend developer with 2 years of experience specializing in
              <strong> Java, Spring Boot, & React </strong>, I've honed my
              skills in crafting robust APIs and microservices.
            </p>
            <br />
            <p className="text3">
              I'm comfortable working with various databases, including MySQL &
              MongoDB, and have a solid understanding of cloud technologies. I
              have foundational understanding of Dockerization and
              containerization, allowing me to build efficient and scalable
              applications.
            </p>
          </div>

          <AboutSocial />
          <Skills />
        </article>
      </div>
    </section>
  );
};

const AboutSocial = () => (
  <div className="about-social">
    <p className="text4">
      If you want to know more, Feel free to explore these:-
    </p>

    <div className="social-link">
      <div>
        <a href="#" className="underline text3">
          Collection of work
        </a>
        <span>(GitHub)</span>
      </div>

      <div>
        <a href="#" className="underline text3">
          Professional life
        </a>
        <span>(LinkedIn)</span>
      </div>

      <div>
        <a href="#" className="underline text3">
          Social Life
        </a>
        <span>(Twitter)</span>
      </div>
    </div>
  </div>
);

export default About;
