import React from 'react';

function Footer({ personal }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">
          © {year} {personal.name || 'TU_NOMBRE'}. Todos los derechos reservados.
        </p>
        <div className="footer-links" aria-label="Redes y enlaces">
          {personal.github && (
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          )}
          {personal.linkedin && (
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
          )}
          {personal.email && (
            <a href={`mailto:${personal.email}`}>Email</a>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
