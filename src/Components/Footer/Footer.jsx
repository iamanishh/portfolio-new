import React, { useEffect, useState } from "react";
import "./footer.scss";
// import { links } from "../../data/data";

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString();
  return (
    <footer id="footer">
      <div className="container footer">
        <div className="social">
          <a
            href="https://github.com/iamanishh"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/iamanishh"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/iamanish__"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
        <div className="time">
          <p>{formattedTime}</p>
          <p>©2024 Manish </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
