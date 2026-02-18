import { useRef, useEffect } from 'react';
import { about as aboutData } from '../../data/siteData';
import './About.css';

function About() {
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

  return (
    <section className="about" id="quem-somos" ref={sectionRef}>
      <div className="about__container">
        <div className="about__content">
          <h2 className="about__title">{aboutData.title}</h2>
          <div className="about__text">
            {aboutData.content.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="about__image-wrapper">
          <img
            src={aboutData.image}
            alt="Biocorpore Centro Estético"
            className="about__image"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=500&fit=crop';
              e.target.alt = 'Espaço Biocorpore';
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
