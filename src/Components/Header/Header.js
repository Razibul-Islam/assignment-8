import React from "react";
import logo from "../../img/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="main-header">
      <div className="header">
        <img src={logo} alt="" className="Logo" />
        <h1>Fitness Club</h1>
      </div>
      <h3 className="header-caption">Select your today's exercise</h3>
    </div>
  );
};

export default Header;
