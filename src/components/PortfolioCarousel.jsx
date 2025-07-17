import React from 'react';

function PortfolioCarousel() {
  const items = [
    {
      img: '/TECNOLOGIA.jpeg',
      name: 'Tecnología de vanguardia aplicada a tu crecimiento',
      desc: 'Usamos herramientas con IA para analizar tendencias, optimizar tus redes y predecir colaboraciones rentables.\nAutomatizamos procesos (calendarios de contenido) para que tú solo te enfoques en brillar.'
    },
    {
      img: '/COLABORACIONES.jpeg',
      name: 'COLABORACIONES Y PROYECTOS EXCLUSIVOS',
      desc: 'No somos una agencia más: tendremos acuerdos con otras agencias, marcas, modelos para ofrecer las mejores colaboraciones para lograr aumentar tu engagement.'
    },
    {
      img: '/360.jpeg',
      name: 'MONETIZACION 360 GANANCIAS DENTRO Y FUERA DE REDES',
      desc: 'Estrategias para convertir tu imagen en ingresos pasivos: membresías VIP, affiliate marketing con productos.'
    },
    {
      img: '/PREMIUM.jpeg',
      name: 'CONTENIDO PREMIUM CON SELLO PERSONALIZADO',
      desc: 'Equipo creativo in-house: fotógrafos, editores y copywriters especializados de alto nivel, Planificación mensual de contenido que equilibra autenticidad y branding.'
    },
    {
      img: '/GESTION.jpeg',
      name: 'GESTION PROACTIVA (NO SOLO ADMINISTRATIVA)',
      desc: 'No somos "representantes", somos acceleradores de carreras: te ayudamos a definir tu nicho y pivotear en tendencias.  \n   - Reportes semanales con métricas reales (no solo likes: ROI por colaboración, audiencia cualificada, etc.). '
    }
  ];
  const [index, setIndex] = React.useState(0);
  const prev = () => setIndex(i => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setIndex(i => (i === items.length - 1 ? 0 : i + 1));
  const { img, name, desc } = items[index];
  return (
    <div className="portfolio-carousel">
      <button className="carousel-btn left" onClick={prev} aria-label="Previous">&#8592;</button>
      <div className="portfolio-card">
        <div className="portfolio-card-img">
          <img src={img} alt={name} />
        </div>
        <div className="portfolio-card-content">
          <h3>{name}</h3>
          <p>{desc}</p>
        </div>
      </div>
      <button className="carousel-btn right" onClick={next} aria-label="Next">&#8594;</button>
    </div>
  );
}

export default PortfolioCarousel;