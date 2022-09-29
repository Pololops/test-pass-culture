import "./Header.css";

import React from "react";
import logo from "../../assets/logo-pass-culture.svg";
import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        Pass Culture
        <img data-testId="logo" src={logo} className="header__title__logo" alt="logo Pass Culture" />
      </h1>
      <NavBar data-testId="navbar" />
    </header>
  );
}

export default Header;