import React from 'react';
import { personalData, navLinks } from './data/siteData.js';
import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Experience from './sections/Experience.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app-root">
      <Navbar
        navLinks={navLinks}
        name={personalData.name}
        role={personalData.role}
      />
      <main>
        <Hero
          id="hero"
          data={personalData.hero}
          name={personalData.name}
          shortName={personalData.shortName}
          role={personalData.role}
          location={personalData.location}
          profileImage={personalData.profileImage}
          summary={personalData.summary}
          github={personalData.github}
          linkedin={personalData.linkedin}
        />
        <About id="about" data={personalData.about} />
        <Skills id="skills" skills={personalData.skills} />
        <Projects id="projects" projects={personalData.projects} />
        <Experience id="experience" items={personalData.experience} />
        <Contact id="contact" personal={personalData} />
      </main>
      <Footer personal={personalData} />
    </div>
  );
}

export default App;
