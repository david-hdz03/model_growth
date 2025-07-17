
function AboutSection({ aboutRef }) {
  return (
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
  );
}

export default AboutSection;