import React from "react";
import "./header.scss";

const Header = () => {
  const svgStyles = {
    width: "100%",
    height: "100%",
  };
  return (
    <div className="header">
      <div className="header__left">
        <h1>manish </h1>
      </div>
      <div className="header__right">
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
          odio,consectetur adipisicing elit. Quia odio,
        </h4>
      </div>
    </div>
  );
};

export default Header;
