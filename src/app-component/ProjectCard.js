import React from "react";
import dataEntryImg from "../images/LaundryStop.png";
import dataLibraryImg from "../images/LibrarySystem.png";
import dataEccdisImg from "../images/Eccdis.png";
import dataIMSImg from "../images/InventorySystem.png";
import dataHrmoprofilingImg from "../images/hrmoprifiling.png";
import "../ProjectCard.css";
import { useEffect } from "react";

const ProjectCard = () => {

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
          <img src={dataEntryImg} alt="Bubbly Laundry Stop" />
        </div>

        <div className="project-content">
          <a href="https://www.behance.net/gallery/180003719/Laundry-Management-System-Laravel-PHP-MYSQL"
            target="_blank"
            rel="noopener noreferrer"
            className="project-title">
            Bubbly Laundry Stop ↗
          </a>

          <p className="project-description">
            Web app for streamlining laundry shop operations. Includes role-based
            access, order management, and real-time status tracking with a modern
            Laravel-PHP stack.
          </p>

          <div className="project-footer">
            <div className="project-tags">
              <span>Laravel</span>
              <span>PHP</span>
              <span>MySQL</span>
              <span>Bootstrap</span>
            </div>
          </div>
        </div>
      </div>

      <div className="project-card animate-on-scroll"
                    style={{ animationDuration: "1.8s" }}>
        <div className="project-image">
          <img src={dataLibraryImg} alt="Library Management System" />
        </div>

        <div className="project-content">
          <a href="https://www.behance.net/gallery/162638659/Library-Management-System-ASPNET-C"
            target="_blank"
            rel="noopener noreferrer"
            className="project-title">
            Library Management System ↗
          </a>

          <p className="project-description">
            A modern library management system built using ASP.NET and C#, designed to handle book inventory, member registrations, lending/return transactions, and overdue tracking.
          </p>

          <div className="project-footer">
            <div className="project-tags">
              <span>C#</span>
              <span>ASP.NET</span>
              <span>MSSQL</span>
              <span>Bootstrap</span>
            </div>
          </div>
        </div>
      </div>

      <div className="project-card animate-on-scroll"
                    style={{ animationDuration: "1.8s" }}>
        <div className="project-image">
          <img src={dataEccdisImg} alt="Childhood And Information System" />
        </div>

        <div className="project-content">
          <a href="https://www.behance.net/gallery/162644155/ECCD-Information-System-ASPNET-C"
            target="_blank"
            rel="noopener noreferrer"
            className="project-title">
            Childhood And Information System ↗
          </a>

          <p className="project-description">
            ECCD Information System is a web-based application developed using ASP.NET and C#, designed to streamline the management of Early Childhood Care and Development (ECCD) data.
          </p>

          <div className="project-footer">
            <div className="project-tags">
              <span>C#</span>
              <span>ASP.NET</span>
              <span>MSSQL</span>
              <span>Bootstrap</span>
            </div>
          </div>
        </div>
      </div>

      <div className="project-card animate-on-scroll"
                    style={{ animationDuration: "1.8s" }}>
        <div className="project-image">
          <img src={dataIMSImg} alt="Inventory Management System" />
        </div>

        <div className="project-content">
          <a href="https://www.behance.net/gallery/172442025/INVENTORY-MANAGEMENT-SYSTEM-ASPNET-C-MSSQL"
            target="_blank"
            rel="noopener noreferrer"
            className="project-title">
            Inventory Management System ↗
          </a>

          <p className="project-description">
            Inventory Management System is a web application built with ASP.NET, C#, and MSSQL that enables businesses to track products, manage stock levels, and generate reports. It features role-based access, intuitive dashboards, and real-time inventory updates for efficient warehouse and item control.
          </p>

          <div className="project-footer">
            <div className="project-tags">
              <span>C#</span>
              <span>ASP.NET</span>
              <span>MSSQL</span>
              <span>Bootstrap</span>
            </div>
          </div>
        </div>
      </div>

      <div className="project-card animate-on-scroll"
                    style={{ animationDuration: "1.8s" }}>
        <div className="project-image">
          <img src={dataHrmoprofilingImg} alt="HRMO Profiling" />
        </div>

        <div className="project-content">
          <a href="https://www.behance.net/gallery/217910923/Php-Laravel-Mini-HRMO-Profiling-with-PDF-Uploading"
            target="_blank"
            rel="noopener noreferrer"
            className="project-title">
            HRMO Profiling ↗
          </a>

          <p className="project-description">
            Mini HRMO Profiling System is a Laravel-based web app designed to manage employee records efficiently. It features profile creation, PDF document uploads, and user-friendly interfaces tailored for HR departments to streamline personnel management and documentation.
          </p>

          <div className="project-footer">
            <div className="project-tags">
              <span>PHP</span>
              <span>Laravel</span>
              <span>MySQL</span>
              <span>Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
