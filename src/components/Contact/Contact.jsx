import { useRef, useEffect } from 'react';
import { contact as contactData } from '../../data/siteData';
import './Contact.css';

function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const mapsEmbedUrl = contactData.googleMapsUrl || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.8008842772346!2d-48.2584!3d-18.9186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU1JzA2LjkiUyA0OMKwMTUnMzAuMiJX!5e0!3m2!1spt-BR!2sbr!4v1';

  return (
    <section className="contact" id="contato" ref={sectionRef}>
      <div className="contact__container">
        <h2 className="contact__title">Contato</h2>
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__block">
              <h3>Endereço</h3>
              <p>{contactData.address.full}</p>
            </div>
            <a href={contactData.whatsapp} target="_blank" rel="noopener noreferrer" className="contact__whatsapp">
              Falar no WhatsApp
            </a>
            <a href={contactData.instagram} target="_blank" rel="noopener noreferrer" className="contact__instagram">
              {contactData.instagramHandle}
            </a>
          </div>
          <div className="contact__map">
            <iframe
              src={mapsEmbedUrl}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Biocorpore"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
