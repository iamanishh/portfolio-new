import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero container">
        <div className="hero__content">
          <p className="title-extralight">Hello, I'm </p>
          <h1 className="title-big">Manish Kumar</h1>
          <p className="hero__description">
            A backend engineer who designs robust systems, writes clean code,
            and solves real-world problems with scalable backend solutions.
          </p>

          <div className="hero__button">
            <a href="#contact" className="btn-round">
              <i className="ri-information-line"></i>
              Let's Connect <FaArrowRightLong />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
