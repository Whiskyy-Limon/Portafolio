import React from 'react';

function TimelineItem({ item }) {
  return (
    <article className="timeline-item">
      <div className="timeline-marker" aria-hidden="true" />
      <div className="timeline-content">
        <p className="timeline-period">
          {item.startDate}
          {item.endDate ? ` – ${item.endDate}` : ''}
        </p>
        <h3 className="timeline-title">
          {item.title}
          {item.status && <span className="timeline-status">{item.status}</span>}
        </h3>
        <p className="timeline-organization">{item.organization}</p>
        <p className="timeline-location">{item.location}</p>
        {item.description && <p className="timeline-description">{item.description}</p>}
        {Array.isArray(item.highlights) && item.highlights.length > 0 && (
          <ul className="timeline-highlights">
            {item.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}
        {item.certificateUrl && (
          <a
            href={item.certificateUrl}
            className="btn btn-ghost btn-sm timeline-download"
            download
          >
            Descargar certificado
          </a>
        )}
      </div>
    </article>
  );
}

export default TimelineItem;
