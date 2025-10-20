import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-logo">FaveCode</h3>
        <ul className="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <p className="footer-text">
          © {new Date().getFullYear()} FaveCode. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
