import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaVuejs } from "react-icons/fa";
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-img">
        <img src="/about.jpg" alt="Profile" />
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I’m a <span>Frontend Developer</span> who builds responsive and user-friendly web applications.
          I translate design concepts into functional, pixel-perfect interfaces. I develop modern web applications using React, Vue.js, Node.js, and a solid foundation in HTML, CSS, and JavaScript.
          I work with APIs, manage code with Git/GitHub, and ensure smooth, efficient development workflows. With every project, I strive to deliver clean, maintainable, and high-quality solutions 
          that create real impact while continuously improving my skills to achieve greater results.
        </p>
        <div className="tech-icons">
          <h3>Technologies I Work With:</h3>
          <div className="icons">
            <FaReact title="React" size={50} />
            <FaVuejs title="Vue.js" size={50} />
            <FaHtml5 title="HTML5" size={50} />
            <FaCss3Alt title="CSS3" size={50} />
            <FaJsSquare title="JavaScript" size={50} />
          </div>
        </div>
        <button 
          className="cv-btn" 
          onClick={() => window.open("/FaveCV.pdf", "_blank")}
        >
          Download CV
        </button>
      </div>
    </section>
  );
};

export default About;
