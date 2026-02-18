import { useRef, useEffect } from 'react';
import { gallery as galleryData } from '../../data/siteData';
import './Gallery.css';

function Gallery() {
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
    <section className="gallery" id="galeria" ref={sectionRef}>
      <div className="gallery__container">
        <h2 className="gallery__title">Galeria</h2>
        <p className="gallery__subtitle">Conheça nossos procedimentos e resultados</p>
        <div className="gallery__grid">
          {galleryData.map((item) => (
            <div key={item.id} className="gallery__item">
              <img src={item.src} alt={item.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
