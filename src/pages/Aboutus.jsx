import { Headerabout } from "../components/about/Headerabout"
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Footer } from "../components/Footer";
import "../styles/aboutUs.css"

// animacion para valores destacados
const HIGHLIGHT_VALUES = [
  { value: 29, suffix: "+", label: "Años de experiencia" },
  { value: 100, suffix: "%", label: "Aprovechamiento sostenible" }
];

const Aboutus = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  // Estados para los números animados
  const [counts, setCounts] = useState(HIGHLIGHT_VALUES.map(() => 0));

  useEffect(() => {
    // Scroll al inicio del documento al montar el componente
    window.scrollTo({ top: 0, behavior: 'auto' });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    // Animación de conteo
    let start = null;
    const duration = 900; // ms
    const steps = 30;
    const increments = HIGHLIGHT_VALUES.map(({ value }) => value / steps);

    function animateNumbers(ts) {
      if (!start) start = ts;
      const progress = ts - start;
      if (progress < duration) {
        setCounts(prev =>
          prev.map((c, i) =>
            Math.min(Math.round(c + increments[i]), HIGHLIGHT_VALUES[i].value)
          )
        );
        requestAnimationFrame(animateNumbers);
      } else {
        setCounts(HIGHLIGHT_VALUES.map(({ value }) => value));
      }
    }
    requestAnimationFrame(animateNumbers);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="about-us">
      <Headerabout />

      {/* Main Content */}
      <main className="main-content">
        {/* What is Maderex Section */}
        <section className="what-is-section">
          <div className="container">
            <div className="section-header">
              <img
                loading="lazy"
                className="logopng"
                src="https://res.cloudinary.com/dxr7cjjpa/image/upload/v1749575085/image_onikyk.png"
                alt="Logo MaderexTK"
              />
              <h2 style={{marginTop: 0}}>¿Quienes Somos?</h2>
            </div>
            <div className="content-grid">
              <div className="content-text">
                <p>
                  Somos una empresa dedicada al <strong>cultivo, extracción, transformación y comercialización de madera TECA</strong>.
                  Contamos con nuestro propio aserrío y carpintería para aprovechar la madera al 100%,
                  garantizando productos de la más alta calidad.
                </p>
                <div className="highlights">
                  {HIGHLIGHT_VALUES.map((item, idx) => (
                    <div className="highlight-item" key={item.label}>
                      <span className="highlight-number">
                        {counts[idx]}
                        {item.suffix}
                      </span>
                      <span className="highlight-text">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="container">
            <div className="mission-content">
              <div className="mission-text">
                <h2>Nuestra Misión</h2>
                <p>
                  Elaborar productos foresto-industriales de calidad que brinden valor a nuestros clientes,
                  accionistas y comunidad, enfatizando siempre nuestra responsabilidad social y ambiental
                  en cada proceso de producción.
                </p>
              </div>
              <div className="mission-image">
                <img src="https://maderextk.com/main/images/products/productos2.png" alt="Productos Maderex" />
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="vision-section">
          <div className="container">
            <div className="vision-content">
              <div className="vision-text">
                <h2>Nuestra Visión</h2>
                <p>
                  Para el año 2025 queremos ser un referente internacional, liderando el sector
                  agroindustrial con la mejor madera del país, manteniendo siempre nuestro
                  espíritu innovador y compromiso con la excelencia.
                </p>
              </div>
              <div className="vision-image">
                <img src="https://maderextk.com/main/images/products/productos10.png" alt="Visión Maderex" />
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="partners-section">
          <div className="container">
            <h2>Nuestros Aliados</h2>
            <div className="partners-grid">
              <div className="partner-logo">
                <img src="https://maderextk.com/main/images/clients/partners_270_120_1.png" alt="Socio 1" />
              </div>
              <div className="partner-logo">
                <img src="https://maderextk.com/main/images/clients/partners_270_120_2.png" alt="Socio 2" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
      {/* El botoncito de scroll equisde*/}
      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          <ChevronUp size={24} />
        </button>
      )}


    </div>
  )
}

export default Aboutus