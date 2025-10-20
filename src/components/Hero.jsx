import React from "react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-text">
        <h1>
          Hi, I’m <span>Frontend Developer</span>.
        </h1>
       
        <p>
          I build responsive, user-friendly, and visually appealing web
          applications that help businesses and individuals stand out online.
        </p>
        <button className="contact-btn" onClick={scrollToContact}>
          Let’s Work Together
        </button>
      </div>
      <div className="hero-img">
        <img src="/about.jpg" alt="Onaolapo Favour" />
      </div>
    </section>
  );
};

export default Hero;
