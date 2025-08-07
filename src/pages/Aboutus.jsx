import { Headerabout } from "../components/about/Headerabout"
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Footer } from "../components/Footer";
import { useSiteConfig } from "../hooks/useSiteConfig";
import "../styles/aboutUs.css"

const Aboutus = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { about, logos, siteInfo } = useSiteConfig();
  
  // Crear valores destacados desde la configuración
  const HIGHLIGHT_VALUES = [
    { value: siteInfo.experience.years, suffix: "+", label: "Años de experiencia" },
    { value: siteInfo.experience.sustainability, suffix: "%", label: "Aprovechamiento sostenible" }
  ];
  
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
                src={logos.main}
                alt={`Logo ${siteInfo.name}`}
              />
              <h2 style={{marginTop: 0}}>{about.page.whoWeAre.title}</h2>
            </div>
            <div className="content-grid">
              <div className="content-text">
                <p>{about.page.whoWeAre.description}</p>
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
                <h2>{about.page.mission.title}</h2>
                <p>{about.page.mission.description}</p>
              </div>
              <div className="mission-image">
                <img src={about.page.mission.image} alt="Productos Maderex" />
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="vision-section">
          <div className="container">
            <div className="vision-content">
              <div className="vision-text">
                <h2>{about.page.vision.title}</h2>
                <p>{about.page.vision.description}</p>
              </div>
              <div className="vision-image">
                <img src={about.page.vision.image} alt="Visión Maderex" />
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="partners-section">
          <div className="container">
            <h2>{about.page.partners.title}</h2>
            <div className="partners-grid">
              {about.page.partners.logos.map((logo, index) => (
                <div key={index} className="partner-logo">
                  <img src={logo} alt={`Socio ${index + 1}`} />
                </div>
              ))}
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
