import React, { useState } from 'react';

function Navbar({ navLinks, name, role }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <nav className="navbar-inner" aria-label="Navegación principal">
        <button
          className="navbar-brand"
          type="button"
          onClick={() => handleNavClick('hero')}
        >
          <span className="navbar-brand-name">{name || 'TU_NOMBRE'}</span>
          <span className="navbar-brand-role">{role || 'TU_ROL'}</span>
        </button>

        <div className="navbar-right">
          <ul className={`navbar-links ${isOpen ? 'navbar-links-open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  className="navbar-link-button"
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="navbar-burger"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
