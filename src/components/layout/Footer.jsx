import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__section footer__brand">
          <h3 className="footer__logo">Manish Kumar</h3>
          <p className="footer__tagline">
            Creating meaningful digital experiences
          </p>
        </div>

        <div className="footer__section footer__nav">
          <h4>Navigation</h4>
          <ul className="footer__links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer__section footer__contact">
          <h4>Get in Touch</h4>
          <p>
            <a href="mailto:hello@yourname.com">hello@yourname.com</a>
          </p>
          <div className="footer__social">
            <a href="https://github.com/yourusername" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/yourusername" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://dribbble.com/yourusername" aria-label="Dribbble">
              <i className="fab fa-dribbble"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © {currentYear} YourName. All rights reserved.
        </p>
        <p className="footer__credits">
          Designed & Built with <span aria-label="love">❤️</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
