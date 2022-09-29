import "./Header.css";

import React from "react";
import logo from "../../assets/logo-pass-culture.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}

export default Header;