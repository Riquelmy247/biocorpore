import { company, contact } from '../../data/siteData';
import './Footer.css';

function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <h3 className="footer__name">{company.name}</h3>
          <p className="footer__tagline">{company.getTagline()}</p>
        </div>
        <nav className="footer__nav">
          <button onClick={() => scrollToSection('quem-somos')}>Quem Somos</button>
          <button onClick={() => scrollToSection('servicos')}>Serviços</button>
          <button onClick={() => scrollToSection('galeria')}>Galeria</button>
          <button onClick={() => scrollToSection('contato')}>Contato</button>
        </nav>
        <div className="footer__contact">
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href={contact.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} {company.name}. Todos os direitos reservados. Desenvolvido por @riquelmy_2612.</p>
      </div>
    </footer>
  );
}

export default Footer;
