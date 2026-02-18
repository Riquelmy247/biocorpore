import { useRef, useEffect } from 'react';
import { services as servicesData } from '../../data/siteData';
import './Services.css';

const PLACEHOLDER_IMAGES = {
  'harmonizacao-facial': 'https://odontoforma.com.br/wp-content/uploads/2020/10/hamoniza.jpg',
  'preenchimento-labial': 'https://expodonto.com.br/wp-content/uploads/2022/01/preco-do-preenchimento-labial.jpg',
  'limpeza-de-pele': 'https://blog.adcosprofissional.com.br/wp-content/uploads/2025/08/limpeza-de-pele-convencional.jpg',
  'hidratacao-facial': 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop',
  'outros-servicos': 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=300&fit=crop',
};

function ServiceCard({ service, index }) {
  return (
    <article className="services__card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="services__card-image">
        <img
          src={service.image}
          alt={service.name}
          onError={(e) => {
            e.target.src = PLACEHOLDER_IMAGES[service.id] || PLACEHOLDER_IMAGES['outros-servicos'];
          }}
        />
      </div>
      <div className="services__card-content">
        <h3 className="services__card-title">{service.name}</h3>
        <p className="services__card-description">{service.description}</p>
      </div>
    </article>
  );
}

function Services() {
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
    <section className="services" id="servicos" ref={sectionRef}>
      <div className="services__container">
        <h2 className="services__title">Nossos Serviços</h2>
        <p className="services__subtitle">Procedimentos que realçam sua beleza natural</p>
        <div className="services__grid">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
