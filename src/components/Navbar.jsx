import React from "react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        <a href="#home" className="logo">
          Portfolio<span>.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;