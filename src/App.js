import React from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <motion.nav className="navbar" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </motion.nav>

      {/* Hero Section */}
      <header className="hero">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>I'm Mohammed Sarjoon</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>A passionate UI/UX Engineer & Frontend Developer</motion.p>
      </header>

      <main>
        {/* About Me */}
        <section id="about" className="about">
          <div className="about-content">
            <img src="profile.jpg" alt="Mohammed Sarjoon" className="about-img" />
            <div className="about-text">
              <h2>About Me</h2>
              <p>I'm a UI/UX Engineer and Frontend Developer with a passion for crafting beautiful and functional digital experiences.</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="projects">
          <h2>Projects</h2>
          <div className="project-grid">
            {[1, 2, 3].map((num) => (
              <motion.div key={num} className="project-card" whileHover={{ scale: 1.05 }}>
                <img src={`project${num}.jpg`} alt={`Project ${num}`} />
                <h3>Project {num}</h3>
                <p>Modern UI design with animations.</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="services">
          <h2>Services</h2>
          <div className="service-grid">
            {['UI/UX Design', 'Frontend Dev', 'Prototyping'].map((service, index) => (
              <motion.div key={index} className="service-card" whileHover={{ scale: 1.05 }}>
                <h3>{service}</h3>
                <p>Providing top-notch {service} services.</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="skills">
          <h2>Skills</h2>
          {[{ skill: 'HTML & CSS', level: 90 }, { skill: 'JavaScript', level: 85 }, { skill: 'React.js', level: 80 }].map(({ skill, level }) => (
            <div key={skill} className="skill">
              <span>{skill}</span>
              <motion.div className="skill-bar">
                <motion.div className="skill-fill" style={{ width: `${level}%` }} initial={{ width: 0 }} animate={{ width: `${level}%` }} transition={{ duration: 1 }}></motion.div>
              </motion.div>
            </div>
          ))}
        </section>

        {/* Contact Form */}
        <section id="contact" className="contact">
          <h2>Contact Me</h2>
          <form>
          <label htmlFor="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Your Name" required />

    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Your Email" required />

    <label htmlFor="message">Message</label>
    <textarea id="message" name="message" placeholder="Your Message" required></textarea>

  
            <motion.button type="submit" whileHover={{ scale: 1.05 }}>Send Message</motion.button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
  
  // In the above code, we have added  framer-motion  to animate the navbar, hero section, project cards, service cards, and skills. We have used  motion  component from  framer-motion  to animate the elements. 
  // The  initial  prop is used to set the initial state of the element. The  animate  prop is used to set the final state of the element. The  transition  prop is used to set the duration of the animation. 
  // The  whileHover  prop is used to set the animation effect when the user hovers over the element. 
  // The  scale  property is used to scale the element when the user hovers over it. 
  // The  width  property is used to set the width of the skill bar. 
  // The  App.css  file contains the styles for the components.