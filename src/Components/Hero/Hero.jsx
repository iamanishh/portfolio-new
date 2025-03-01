import "./hero.scss";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container hero">
        <div className="hero__image">
          <img width={100} src="avatar.svg" alt="hero" />
          <p>Hello!, I am Manish Kumar 👋🏻</p>
        </div>

        <div className="hero__text">
          <h2 className="section-heading">Behind-the-scenes architect </h2>
          <p className="desc">
            A software engineer specializing in backend system with an
            experience in building scalable systems that power seamless
            experiences.
          </p>
        </div>

        <div className="hero__button">
          <a href="#" className="btn btn-2">
            Connect with me
          </a>
          <a href="#" className="btn btn-1">
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
