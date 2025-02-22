import "./hero.scss";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container hero">
        <div className="hero__image">
          <img
            width={100}
            src="https://st2.depositphotos.com/3369547/11899/v/950/depositphotos_118997924-stock-illustration-man-glasses-male-avatar-person.jpg"
            alt="hero"
          />
          <p>Hi!, I am Manish Kumar 👋🏻</p>
        </div>

        <div className="hero__text">
          <h1 className="section-heading">Backend Developer based in India</h1>
          <p className="desc">
            Passionate behind-the-scenes architect, specializing in backend
            engineering. Building scalable systems that power seamless
            experiences.
          </p>
        </div>

        <div className="hero__btn">
          <a href="#" className="btn btn-1">
            Connect with me
          </a>
          <a href="#" className="btn btn-1">
            my resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
