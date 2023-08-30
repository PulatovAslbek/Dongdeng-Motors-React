import React from "react";
import "./Footer.css";

import FotLogo from "../../assets/lib/logo.svg"

function Footer() {
  return (
    <footer className="footer container">
      <div className="footer__logo-box">
        <img src={FotLogo} alt="logo" />
        <h2 className="footer__logo--text">DONGFENG MOTOR</h2>
      </div>

      <div className="footer__link-box">
        <ul className="footer__list">
          <h3 className="list__title">SHOWROOM</h3>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Car & SUV
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Minivan & MPV
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Pickup & Offroad
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Bus
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Truck
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Special
            </a>
          </li>
        </ul>
        <ul className="footer__list">
          <h3 className="list__title">SERVICES & SUPPORT</h3>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Market News
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Services Consulting
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Catalogue Download
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Global Network
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              INFORMATION DISCLOSURE
            </a>
          </li>
        </ul>
        <ul className="footer__list">
          <h3 className="list__title">DONGFENG NEWS</h3>
          <li className="footer__item">
            <a className="footer__link" href="#">
              News
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Exhibition Events
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Events & Activities
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Special Events
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Download
            </a>
          </li>
        </ul>
        <ul className="footer__list">
          <h3 className="list__title">ABOUT US</h3>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Company Profile
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Brand Introduction
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Corporate Culture
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Honor & Awards
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Social Responsibilities
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Innovation
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Global Dongfeng
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer
