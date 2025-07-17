import PortfolioCarousel from './PortfolioCarousel';

function PortfolioSection({ portfolioRef }) {
  return (
    <section id="portfolio" className="section portfolio-section section-animate" ref={portfolioRef}>
      <div className="portfolio-header">
        <h2 className="portfolio-title">¿POR QUE ELEGIRNOS?</h2>
      </div>
      <PortfolioCarousel />
    </section>
  );
}

export default PortfolioSection;