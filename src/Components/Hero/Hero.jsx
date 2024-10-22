import "./hero.scss";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container hero">
        <div className="hero__text">
          <h1 className="section-heading">
            Hey! /’m Manish
            <br /> A <span className="curs">Software developer</span>
          </h1>

          <p className="text2">
            Passionate behind-the-scenes architect, specializing in backend
            engineering with Java and Spring Boot.
          </p>
        </div>

        <div className="hero__links">
          <div className="social">
            <a className="btn btn-1" href="#">
              GitHub
            </a>
            <a className="btn btn-1" href="#">
              LinkedIn
            </a>
          </div>
          <a className="btn btn-2" href="mailto:mmm.manish163@gmail.com">
            mmm.manish163@gmail.com
          </a>
        </div>

        <div className="hero__image">
          <img src="./homepage.gif" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
