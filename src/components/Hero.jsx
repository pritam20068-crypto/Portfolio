import React from "react";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <p className="small-title">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Pritam Mondal</span>
        </h1>

        <h2>Frontend Developer</h2>

        <p className="hero-text">
          I am a passionate fresher interested in creating responsive,
          modern and user-friendly websites using HTML, CSS, Bootstrap
          and React.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View My Projects
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>

      </div>

    </section>
  );
}

export default Hero;