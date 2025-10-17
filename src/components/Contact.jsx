import React from "react";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import "./Contact.css"; // make sure you have this file

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-text">
        <h2>Let’s Build Something Phenomenal 🚀</h2>
        <p>
          I’m open to collaborations, freelance projects, and remote work
          opportunities. Let’s connect and turn your ideas into reality!
        </p>

        <div className="social-icons">
          <a
            href="https://x.com/Taylordave24?t=Puut1XmNROlIzqtaMvPa9A&s=09"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
          >
            <FaTwitter size={30} color="#1DA1F2" />
          </a>

          <a
            href="mailto:emmanuelonaolapo11@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
          >
            <FaEnvelope size={30} color="#ffffff" />
          </a>

          <a
            href="https://www.linkedin.com/in/emmanuelonaolapo"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin size={30} color="#0077B5" />
          </a>

          <a
            href="https://www.upwork.com/freelancers/~favecode"
            target="_blank"
            rel="noopener noreferrer"
            title="Upwork"
          >
            <SiUpwork size={30} color="#6fda44" />
          </a>
        </div>
      </div>

      <form className="contact-form">
        <h3>Send a Message</h3>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email Address" />
        <textarea placeholder="Your Message..." rows="4"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
