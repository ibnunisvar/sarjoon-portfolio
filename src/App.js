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
      <main>
        <section id="home">Home Section</section>
        <section id="about">About Me Section</section>
        <section id="projects">Projects Section</section>
        <section id="services">Services Section</section>
        <section id="skills">Skills Section</section>
      </main>
    </div>
  );
}

export default App;