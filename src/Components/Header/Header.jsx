import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { links } from "../../data/data";

const Header = () => {
  return (
    <header id="header">
      <div className="container header">
        <div className="logo">
          <a href="/">
            Manish <span>.</span>
          </a>
        </div>

        <nav className="links">
          <ul>
            {links.map((link) => (
              <li key={link.name}>
                <Link to={link.href}>{link.name} </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-command size-4"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
