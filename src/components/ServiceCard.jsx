import { useRef, useEffect } from 'react';

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

export default ServiceCard;