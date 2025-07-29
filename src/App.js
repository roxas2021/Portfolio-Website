import { useEffect, useState } from "react";
import ProjectSection from "./app-component/ProjectSection";
import ChatBox from "./app-component/ChatBox";
import "./App.css";
import "./App-DarkMode.css";
import "animate.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("fulltime");
  const [expandedEntries, setExpandedEntries] = useState({});
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [showContactsModal, setShowContactsModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sidebar = document.querySelector(".sidebar");
      const sidebarHeight = sidebar?.offsetHeight || 0;
      const isMobile = window.innerWidth <= 768;

      if (isMobile && window.scrollY > sidebarHeight) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              entry.target.classList.toggle("in-view", entry.isIntersecting);
            });
          },
          { threshold: 0.3 }
      );
      
          const cards = document.querySelectorAll(".job-entry");
          cards.forEach((card) => observer.observe(card));
      
          return () => cards.forEach((card) => observer.unobserve(card));
      }, [activeTab]);

  const toggleEntry = (index) => {
    setExpandedEntries((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    const links = document.querySelectorAll("nav a");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").slice(1);
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

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
  }, [activeTab]);

  return (
    <div className="app-container">
      {/* <button 
        className="theme-toggle"
        onClick={() => setDarkMode((prev) => !prev)}
        aria-label = "Toggle dark/light mode"
      > {darkMode ? "🌞" : "🌙"}
      </button> */}

      <aside className="sidebar">
        <div className="sidebar-content">
          <h1 className="name animate__animated animate__slideInLeft">Ferdinand Roxas</h1>
          <p className="title animate__animated animate__slideInLeft">Software Developer</p>
          <p className="tagline animate__animated animate__slideInLeft">Building user-first, scalable software for the modern web, windows form and mobile app.</p>
          <a href={`${process.env.PUBLIC_URL}/FerdinandRoxas.pdf`} download>
            <button className="top-button animate__animated animate__fadeIn">Download CV</button>
          </a>
          <nav className="sidebar-nav animate__animated animate__fadeIn">
            <ul>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#experience">EXPERIENCE</a></li>
              <li><a href="#projects">PROJECTS</a></li>
              <li><a href="#" onClick={(e) => {
                      e.preventDefault();
                      setShowContactsModal(true);
                    }}>CONTACTS</a>
              </li>
            </ul>
          </nav>
          <div className="social-icons animate__animated animate__fadeIn">
            <a href="https://www.facebook.com/roxas2000/" target="_blank"><i className="fab fa-facebook"></i></a>
            <a href="https://www.linkedin.com/in/ferdinand-roxas-768a96155/" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/roxas2021" target="_blank"><i className="fab fa-github"></i></a>
            <a href="https://www.behance.net/roxasfredz" target="_blank"><i className="fab fa-behance"></i></a>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <div className="main-content-context">
          <section id="about" className="section animate__animated animate__slideInRight" style={{ animationDuration: "1.8s" }}>
            <h3>About Me</h3>
            <p>
              Hi, I'm a Software developer passionate about committed to crafting clean, efficient
              code that drives innovation. With a
              curious mind and a love for problem solving, I thrive on the challenges that
              programming presents.
            </p>
            <p>
              My journey in software development has been fueled by a desire to create impactful
              solutions that enhance user experiences and streamline processes. I believe in the
              power of collaboration and continuous learning, always seeking to expand my skills
              and knowledge.
            </p>
            <p>
              Currently, I'm a Mid Fullstack developer at Octal Philippines, specializing in Frontend
              and backend development. I contribute to the creation and and maintenance of the applications
              to ensure they are user-friendly, efficient, and scalable.
            </p>
            <p>
              Asside from my professional work, I am also working as a freelance developer, where I take on
              various projects that allow me to explore new technologies and methodologies. This side
              work not only enhances my technical skills but also provides me with a broader perspective on
              the software development landscape.
            </p>
          </section>

          <section id="experience" className="section">
             <div className="experience-header animate__animated animate__fadeIn" style={{ animationDuration: "1.8s" }}>
                <h3>Experience</h3>
                <div className="tab-buttons">
                  <button
                    onClick={() => setActiveTab("fulltime")}
                    className={`tab-button ${activeTab === "fulltime" ? "active" : ""}`}
                  >
                    Full Time
                  </button>
                  <button
                    onClick={() => setActiveTab("freelance")}
                    className={`tab-button ${activeTab === "freelance" ? "active" : ""}`}
                  >
                    Freelance
                  </button>
                </div>
              </div>

              {activeTab === "fulltime" && (
                <>
                  <div
                    className={`job-entry animate-on-scroll ${!expandedEntries[0] ? "collapsed" : ""}`}
                    onClick={() => toggleEntry(0)}
                    style={{ animationDuration: "1.8s" }}>
                    <div className="job-meta">
                      <span className="job-date">Oct 2023 — Present 1yr 10 mos</span>
                      <h3 className="job-company">Octal Philippines Incorporated</h3>
                      <h4 className="job-title">Software Developer</h4>
                    </div>
                    <div className="job-content">
                      <ul className="job-bullets">
                        <li>Diagnosed and resolved technical issues by analyzing and optimizing existing applications, systems, and databases, including Oracle Database and MSSQL, to ensure peak performance and reliability.</li>
                        <li>Designed, developed, and deployed scalable web applications using ASP.NET Core, ASP.NET MVC, and C#, with a focus on cloud-based solutions.</li>
                        <li>Developed and maintained desktop applications using the .NET Framework, delivering robust and user-friendly solutions.</li>
                        <li>Collaborated with cross-functional teams to propose and implement innovative technical ideas, driving efficiency and resolving complex system challenges.</li>
                      </ul>
                    </div>
                    <div className="tech-tags">
                      <span>.NET Framework</span><span>ASP.NET MVC / Core</span><span>C#</span><span>Oracle Database</span><span>MSSQL</span><span>Desktop App</span>
                    </div>
                  </div>

                  <div
                    className={`job-entry animate-on-scroll ${!expandedEntries[1] ? "collapsed" : ""}`}
                    onClick={() => toggleEntry(1)}
                    style={{ animationDuration: "1.8s" }}>
                    <div className="job-meta">
                      <span className="job-date">Jun 2022 — Oct 2023 1 yr 5 mos</span>
                      <h3 className="job-company">Symon Systems And Allied Services Inc.</h3>
                      <h4 className="job-title">Software Developer</h4>
                    </div>
                    <div className="job-content">
                      <ul className="job-bullets">
                        <li>Collaborated with application system, and database owners to diagnose issues, identify root causes, and implement effective solutions, ensuring system stability and performance.</li>
                        <li>Proposed and communicated innovative technical ideas to the team, contributing to the resolution of complex issues and improving overall system efficiency.</li>
                        <li>Developed and implemented both temporary workarounds and permanent fixes to address critical system challenges, minimizing downtime and enhancing user experience.</li>
                        <li>Designed, developed, and deployed system applications using ASP.NET Core, ASP.NET MVC, C#, HTML, jQuery, and AJAX, ensuring seamless functionality and scalability.</li>
                        <li>Built and maintained desktop applications using the .NET Framework, delivering robust and user-friendly solutions tailored to business needs.</li>
                      </ul>
                    </div>
                    <div className="tech-tags">
                      <span>ASP.NET MVC</span><span>ASP.NET Core</span><span>C#</span><span>HTML / CSS / JQUERY</span><span>C# Win Form</span>
                    </div>
                  </div>

                  <div className="job-entry animate-on-scroll"
                    style={{ animationDuration: "1.8s" }}>
                    <div className="job-meta">
                      <span className="job-date">Sep 2019 — Jun 2022 2 yrs 10 mos</span>
                      <h3 className="job-company">CONDUENT - Data Processing</h3>
                      <h4 className="job-title">Data Entry</h4>
                    </div>
                    <div className="job-content">
                      <ul className="job-bullets">
                        <li>Processing Data based on Outsourcing Clients Need</li>
                      </ul>
                    </div>
                    <div className="tech-tags">
                      <span>Encoding</span>
                    </div>
                  </div>
                </>
              )}

              {activeTab === "freelance" && (
                <>
                  <div className="job-entry animate-on-scroll"
                    style={{ animationDuration: "1.8s" }}>
                    <div className="job-meta">
                      <span className="job-date">Jan 2025 - June 2025 6 mos</span>
                      <h3 className="job-company">PPSTA</h3>
                      <h4 className="job-title">Software Developer</h4>
                    </div>
                    <div className="job-content">
                      <ul className="job-bullets">
                        <li>Full stack developer of the new implemented system.</li>
                        <li>Designed and developed, system applications using Cake PHP, delivering reliable and scalable solutions.</li>
                        <li>Redesign UI of web applications delivering reliable and scalable solutions.</li>
                      </ul>
                    </div>
                    <div className="tech-tags">
                      <span>Cake PHP</span><span>MySQL</span><span>Github</span>
                    </div>
                </div>

                  <div
                    className={`job-entry animate-on-scroll ${!expandedEntries[2] ? "collapsed" : ""}`}
                    onClick={() => toggleEntry(2)}
                    style={{ animationDuration: "1.8s" }}>
                    <div className="job-meta">
                      <span className="job-date">Nov 2022 - Feb 2023 4 mos</span>
                      <h3 className="job-company">TeQnovation PEC Inc.</h3>
                      <h4 className="job-title">Software Developer</h4>
                    </div>
                    <div className="job-content">
                      <ul className="job-bullets">
                        <li>Analyzed and resolved issues by engaging with applications, systems, and databases, utilizing SQL and Microsoft SQL Server to diagnose problems and implement effective fixes.</li>
                        <li>Proposed and communicated innovative technical ideas to the team, contributing to the development of solutions that addressed complex system challenges.</li>
                        <li>Developed and implemented both temporary workarounds and permanent fixes, ensuring minimal disruption and improved system performance.</li>
                        <li>Designed, developed, and deployed system applications using C# and Visual Basic .NET (VB.NET), delivering reliable and scalable solutions.</li>
                      </ul>
                    </div>
                    <div className="tech-tags">
                      <span>C#</span><span>MSSQL</span><span>Visual Basic .Net</span>
                    </div>
                </div>
                </>
              )}
          </section>

          <ProjectSection/>
        </div>

        {showScrollUp && (
          <div className="scroll-button-up">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>⬆</button>
          </div>
        )}
      </main>

        <ChatBox />
      
      {/* Pop-up Modal for Contacts */}
      {showContactsModal && (
        <div className="modal-overlay" onClick={() => setShowContactsModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-entry">
              <h3>Contact Information</h3>
              <p className="modal-subtext">Here are the ways you can reach me</p>

              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <strong>Email</strong>
                  <p>roxasfredinz@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="fas fa-phone-alt"></i>
                <div>
                  <strong>Phone</strong>
                  <p>+63 991 218 2877</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <strong>Location</strong>
                  <p>Hindang Leyte, Philippines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
