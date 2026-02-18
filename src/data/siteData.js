/**
 * Biocorpore Centro Estético - Dados do Site
 * Arquivo centralizado para fácil manutenção.
 * Edite aqui todas as informações da clínica.
 */

// Ano de fundação da clínica (usado para cálculo automático de anos)
export const FOUNDING_YEAR = 2012;

// Calcula anos de experiência automaticamente (atualiza todo 01/01)
export const getYearsOfExperience = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  return currentYear - FOUNDING_YEAR;
};

// Informações da empresa
export const company = {
  name: 'Biocorpore Centro Estético',
  getTagline: () => `${getYearsOfExperience()} anos transformando autoestima`,
  subtitle: 'Clínica de beleza referência em naturalidade',
};

// Contato
export const contact = {
  whatsapp: 'https://wa.me/5534991887197',
  whatsappNumber: '5534991887197',
  instagram: 'https://www.instagram.com/biocorporee_',
  instagramHandle: '@biocorporee_',
  address: {
    street: 'Avenida Nicomedes Alves dos Santos, 3600',
    neighborhood: 'Morada da Colina',
    complement: 'Gávea Business — Sala 307',
    city: 'Uberlândia',
    state: 'MG',
    full: 'Avenida Nicomedes Alves dos Santos, 3600 — Morada da Colina — Gávea Business — Sala 307',
  },
  googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.8008842772346!2d-48.2584!3d-18.9186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU1JzA2LjkiUyA0OMKwMTUnMzAuMiJX!5e0!3m2!1spt-BR!2sbr!4v1',
  // Para embed do Google Maps: pegue o iframe embed do seu endereço no Google Maps
};

// Texto institucional - Quem Somos
export const about = {
  title: 'Quem Somos',
  content: `A Biocorpore Centro Estético nasceu da paixão por realçar a beleza natural de cada pessoa. Com mais de uma década de experiência, somos referência em procedimentos estéticos que respeitam suas características únicas.

Nossa missão é oferecer tratamentos modernos e seguros, sempre priorizando a naturalidade e o bem-estar. Cada cliente é único, e desenvolvemos um plano personalizado para que você se sinta ainda mais confiante.

Equipe especializada, ambiente acolhedor e tecnologia de ponta. Conte conosco para sua jornada de autocuidado e autoestima.`,
  image: '/images/about-placeholder.jpg',
};

// Serviços
export const services = [
  {
    id: 'harmonizacao-facial',
    name: 'Harmonização Facial',
    description: 'Procedimentos que realçam suas características naturais, proporcionando equilíbrio e harmonia ao rosto com técnicas avançadas.',
    image: '/images/services/harmonizacao.jpg',
  },
  {
    id: 'preenchimento-labial',
    name: 'Preenchimento Labial',
    description: 'Lábios mais volumosos e definidos com resultados naturais. Procedimento seguro que realça sua beleza.',
    image: '/images/services/preenchimento-labial.jpg',
  },
  {
    id: 'limpeza-de-pele',
    name: 'Limpeza de Pele',
    description: 'Tratamento profundo que remove impurezas, cravos e revitaliza a pele para um aspecto saudável e luminoso.',
    image: '/images/services/limpeza-pele.jpg',
  },
  {
    id: 'hidratacao-facial',
    name: 'Hidratação Facial',
    description: 'Pele hidratada e revitalizada. Tratamentos intensivos que restauram a luminosidade e elasticidade.',
    image: '/images/services/hidratacao.jpg',
  },
  {
    id: 'outros-servicos',
    name: 'Outros Serviços Estéticos',
    description: 'Diversos procedimentos para o corpo e rosto. Consulte-nos para descobrir o tratamento ideal para você.',
    image: '/images/services/outros.jpg',
  },
];

// Galeria - placeholders (substitua pelos links reais das fotos)
export const gallery = [
  { id: 1, src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop', alt: 'Procedimento estético' },
  { id: 2, src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=400&fit=crop', alt: 'Tratamento facial' },
  { id: 3, src: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&h=400&fit=crop', alt: 'Beleza e bem-estar' },
  { id: 4, src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop', alt: 'Cosméticos e skincare' },
  { id: 5, src: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop', alt: 'Espaço da clínica' },
  { id: 6, src: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop', alt: 'Procedimento profissional' },
];

// SEO
export const seo = {
  title: 'Biocorpore Centro Estético | Harmonização Facial e Estética em Uberlândia',
  getDescription: () => `Clínica de beleza referência em naturalidade. Harmonização facial, preenchimento labial, limpeza de pele e mais. ${getYearsOfExperience()} anos transformando autoestima em Uberlândia.`,
};

// Imagens (paths relativos à pasta public)
export const images = {
  logo: '/images/logo.png',
  heroBanner: '/images/hero-banner.jpg',
};
