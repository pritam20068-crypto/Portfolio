import React from "react";

function Contact() {
  return (
    <section id="contact" className="section">

      <div className="section-title">
        <p>GET IN TOUCH</p>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Let's Connect</h3>

          <p>
            I am currently looking for opportunities where I can
            learn, contribute and grow as a frontend developer.
          </p>

          <div className="contact-item">
            <strong>Email</strong>
            <a href="mailto:yourmail@gmail.com">
              yourmail@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <strong>GitHub</strong>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </div>

          <div className="contact-item">
            <strong>LinkedIn</strong>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={(e) => e.preventDefault()}
        >

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit" className="btn primary-btn">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;