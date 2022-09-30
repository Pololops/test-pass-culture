import "./Header.css";

import logo from "../../assets/logo-pass-culture.svg";
import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        <span>Pass Culture</span>
        <img data-testid="logo" src={logo} className="header__title__logo" alt="logo Pass Culture" />
      </h1>
      <NavBar data-testid="navbar" />
    </header>
  );
}

export default Header;