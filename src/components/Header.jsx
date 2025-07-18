import { useState } from 'react';

function Header() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((v) => !v);
  const handleLinkClick = () => setOpen(false);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">MODEL GROWTH</div>
        <button
          className="hamburger"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={handleToggle}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          <li><a href="#about" onClick={handleLinkClick}>SOBRE NOSOTROS</a></li>
          <li><a href="#services" onClick={handleLinkClick}>NUESTROS SERVICIOS</a></li>
          <li><a href="#portfolio" onClick={handleLinkClick}>VENTAJAS</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>CONTACTO</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;