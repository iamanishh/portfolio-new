import "./about.scss";
import Skills from "../Skills/Skills";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <div className="container about ">
        <header className="about__header">
          <h2 className="section-heading">
            <span className="curs">Engineering </span> Ideas <br />
            into Reality...
          </h2>
        </header>

        <div className="about__content">
          <div className="about__image">
            <img src="./grid1.png" alt="men" />
          </div>

          <div className="about__info">
            <div className="descrip">
              <p className="text3">
                I’m a Backend Developer with two years of hands-on experience
                working with Java and Spring Boot. During my time at Infosys, I
                had the chance to design and build scalable applications using
                microservices architecture, fine-tune databases for better
                performance, and create APIs that were both efficient and easy
                to use.
                <br />
                <br />
                I’m passionate about solving complex problems and continuously
                learning new technologies. Right now, I’m excited to explore new
                opportunities where I can grow, contribute, and make a
                meaningful impact.
              </p>
            </div>

            <div className="about__highlights">
              <div className="highlight">
                <HiMiniCodeBracket />
                <p> Technologies</p>
                <p className="text4">
                  Java,Spring MVC, Spring Boot, Hibernate, REST APIs, SQL
                </p>
              </div>
              <div className="highlight">
                <FaGraduationCap />
                <p>Education</p>
                <p className="text4">
                  B.Tech in Computer Science and Engineering
                </p>
              </div>
              <div className="highlight">
                <MdOutlineWorkOutline />
                <p>Experience</p>
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
