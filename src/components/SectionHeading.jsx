import React from 'react';

function SectionHeading({ eyebrow, title, align = 'left' }) {
  return (
    <header className={`section-heading section-heading-${align}`}>
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      {title && <h2 className="section-title">{title}</h2>}
    </header>
  );
}

export default SectionHeading;
