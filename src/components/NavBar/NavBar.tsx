import "./NavBar.css";

import React from "react";
import { NavLink } from 'react-router-dom';


function NavBar() {
  return (
    <nav>
      <ul className="nav">
        <li><NavLink className="nav__link" to="/" title="articles">Lis les articles</NavLink></li>
        <li><NavLink className="nav__link" to="/create" title="articles">Ajoute un article</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;