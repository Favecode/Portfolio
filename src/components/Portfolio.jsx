import React from "react";
import "./Portfolio.css"; // (optional if you want to style it)

const Portfolio = () => {
  const works = [
      {
      title: "Web Development",
      image: "/Website.png",
      link: "https://sellcode.netlify.app/",
    },
    {
      title: "Designs",
      image: "/website3.png",
      link: "https://www.behance.net/gallery/logo-designs",
    },
    {
      title: "Portfolio Website",
      image: "/Website2.png",
      link: "",
    },
    {
      title: "Wordpress",
      image: "/website4.png",
      link: "https://www.dribbble.com/",
    },
  
  ];

  return (
    <section id="portfolio" className="portfolio">
      <h2>Dev Fave</h2>
      <div className="portfolio-grid">
        {works.map((work, i) => (
          <a
            key={i}
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-item"
          >
            <img src={work.image} alt={work.title} />
            <h3>{work.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
