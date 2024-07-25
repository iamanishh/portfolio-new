import React, { useEffect, useState } from "react";
import "./footer.scss";
import { links } from "../../data/data";
import { Link } from "react-router-dom";

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
        <div className="footer__content">
          <div className="f-left">
            <div className="logo">
              <a href="/">
                Manish <span>.</span>
              </a>
              <p className="tinyy">
                Behind Every Great Application <br />
                Lies a Strong Backend
              </p>
            </div>
            <div className="time">
              <p className="tiny">Local Time</p>
              <p className="w-color">{formattedTime}</p>
            </div>
          </div>

          <div className="f-right">
            <ul>
              {links.map((link) => (
                <li key={link.name}>
                  <Link to={link.href}>{link.name} </Link>
                </li>
              ))}
            </ul>
            <div className="edition">
              <p className="tiny">Version</p>
              <p className="w-color">
                {" "}
                &copy; {new Date().getFullYear()} Edition
              </p>
            </div>
          </div>
        </div>
        <p className="f-copy"> All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
