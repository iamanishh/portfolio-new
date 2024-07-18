import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./navbar.scss";

const links = [
  { name: "about", href: "#about" },
  { name: "skills", href: "#skills" },
  { name: "work", href: "#work" },
];

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" width="20px" />
      </div>
      <div className="links">
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <Link className="contact" to="#contact">
          let's work together
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
