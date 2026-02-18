import { useState, useEffect } from 'react';
import { company, contact } from '../../data/siteData';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'quem-somos', label: 'Quem Somos' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'galeria', label: 'Galeria' },
    { id: 'contato', label: 'Contato' },
  ];

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <a href="#" className="header__logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          {!logoError && <img src="/images/logo.png" alt={company.name} className="header__logo-img" onError={() => setLogoError(true)} />}
          <span className={`header__logo-text ${logoError ? 'visible' : ''}`}>Biocorpore</span>
        </a>

        <nav className={`header__nav ${mobileMenuOpen ? 'header__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <button key={link.id} className="header__nav-link" onClick={() => scrollToSection(link.id)}>
              {link.label}
            </button>
          ))}
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="header__cta">
            Agendar
          </a>
        </nav>

        <button
          className="header__menu-toggle"
          aria-label="Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={mobileMenuOpen ? 'open' : ''}></span>
          <span className={mobileMenuOpen ? 'open' : ''}></span>
          <span className={mobileMenuOpen ? 'open' : ''}></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
