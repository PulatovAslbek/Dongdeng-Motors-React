import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/lib/logo.svg";
import close from "../../assets/lib/close.svg";

const Header = () => {

  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNavActive = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <header className="header">
      <div className="header__nav container">
        <img src={logo} alt="site-log" />

        <div className="burger-menu" onClick={toggleNavActive}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav__list ${isNavActive ? "active" : ""}`}>
          <li className="nav__items">
            <a className="items__link" href="#">
              Home
            </a>
          </li>
          <li className="nav__items">
            <a className="items__link" href="#">
              Showroom
            </a>
          </li>
          <li className="nav__items">
            <a className="items__link" href="#">
              Services & Support
            </a>
          </li>
          <li className="nav__items">
            <a className="items__link" href="#">
              Dongfeng News
            </a>
          </li>
          <li className="nav__items">
            <a className="items__link" href="#">
              About Us
            </a>
          </li>
          <div className="close-button" onClick={() => setIsNavActive(false)}>
            <img src={close} alt="" />
          </div>
        </ul>
      </div>
      <hr className="header__break--line" />
    </header>
  );
};

export default Header;
