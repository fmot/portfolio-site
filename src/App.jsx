import { useState } from "react";
import "./App.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          {menuOpen ? (
            <>
              <h1 className="site-title">Fumiya Otake</h1>
              <button className="close-btn" onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                >
                  <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"></path>
                </svg>
              </button>
            </>
          ) : (
            <>
              <h1 className="site-title">Fumiya Otake</h1>
              <button className="menu-btn" onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                >
                  <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                </svg>
              </button>
            </>
          )}
        </div>

        {menuOpen && (
          <nav className="menu">
            <ul>
              <li>
                <a href="#home">ABOUT</a>
              </li>
              <li>
                <a href="#experience">EXPERIENCE</a>
              </li>
              <li>
                <a href="#skills">SKILLS</a>
              </li>
              <li>
                <a href="#bprojects">PROJECTS</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main>
        <section class="profile">
          <div class="profile-image"></div>
          <h1>FUMIYA OTAKE</h1>
          <p>It is a full stack developer's portfolio site</p>
        </section>

        <section class="experience">
          <h2>Experience</h2>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3>Web Application Developer</h3>
                <p class="period">2022年1月 - 2023年12月</p>
                <p class="role">Full Stack</p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3>Intern</h3>
                <p class="period">2021年7月 - 2021年9月</p>
                <p class="role">Back End</p>
              </div>
            </div>
          </div>
        </section>

        <section class="tech-stack">
          <h2>My Tech Stack</h2>
          <div class="stack-container">
            <div class="stack-section">
              <div class="stack-icon"></div>
              <h3>Back-end</h3>
              <div class="skills">
                <span class="skill"></span>
                <span class="skill"></span>
                <span class="skill"></span>
                <span class="skill"></span>
                <span class="skill"></span>
                <span class="skill"></span>
              </div>
            </div>

            <div class="stack-section">
              <div class="stack-icon"></div>
              <h3>Front-end</h3>
              <div class="skills">
                <span class="skill"></span>
                <span class="skill"></span>
                <span class="skill"></span>
                <span class="skill"></span>
                <span class="skill"></span>
                <span class="skill"></span>
              </div>
            </div>

            <div class="stack-section">
              <div class="stack-icon"></div>
              <h3>DevOps</h3>
              <div class="skills">
                <span class="skill"></span>
                <span class="skill"></span>
                <span class="skill"></span>
                <span class="skill"></span>
                <span class="skill"></span>
                <span class="skill"></span>
              </div>
            </div>
          </div>
        </section>

        <section class="projects">
          <h2>Projects</h2>
          <div class="project-card"></div>
          <div class="project-card"></div>
        </section>

        <section class="contact">
          <h2>Contact</h2>
          <button class="email-btn">Email</button>
          <div class="social-links">
            <a href="#" class="social-link">
              GitHub
            </a>
            <a href="#" class="social-link">
              LinkedIn
            </a>
            <a href="#" class="social-link">
              X
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
