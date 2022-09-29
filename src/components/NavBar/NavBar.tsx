import "./NavBar.css";

import React from "react";
import { NavLink } from 'react-router-dom';


function NavBar() {
  return (
    <nav>
      <ul className="nav">
        <li><NavLink className="nav__link" to="articles" title="articles">articles</NavLink></li>
        <li><NavLink className="nav__link" to="articles" title="articles">Creation</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;