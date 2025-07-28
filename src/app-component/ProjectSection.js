import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectCardMobile from "./ProjectCardMobile";
import ProjectCardDesktop from "./ProjectCardDesktop";
import "../ProjectCard.css";
import dataEntryImg from "../images/LaundryStop.png";

const ProjectSection = () => {
    const [activeTab, setActiveTab] = useState("webapp");
    
    return (
        <section id="projects" className="section">
            <h3 style={{ color: "#ccd6f6", marginBottom: "1rem" }}>Projects</h3>
            
             <div className="experience-header animate__animated animate__fadeIn"
                    style={{ animationDuration: "1.8s" }}>
                <div className="tab-buttons">
                  <button
                    onClick={() => setActiveTab("webapp")}
                    className={`tab-button ${activeTab === "webapp" ? "active" : ""}`}>
                    Web App
                  </button>
                  <button
                    onClick={() => setActiveTab("mobile")}
                    className={`tab-button ${activeTab === "mobile" ? "active" : ""}`}>
                    Mobile
                  </button>
                  <button
                    onClick={() => setActiveTab("desktop")}
                    className={`tab-button ${activeTab === "desktop" ? "active" : ""}`}>
                    Desktop
                  </button>
                  <button
                    onClick={() => setActiveTab("uidesign")}
                    className={`tab-button ${activeTab === "uidesign" ? "active" : ""}`}>
                    UI/UX
                  </button>
                </div>
              </div>
            
            {activeTab === "webapp" && (
                <ProjectCard />
            )}

            {activeTab === "mobile" && (
                <ProjectCardMobile />
            )}

            {activeTab === "desktop" && (
                <ProjectCardDesktop />
            )}

            {activeTab === "uidesign" && (
                <ProjectCardDesktop />
            )}
        </section>
    )
};

export default ProjectSection;
