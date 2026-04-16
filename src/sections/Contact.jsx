import React from 'react';
import SectionHeading from '../components/SectionHeading.jsx';

function Contact({ id, personal }) {
  const mailto = `mailto:${personal.email}`;

  return (
    <section id={id} className="section" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-main">
          <SectionHeading
            eyebrow="Contacto"
            title="Hablemos de tu próximo proyecto"
          />
          <p className="contact-text">
            Si mi perfil encaja con lo que buscas, estaré encantado de
            conversar. Puedes escribirme directamente por email o a través de
            mis redes.
          </p>

          <div className="contact-info">
            {personal.phone && (
              <a href={`tel:${personal.phone}`} className="contact-link">
                <span className="contact-label">Teléfono</span>
                <span>{personal.phone}</span>
              </a>
            )}
            {personal.email && (
              <a href={mailto} className="contact-link">
                <span className="contact-label">Email</span>
                <span>{personal.email}</span>
              </a>
            )}
            {personal.github && (
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer noopener"
                className="contact-link"
              >
                <span className="contact-label">GitHub</span>
                <span>{personal.github}</span>
              </a>
            )}
            {personal.linkedin && (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="contact-link"
              >
                <span className="contact-label">LinkedIn</span>
                <span>{personal.linkedin}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
