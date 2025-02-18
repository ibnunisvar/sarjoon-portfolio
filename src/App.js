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
        <section id="about">About Me Section</section>
        <section id="projects">Projects Section</section>
        <section id="services">Services Section</section>
        <section id="skills">Skills Section</section>
      </main>
    </div>
  );
}

export default App;
