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
          Welcome to my digital playground. Crafting robust backend solutions,
          one line of code at a time.
        </h4>
      </div>
    </div>
  );
};

export default Header;
