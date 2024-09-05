import React from "react";
import "./projects.scss";
import { ImArrowUpRight2 } from "react-icons/im";
const Projects = () => {
  return (
    <section className="projects">
      <div className="container projects">
        <div className="proj-left"></div>
        <div className="proj-wrap">
          <div className="projects-head">
            <h3>Others Projects</h3>
          </div>

          <div className="projects-card">
            <div className="card">
              <p>
                URL Shortner
                <span>
                  <ImArrowUpRight2 className="ic" />
                </span>
              </p>
              <p>
                An smart URL shortner made using Reactjs <br /> for shorteneing
                of URLS
              </p>

              <p className="date">2023</p>
            </div>
            <div className="card">
              <p>
                JOB Portal
                <span>
                  <ImArrowUpRight2 className="ic" />
                </span>
              </p>
              <p>
                A job portal used for finding the latest jobsbr
                <br /> in the markeyt currently
              </p>

              <p className="date">2023</p>
            </div>
            <div className="card">
              <p>
                URL Shortner
                <span>
                  <ImArrowUpRight2 className="ic" />
                </span>
              </p>
              <p>
                AN URL shortner made using Reactjs for <br /> which has been
                very useful{" "}
              </p>

              <p className="date">2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
