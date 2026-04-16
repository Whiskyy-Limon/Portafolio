import React from 'react';

function Hero({
  id,
  data,
  name,
  shortName,
  role,
  location,
  profileImage,
  summary,
  github,
  linkedin,
}) {
  const handlePrimaryClick = () => {
    const el = document.getElementById(data.primaryActionTargetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id={id} className="section hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="hero-eyebrow">{data.availabilityText}</p>
          <h1 id="hero-title" className="hero-title">
            <span className="hero-name">{name || 'TU_NOMBRE'}</span>
            <span className="hero-role">{role || 'TU_ROL'}</span>
          </h1>
          <p className="hero-text">{data.subheadline}</p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary" onClick={handlePrimaryClick}>
              {data.primaryActionLabel}
            </button>
            {data.secondaryActionUrl && (
              <a href={data.secondaryActionUrl} className="btn btn-ghost" target="_blank" rel="noreferrer noopener">
                {data.secondaryActionLabel}
              </a>
            )}
          </div>
          <div className="hero-links" aria-label="Enlaces principales">
            {github && (
              <a href={github} target="_blank" rel="noreferrer noopener" className="hero-link-inline">
                GitHub
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noreferrer noopener" className="hero-link-inline">
                LinkedIn
              </a>
            )}
          </div>
          <ul className="hero-pills" aria-label="Áreas de enfoque principal">
            {data.highlightPills.map((pill) => (
              <li key={pill} className="hero-pill">
                {pill}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-aside">
          <aside className="hero-card" aria-label="Perfil profesional">
            <div className="hero-photo-wrap">
              {profileImage && (
                <img
                  src={profileImage}
                  alt={`Foto profesional de ${shortName || name}`}
                  className="hero-photo"
                />
              )}
            </div>
            <p className="hero-card-label">Perfil</p>
            <p className="hero-card-name">{shortName || name}</p>
            <p className="hero-card-role">{role}</p>
            {location && <p className="hero-card-location">{location}</p>}
            <p className="hero-card-summary">{summary || data.headline}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Hero;
