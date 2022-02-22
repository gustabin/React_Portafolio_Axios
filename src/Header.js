import React from "react";
import logo from "./images/logo256x256.png";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__menu">
        <a href="/" className="header__menu__logo">
          {" "}
          <img src={logo} alt="Logo" />
        </a>

        <div className="header__nav">
          <nav>
            <a href="/contacto">Contacto | </a>
            <a href="/#proyectos">Proyectos |</a>
            <a href="https://github.com/gustabin">Github</a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
