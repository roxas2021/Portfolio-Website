import React from "react";
import "../ProjectCard.css";
import dataZendTaskImg from "../images/zendtask.jpg";
import dataGarneyAppImg from "../images/garney.jpg";
import { useEffect } from "react";

const ProjectCardUIUX = () => {
    
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

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate__animated", "animate__slideInUp");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      const targets = document.querySelectorAll(".animate-on-scroll");
      targets.forEach((target) => observer.observe(target));

      return () => targets.forEach((target) => observer.unobserve(target));
    }, []);

  return (
    <div className="project-list">
      <div className="project-card animate-on-scroll"
                    style={{ animationDuration: "1.8s" }}>
        <div className="project-image">
          <img src={dataGarneyAppImg} alt="Garney App - Garbage Tracker System (UI/UX Design)" />
        </div>

        <div className="project-content">
          <a href="https://www.figma.com/design/TbMdpKOVui5VX9nqEXiuvF/Untitled?node-id=0-1&p=f"
            target="_blank"
            rel="noopener noreferrer"
            className="project-title">
            Garney App - Garbage Tracker System (UI/UX Design) ↗
          </a>

          <p className="project-description">
            A clean and user-friendly mobile interface designed for efficient garbage management. Users can easily sign in, upload photos of waste, and track garbage locations in real time. The UI emphasizes intuitive navigation, modern visuals, and accessibility—supporting smoother collaboration between citizens and waste services.
          </p>

          <div className="project-footer">
            <div className="project-tags">
              <span>FIGMA</span>
              <span>UI/UX</span>
            </div>
          </div>
        </div>
      </div>

      <div className="project-card animate-on-scroll"
                    style={{ animationDuration: "1.8s" }}>
        <div className="project-image">
          <img src={dataZendTaskImg} alt="ZendTask - Task Management App (UI/UX Design)" />
        </div>

        <div className="project-content">
          <a href="https://www.figma.com/design/9U8GFFeTpHWfeel1A1ODL6/ZendTask?node-id=0-1&p=f"
            target="_blank"
            rel="noopener noreferrer"
            className="project-title">
            ZendTask - Task Management App (UI/UX Design) ↗
          </a>

          <p className="project-description">
            ZendTask is a clean, intuitive task management app designed with user-centered principles in mind. Built in Figma, the interface emphasizes clarity, ease of navigation, and modern aesthetics. From task creation to real-time updates and progress tracking, every element was crafted to enhance user experience and productivity across mobile and desktop views.
          </p>

          <div className="project-footer">
            <div className="project-tags">
              <span>FIGMA</span>
              <span>UI/UX</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardUIUX;
