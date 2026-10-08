import React from "react";

function Resume() {
  return (
    <section id="resume" className="section resume-section">

      <div className="section-title">
        <p>MY QUALIFICATIONS</p>
        <h2>Resume</h2>
      </div>

      <div className="resume-container">

        <div className="resume-content">

          <h3>Frontend Developer</h3>

          <p>
            Fresher with practical experience in frontend development
            through personal and academic projects.
          </p>

          <div className="resume-details">

            <div>
              <strong>Experience</strong>
              <span>Fresher</span>
            </div>

            <div>
              <strong>Projects</strong>
              <span>3 Projects</span>
            </div>

            <div>
              <strong>Specialization</strong>
              <span>Frontend Development</span>
            </div>

          </div>

          <a
            href="/resume.pdf"
            className="btn primary-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>

        </div>

      </div>

    </section>
  );
}

export default Resume;