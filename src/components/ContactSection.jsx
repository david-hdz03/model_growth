function ContactSection({ contactRef }) {
  const igUrl = import.meta.env.VITE_IG_URL;
  return (
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
            <a href={igUrl} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
        <div className="contact-body">
          <h2>¿Quieres trabajar con nosotros?</h2>
          <p>Déjanos tus datos y te contactaremos.</p>
          <form className="contact-form" action="https://formspree.io/f/xdkzeped" method="POST" autoComplete="off">
            <input type="text" name="name" placeholder="Tu Nombre" required />
            <input type="email" name="email" placeholder="Tu Email" required />
            <textarea name="message" placeholder="Tu Mensaje" required></textarea>
            <button type="submit">Enviar mensaje</button>
          </form>
        </div>
      </div>
      <style>
        {`
        @media (max-width: 600px) {
          .contact-card {
            padding: 1.2rem 0.5rem !important;
            max-width: 98vw !important;
            box-sizing: border-box;
          }
          .contact-form input,
          .contact-form textarea {
            font-size: 1rem;
            padding: 0.8rem;
          }
        }
        `}
      </style>
    </section>
  );
}

export default ContactSection;

<meta name="viewport" content="width=device-width, initial-scale=1" />