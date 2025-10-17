import React from "react";
import { Globe, Code2, Server } from "lucide-react";
import "./Services.css";

const Services = () => {
  const data = [
    {
      icon: <Server size={32} />,
      title: "API & Dynamic Web Apps",
      desc: "I build dynamic web applications that connect to APIs to fetch and display real-time data. My projects demonstrate strong skills in working with RESTful APIs, handling asynchronous requests, and creating smooth, interactive user experiences using React or Vue.",
    },
    {
      icon: <Globe size={32} />,
      title: "WordPress",
      desc: "I design and customize WordPress websites focused on clean design, fast performance, and easy content management. I develop responsive, user-friendly sites using themes, plugins, and custom features tailored to each client’s unique goals.",
      active: true,
    },
    {
      icon: <Code2 size={32} />,
      title: "Web Development",
      desc: "I specialize in modern web development, crafting responsive and interactive websites using HTML, CSS, JavaScript, React, and Vue. I focus on writing clean code, optimizing performance, and delivering great user experiences across all devices.",
    },
  ];

  return (
    <section id="services" className="services">
      <h2 className="services-title">My Services</h2>
      <div className="services-container">
        {data.map((item, index) => (
          <div
            key={index}
            className={`service-card ${item.active ? "active" : ""}`}
          >
            <div className="service-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
