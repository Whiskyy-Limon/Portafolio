import React from 'react';
import SectionHeading from '../components/SectionHeading.jsx';

function Skills({ id, skills }) {
  return (
    <section id={id} className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          eyebrow="Habilidades"
          title="Stack técnico y fortalezas"
          align="center"
        />
        <div className="skills-grid" role="list">
          {skills.map((group) => (
            <article key={group.category} className="skills-card" role="listitem">
              <h3 className="skills-category">{group.category}</h3>
              <div className="skills-pills" aria-label={group.category}>
                {group.skills.map((skill) => (
                  <span key={skill} className="skills-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
