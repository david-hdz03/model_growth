import { useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const sections = [aboutRef.current, servicesRef.current, portfolioRef.current, contactRef.current];
    const observer = new window.IntersectionObserver(
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
    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="app-container">
      {/* SVG filters */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id="reeded-distort">
          <feTurbulence type="turbulence" baseFrequency="0.02 0.15" numOctaves="2" result="turb" seed="2"/>
          <feDisplacementMap in2="turb" in="SourceGraphic" scale="18" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </svg>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id="reeded-distort-services">
          <feTurbulence type="turbulence" baseFrequency="0.03 0.13" numOctaves="2" result="turb" seed="7"/>
          <feDisplacementMap in2="turb" in="SourceGraphic" scale="14" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </svg>
      <Header />
      <main>
        <AboutSection aboutRef={aboutRef} />
        <ServicesSection servicesRef={servicesRef} />
        <PortfolioSection portfolioRef={portfolioRef} />
        <ContactSection contactRef={contactRef} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
