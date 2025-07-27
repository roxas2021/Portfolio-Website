import { useEffect, useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("fulltime");

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

  return (
    <div className="app-container">
      <button 
        className="theme-toggle"
        onClick={() => setDarkMode((prev) => !prev)}
        aria-label = "Toggle dark/light mode"
      > {darkMode ? "🌞" : "🌙"}
      </button>

      <aside className="sidebar">
        <div className="sidebar-content">
          <h1 className="name">Ferdinand Roxas</h1>
          <p className="title">Software Developer</p>
          <p className="tagline">Building user-first, scalable software for the modern web.</p>
          <nav className="sidebar-nav">
            <ul>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#experience">EXPERIENCE</a></li>
              <li><a href="#projects">PROJECTS</a></li>
            </ul>
          </nav>
          <div className="social-icons">
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <div className="main-content-context">
          <section id="about" className="section">
            <h3>About</h3>
            <p>
              I'm a Software developer passionate about committed to crafting clean, efficient
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
            <h3>Experience</h3>

            <div className="tab-buttons">
              <button onClick={() => setActiveTab("fulltime")} className={`tab-button ${activeTab === "fulltime" ? "active" : ""}`}>
                Full Time
              </button>
              <button onClick={() => setActiveTab("freelance")} className={`tab-button ${activeTab === "freelance" ? "active" : ""}`}>
                Freelance
              </button>
            </div>

            {activeTab === "fulltime" && (
              <>
                <div className="job-entry">
                  <div className="job-meta">
                    <span className="job-date">Oct 2023 — Present 1yr 10 mos</span>
                    <h3 className="job-company">Octal Philippines Inc.</h3>
                    <h4 className="job-title">Software Developer</h4>
                  </div>
                  <ul className="job-bullets">
                    <li>Diagnosed and resolved technical issues by analyzing and optimizing existing applications, systems, and databases, including Oracle Database and MSSQL, to ensure peak performance and reliability.</li>
                    <li>Designed, developed, and deployed scalable web applications using ASP.NET Core, ASP.NET MVC, and C#, with a focus on cloud-based solutions.</li>
                    <li>Developed and maintained desktop applications using the .NET Framework, delivering robust and user-friendly solutions.</li>
                    <li>Collaborated with cross-functional teams to propose and implement innovative technical ideas, driving efficiency and resolving complex system challenges.</li>
                  </ul>
                  <div className="tech-tags">
                    <span>.NET Framework</span><span>ASP.NET MVC / Core</span><span>C#</span><span>Oracle Database</span><span>MSSQL</span><span>Desktop App</span>
                  </div>
                </div>

                <div className="job-entry">
                  <div className="job-meta">
                    <span className="job-date">Jun 2022 — Oct 2023 1 yr 5 mos</span>
                    <h3 className="job-company">Symon Systems And Allied Services Inc.</h3>
                    <h4 className="job-title">Software Developer</h4>
                  </div>
                  <ul className="job-bullets">
                    <li>Collaborated with application system, and database owners to diagnose issues, identify root causes, and implement effective solutions, ensuring system stability and performance.</li>
                    <li>Proposed and communicated innovative technical ideas to the team, contributing to the resolution of complex issues and improving overall system efficiency.</li>
                    <li>Developed and implemented both temporary workarounds and permanent fixes to address critical system challenges, minimizing downtime and enhancing user experience.</li>
                    <li>Designed, developed, and deployed system applications using ASP.NET Core, ASP.NET MVC, C#, HTML, jQuery, and AJAX, ensuring seamless functionality and scalability.</li>
                    <li>Built and maintained desktop applications using the .NET Framework, delivering robust and user-friendly solutions tailored to business needs.</li>
                  </ul>
                  <div className="tech-tags">
                    <span>ASP.NET MVC</span><span>ASP.NET Core</span><span>C#</span><span>HTML / CSS / JQUERY</span><span>C# Win Form</span>
                  </div>
                </div>

                <div className="job-entry">
                  <div className="job-meta">
                    <span className="job-date">Sep 2019 — Jun 2022 2 yrs 10 mos</span>
                    <h3 className="job-company">CONDUENT - Data Processing</h3>
                    <h4 className="job-title">Data Entry</h4>
                  </div>
                  <ul className="job-bullets">
                    <li>Processing Data based on Outsourcing Clients Need</li>
                  </ul>
                  <div className="tech-tags">
                    <span>Encoding</span>
                  </div>
                </div>
              </>
            )}

            {activeTab === "freelance" && (
              <div className="job-entry">
                <div className="job-meta">
                  <span className="job-date">Ongoing</span>
                  <h3 className="job-company">Freelance Projects</h3>
                  <h4 className="job-title">Freelance Developer</h4>
                </div>
                <ul className="job-bullets">
                  <li>Building websites and dashboards for clients using modern frontend technologies.</li>
                  <li>Collaborating with remote teams and using Git for version control and delivery.</li>
                  <li>Working on cross-platform responsive layouts, integrations, and bug fixes.</li>
                </ul>
                <div className="tech-tags">
                  <span>React</span><span>JavaScript</span><span>Node.js</span><span>GitHub</span>
                </div>
              </div>
            )}
          </section>

          <section id="projects" className="section">
            <h2>Projects</h2>
            <p>Project showcase coming soon...</p>
          </section>
        </div>
      </main>
    </div>
  );
}
