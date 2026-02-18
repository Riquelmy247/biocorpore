import { company, contact } from '../../data/siteData';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__background">
        <img
          src="/images/hero-banner.jpg"
          alt="Biocorpore Centro Estético"
          className="hero__banner"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="hero__overlay"></div>
      </div>
      <div className="hero__content">
        <div className="hero__logo-space">
          <img src="/images/logo.png" alt="" className="hero__logo" onError={(e) => { e.target.style.display = 'none'; }} />
        </div>
        <h1 className="hero__title">{company.name}</h1>
        <p className="hero__tagline">{company.getTagline()}</p>
        <p className="hero__subtitle">{company.subtitle}</p>
        <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="hero__cta">
          Agendar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}

export default Hero;
