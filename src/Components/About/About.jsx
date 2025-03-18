import "./about.scss";
import Skills from "../Skills/Skills";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <div className="container about ">
        <div className="about__header">
          <h2 className="section-heading">
            <span className="curs">Engineering </span> Ideas <br />
            into Reality...
          </h2>
        </div>

        <div className="about__content">
          <div className="about__image">
            <img src="./grid1.png" alt="men" />
          </div>

          <div className="about__info">
            <div className="descrip">
              <h2 className="section-subheading">
                I'm a Backend Engineer based in India, with nearly two years of
                experience building scalable backend systems.
              </h2>
              <br />

              <p className="text3">
                I started my journey at Infosys, where I worked on
                high-performance applications in the logistics domain,
                fine-tuned databases, and developed efficient APIs. Debugging,
                optimizing performance, and ensuring seamless backend operations
                was a big part of my work.
              </p>

              <br />

              <p className="text3">
                These days, I'm focused on learning and exploring new
                technologies to build even better, more scalable solutions. I'm
                always excited to take on new challenges and make a real impact
                with my work.
              </p>
            </div>

            <div className="about__highlights">
              <div className="highlight">
                <HiMiniCodeBracket />
                <p className="headd"> Technologies</p>
                <p className="text4">
                  Java, Spring MVC, Spring Boot, Hibernate, REST APIs, SQL
                </p>
              </div>
              <div className="highlight">
                <FaGraduationCap />
                <p className="headd">Education</p>
                <p className="text4">
                  B.Tech in Computer Science and Engineering
                </p>
              </div>
              <div className="highlight">
                <MdOutlineWorkOutline />
                <p className="headd">Experience</p>
                <p className="text4">Around 2 years of experience in Infosys</p>
              </div>
            </div>

            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
