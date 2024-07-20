import React from "react";
import "./header.scss";
import programmer from "../../assets/images/programmer.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <h1>manish </h1>
      </div>
      <div className="header__right">
        <h4>Hi there, 👋</h4>

        <h4 className="head">
          I'm a software engineer with a passion for backend development. I
          enjoy building dynamic website and crafting robust backend solution.
        </h4>
      </div>
    </div>
  );
};

export default Header;
