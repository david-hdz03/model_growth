import React from 'react';
import ServiceCard from './ServiceCard';

function ServicesSection({ servicesRef }) {
  return (
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
  );
}

export default ServicesSection;