import React, { useEffect, useRef, useState } from 'react';
import './App.css'

function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  // Estado para el menú hamburguesa
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 800;
    const sections = [aboutRef.current, servicesRef.current, portfolioRef.current, contactRef.current];
    let observer;

    if (!isMobile) {
      observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.3 }
      );
      sections.forEach(section => {
        if (section) observer.observe(section);
      });
    } else {
      // En mobile, mostrar todo sin animación
      sections.forEach(section => {
        if (section) section.classList.add('visible');
      });
    }

    // Cleanup
    return () => {
      if (observer) {
        sections.forEach(section => {
          if (section) observer.unobserve(section);
        });
      }
    };
  }, [aboutRef, servicesRef, portfolioRef, contactRef]);

  // Cierra el menú al hacer click en un link
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <div className="app-container">
      {/* SVG filter para distorsión tipo "reeded" */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id="reeded-distort">
          <feTurbulence type="turbulence" baseFrequency="0.02 0.15" numOctaves="2" result="turb" seed="2"/>
          <feDisplacementMap in2="turb" in="SourceGraphic" scale="18" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </svg>
      {/* SVG filter para distorsión tipo "reeded" para servicios */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id="reeded-distort-services">
          <feTurbulence type="turbulence" baseFrequency="0.03 0.13" numOctaves="2" result="turb" seed="7"/>
          <feDisplacementMap in2="turb" in="SourceGraphic" scale="14" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </svg>
      <header>
        <nav className="navbar">
          <div className="logo">MODEL GROWTH</div>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
          <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
            <li><a href="#about" onClick={handleLinkClick}>SOBRE NOSOTROS</a></li>
            <li><a href="#services" onClick={handleLinkClick}>NUESTROS SERVICIOS</a></li>
            <li><a href="#portfolio" onClick={handleLinkClick}>VENTAJAS</a></li>
            <li><a href="#contact" onClick={handleLinkClick}>CONTACTO</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about" className="section about-section" ref={aboutRef}>
          <div className="about-content">
            <div className="about-text-wrapper">
              <h1 className="about-title">POSICIONANDO MODELOS EN LAS REDES SOCIALES</h1>
              <p className="about-text">
                Somos un equipo especializado en potenciar la presencia de modelos en redes sociales. Entendemos los desafíos de mantener una imagen profesional, creativa y consistente.
              </p>
            </div>
            <a href="#contact" className="about-btn">Contactanos</a>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80" alt="Model" />
          </div>
        </section>
        <section id="services" className="section services-section" ref={servicesRef}>
          <div className="services-header">
            <h2 className="services-title">NUESTROS SERVICIOS</h2>
            <p className="services-desc">Descubre cómo podemos ayudarte a crecer y destacar en el mundo del modelaje digital.</p>
          </div>
          <div className="services-cards">
            <ServiceCard
              title="PRODUCCION PROFESIONAL DE CONTENIDO"
              text="Sesiones de Fotografía con equipamiento y equipo profesional, edicion de fotografias y videos, retoques digitales, fondos con IA para generar materiales de alta calidad"
              img="/PRODUCCION_CONTENIDO.jpeg"
              align="left"
            />
            <ServiceCard
              title="GESTION DE REDES Y CONTENIDO EXCLUSIVO"
              text="Planificación, creación y publicación en plataformas de suscripción (OnlyFans, Fansly, Telegram) con calendarios y copy optimizado."
              img="/GESTION_REDES.jpeg"
              align="right"
            />
            <ServiceCard
              title="CHAT TO CASH SYSTEM"
              text="Atención inmediata y profesional de mensajes privados, junto con scripts de upsell (PPV, bundles) diseñados para convertir cada conversación en ingresos."
              img="/GESTION_MENSAJES.jpeg"
              align="left"
            />
            <ServiceCard
              title="ESTRATEGIAS & ANALISIS DE RENDIMIENTO"
              text="Desarrollo de planes de crecimiento personalizados, informes de métricas clave (subscriptores, retención, engagement) y ajustes continuos para escalar tus resultados."
              img="/ESTRATEGIAS.jpeg"
              align="right"
            />
          </div>
        </section>
        <section id="portfolio" className="section portfolio-section section-animate" ref={portfolioRef}>
          <div className="portfolio-header">
            <h2 className="portfolio-title">¿POR QUE ELEGIRNOS?</h2>
          </div>
          <PortfolioCarousel />
        </section>
        <section id="contact" className="section contact-section" ref={contactRef}>
          <div className="contact-card">
            <div className="contact-header">
              <div className="contact-logo">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#333" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" fill="#333"/>
                </svg>
                <span>MODEL GROWTH</span>
              </div>
              <div className="contact-socials">
                <a href={import.meta.env.VITE_IG_URL} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
            <div className="contact-body">
              <h2>¿Quieres trabajar con nosotros?</h2>
              <p>Déjanos tus datos y te contactaremos.</p>
              <form className="contact-form" action="https://formspree.io/f/xdkzeped" method="POST">
                <input type="text" name="name" placeholder="Tu Nombre" required />
                <input type="email" name="email" placeholder="Tu Email" required />
                <textarea name="message" placeholder="Tu Mensaje" required></textarea>
                <button type="submit">Enviar mensaje</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        &copy; {new Date().getFullYear()} MODEL GROWTH. All rights reserved.
      </footer>
    </div>
  )
}

// Componente para las tarjetas de servicio
function ServiceCard({ title, text, img, align }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
        }
      },
      { threshold: 0.3 }
    );
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);
  return (
    <div ref={ref} className={`service-card service-card-${align} service-card-animate`}>
      <div className="service-card-img">
        <img src={img} alt={title} />
      </div>
      <div className="service-card-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

// Carrusel para la sección Portfolio
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

export default App
