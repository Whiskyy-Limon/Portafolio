import React from 'react';
import SectionHeading from '../components/SectionHeading.jsx';
import TimelineItem from '../components/TimelineItem.jsx';

function Experience({ id, items }) {
  const work = items.filter((item) => item.type === 'work');
  const education = items.filter((item) => item.type === 'education');
  const projects = items.filter((item) => item.type === 'project');
  const certifications = items.filter((item) => item.type === 'certification');

  return (
    <section id={id} className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          eyebrow="Formación y experiencia"
          title="Trayectoria profesional"
        />

        {projects.length > 0 && (
          <div className="timeline-block">
            <h3 className="timeline-block-title">Proyectos destacados</h3>
            <div className="timeline-list" aria-label="Proyectos relevantes">
              {projects.map((item) => (
                <TimelineItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {work.length > 0 && (
          <div className="timeline-block">
            <h3 className="timeline-block-title">Experiencia</h3>
            <div className="timeline-list" aria-label="Experiencia profesional">
              {work.map((item) => (
                <TimelineItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {education.length > 0 && (
          <div className="timeline-block">
            <h3 className="timeline-block-title">Formación</h3>
            <div className="timeline-list" aria-label="Formación académica">
              {education.map((item) => (
                <TimelineItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {certifications.length > 0 && (
          <div className="timeline-block">
            <h3 className="timeline-block-title">Certificaciones</h3>
            <div className="timeline-list" aria-label="Certificaciones obtenidas">
              {certifications.map((item) => (
                <TimelineItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Experience;
