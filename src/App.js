import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>I'm Mohammed Sarjoon</h1>
        <p>A passionate UI/UX Engineer & Frontend Developer</p>
      </header>

      <main>
        {/* About Me Section */}
        <section id="about" className="about">
          <div className="about-content">
            <img src="profile.jpg" alt="Mohammed Sarjoon" className="about-img" />
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                I'm a UI/UX Engineer and Frontend Developer with a passion for crafting beautiful and functional digital experiences.  
                I focus on user-centered design, modern UI principles, and pixel-perfect implementation.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
  <h2>Projects</h2>
  <div className="project-grid">
    <div className="project-card">
      <img src="project1.jpg" alt="Project 1" />
      <h3>Project One</h3>
      <p>Modern website design with responsive UI.</p>
    </div>
    <div className="project-card">
      <img src="project2.jpg" alt="Project 2" />
      <h3>Project Two</h3>
      <p>Interactive dashboard with smooth UX.</p>
    </div>
    <div className="project-card">
      <img src="project3.jpg" alt="Project 3" />
      <h3>Project Three</h3>
      <p>Landing page with animations and transitions.</p>
    </div>
  </div>
</section>


<section id="services" className="services">
  <h2>Services</h2>
  <div className="service-grid">
    <div className="service-card">
      <h3>UI/UX Design</h3>
      <p>Creating intuitive and user-friendly designs.</p>
    </div>
    <div className="service-card">
      <h3>Frontend Development</h3>
      <p>Building interactive and responsive web interfaces.</p>
    </div>
    <div className="service-card">
      <h3>Prototyping</h3>
      <p>Turning ideas into clickable prototypes.</p>
    </div>
  </div>
</section>

<section id="skills" className="skills">
  <h2>Skills</h2>
  <div className="skill">
    <span>HTML & CSS</span>
    <div className="skill-bar"><div className="skill-fill" style={{ width: "90%" }}></div></div>
  </div>
  <div className="skill">
    <span>JavaScript</span>
    <div className="skill-bar"><div className="skill-fill" style={{ width: "85%" }}></div></div>
  </div>
  <div className="skill">
    <span>React.js</span>
    <div className="skill-bar"><div className="skill-fill" style={{ width: "80%" }}></div></div>
  </div>
  <div className="skill">
    <span>UI/UX Design</span>
    <div className="skill-bar"><div className="skill-fill" style={{ width: "75%" }}></div></div>
  </div>
</section>

      </main>
    </div>
  );
}

export default App;
