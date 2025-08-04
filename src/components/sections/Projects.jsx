import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <div className="project container">
        <div className="project-header">
          <p className="project-title btn-title">$_ projects</p>
          <div className="project-subtitle">
            {/* <h2 className="title">Selected Projects</h2> */}
            <h2 className="title">Selected Projects</h2>
          </div>
          <div className="project-intro">
            <p>
              I have worked on a variety of projects, ranging from web
              applications to mobile apps. <br /> Here are some of my notable
              projects:-
            </p>
          </div>
        </div>

        <div className="project-content">
          <div className="project-card">
            <div className="project-card-image">
              <img
                src="https://cdn.pixabay.com/photo/2023/02/15/10/22/backlinks-7791415_1280.png"
                alt="images"
              />
            </div>
            <div className="project-card-details">
              <div className="details-content">
                <h3 className="title">Project 1</h3>
              </div>
              <p className="description">
                This is a user-friendly platform for movie reviews, allowing
                users to share their opinions and discover great films. A smart
                email chrome assistant which helps in writing.
              </p>

              <ul className="tech-stack">
                <li className="tech">Java</li>
                <li className="tech">Springboot</li>
                <li className="tech">Reactjs</li>
                <li className="tech">SQL</li>
              </ul>

              <div className="date-link">
                <p className="date">21/08/2025</p>
                <a className="btn-round" href="#">
                  View details
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-card-image">
              <img
                src="https://cdn.pixabay.com/photo/2023/02/15/10/22/backlinks-7791415_1280.png"
                alt="images"
              />
            </div>
            <div className="project-card-details">
              <div className="details-content">
                <h3 className="title">Project 1</h3>
              </div>
              <p className="description">
                This is a user-friendly platform for movie reviews, allowing
                users to share their opinions and discover great films. A smart
                email chrome assistant which helps in writing.
              </p>

              <ul className="tech-stack">
                <li className="tech">Java</li>
                <li className="tech">Springboot</li>
                <li className="tech">Reactjs</li>
                <li className="tech">SQL</li>
              </ul>

              <div className="date-link">
                <p className="date">21/08/2025</p>
                <a className="links" href="#">
                  View details
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-image">
              <img
                src="https://cdn.pixabay.com/photo/2023/02/15/10/22/backlinks-7791415_1280.png"
                alt="images"
              />
            </div>
            <div className="project-card-details">
              <div className="details-content">
                <h3 className="title">Project 1</h3>
              </div>
              <p className="description">
                This is a user-friendly platform for movie reviews, allowing
                users to share their opinions and discover great films. A smart
                email chrome assistant which helps in writing.
              </p>

              <ul className="tech-stack">
                <li className="tech">Java</li>
                <li className="tech">Springboot</li>
                <li className="tech">Reactjs</li>
                <li className="tech">SQL</li>
              </ul>

              <div className="date-link">
                <p className="date">21/08/2025</p>
                <a className="links" href="#">
                  View details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
