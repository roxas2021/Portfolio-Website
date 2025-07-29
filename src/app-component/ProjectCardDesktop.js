import React from "react";
import dataEntryImg from "../images/LaundryStop.png";
import "../ProjectCard.css";
import { useEffect } from "react";

const ProjectCardDesktop = () => {
    
        useEffect(() => {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                entry.target.classList.toggle("in-view", entry.isIntersecting);
              });
            },
            { threshold: 0.3 }
          );
    
          const cards = document.querySelectorAll(".project-card");
          cards.forEach((card) => observer.observe(card));
    
          return () => cards.forEach((card) => observer.unobserve(card));
        }, []);

  return (
    <div className="project-list">
      On working...
    </div>
  );
};

export default ProjectCardDesktop;
