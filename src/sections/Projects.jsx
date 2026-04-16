import React from 'react';
import SectionHeading from '../components/SectionHeading.jsx';
import ProjectCard from '../components/ProjectCard.jsx';

function Projects({ id, projects }) {
  return (
    <section id={id} className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          eyebrow="Proyectos"
          title="Selección de trabajos destacados"
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
