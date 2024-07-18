import React, { useEffect, useState } from "react";
import "./footer.scss";

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString();
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="time">
          <p className="tiny">Local Time</p>
          <p>{formattedTime}</p>
        </div>
        <div className="edition">
          <p className="tiny">Version</p>
          <p> &copy; {new Date().getFullYear()} Edition</p>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="copy"> All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
