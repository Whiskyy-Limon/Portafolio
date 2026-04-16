import React from 'react';

function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.featured ? 'project-card-featured' : ''}`}>
      <div className="project-card-header">
        {project.featured && <span className="project-badge">Featured</span>}
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
      </div>
      <div className="project-meta">
        <ul className="project-tech-list" aria-label="Stack tecnológico">
          {project.techStack.map((tech) => (
            <li key={tech} className="project-tech-pill">
              {tech}
            </li>
          ))}
        </ul>
      </div>
      {Array.isArray(project.highlights) && project.highlights.length > 0 && (
        <ul className="project-highlights" aria-label="Puntos destacados del proyecto">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}
      <div className="project-actions">
        <a
          href={project.githubUrl}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer noopener"
        >
          Código
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
