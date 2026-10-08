import React from "react";

function About() {
  return (
    <section id="about" className="section">

      <div className="section-title">
        <p>GET TO KNOW ME</p>
        <h2>About Me</h2>
      </div>

      <div className="about-container">

        <div className="about-card">
          <div className="about-icon">01</div>
          <h3>Who I Am</h3>

          <p>
            I am a motivated and enthusiastic fresher with a strong
            interest in frontend web development. I enjoy creating
            clean, responsive and user-friendly websites.
          </p>

          <p>
            I have developed projects using HTML, CSS, Bootstrap and
            React. These projects have helped me gain practical
            experience in designing interfaces and building web
            applications.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">02</div>
          <h3>My Goal</h3>

          <p>
            My goal is to start my career as a frontend developer and
            continue improving my skills by working on real-world
            projects.
          </p>

          <p>
            I am always interested in learning new technologies and
            improving my problem-solving and development skills.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;