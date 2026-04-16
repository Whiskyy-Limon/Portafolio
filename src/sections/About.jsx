import React from 'react';
import SectionHeading from '../components/SectionHeading.jsx';

function About({ id, data }) {
  return (
    <section id={id} className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading eyebrow="Sobre mí" title={data.title} />
        <div className="about-grid">
          <div className="about-text">
            {data.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="about-highlight">
            <h3 className="about-highlight-title">Enfoque profesional</h3>
            <ul className="about-highlight-list">
              <li>Desarrollo full stack de aplicaciones web completas.</li>
              <li>Interés en inteligencia artificial y soluciones basadas en datos.</li>
              <li>Aprendizaje continuo y actualización tecnológica constante.</li>
              <li>Capacidad de adaptación a proyectos reales y entornos colaborativos.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
