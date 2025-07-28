import React from "react";
import dataEntryImg from "../images/LaundryStop.png";
import "../ProjectCard.css";
import dataGarneyAppImg from "../images/garneyapp.jpg";
import { useEffect } from "react";

const ProjectCardMobile = () => {
    
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
          <img src={dataGarneyAppImg} alt="Garney App - Garbage Tracker System" />
        </div>

        <div className="project-content">
          <a href="https://www.behance.net/gallery/231340533/Garney-App-Garbage-Tracker-System-MAUI-Net-Core-API"
            target="_blank"
            rel="noopener noreferrer"
            className="project-title">
            Garney App - Garbage Tracker System ↗
          </a>

          <p className="project-description">
            A modern mobile application built with .NET MAUI and .NET Core API, designed to streamline waste collection and tracking. Garney enables users to register, log in, schedule pickups, track garbage trucks in real-time, and participate in recycling programs. With a clean UI and efficient backend integration, it promotes smarter, more sustainable waste management.
          </p>

          <div className="project-footer">
            <div className="project-tags">
              <span>MAUI</span>
              <span>.NET Core Api</span>
              <span>MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardMobile;
