import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { links } from "../../data/data";

const Header = () => {
  return (
    <header id="header">
      <div className="container header">
        <div className="logo">
          <Link to="/">
            Manish <span></span>
          </Link>
        </div>
        <nav className="links">
          <ul>
            {links.map(({ name, href }) => (
              <li key={name}>
                <Link to={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
