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
      link: "https://68f3d82d2e8a8739aed5e664--examsquestion.netlify.app/",
    },
    {
      title: "Portfolio Website",
      image: "/Website2.png",
      link: "https://sellcod.netlify.app/",
    },
    {
      title: "Wordpress",
      image: "/website4.jpg",
      link: "https://68f8cf3c3079e50008c3b963--author123.netlify.app/",
    },
  
  ];

  return (
    <section id="portfolio" className="portfolio">
      <h2>Portfolio</h2>
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