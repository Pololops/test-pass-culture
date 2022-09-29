import "./NavBar.css";

import React from "react";

function NavBar() {
  return (
    <nav>
      <ul className="nav">

        <li><a className="nav__link" href="articles" title="articles">menu 1</a></li>
        <li><a className="nav__link" href="articles2" title="articles 2">menu 2</a></li>

      </ul>
    </nav>
  );
}

export default NavBar;