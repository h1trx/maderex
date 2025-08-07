import { Headerabout } from "../components/about/Headerabout";
import { Footer } from "../components/Footer";
import { useSiteConfig, useContact } from "../hooks/useSiteConfig";
import { navig } from "../utils/navig";

import "../styles/aserrio.css";

export const Aserrio = () => {
  const { pages } = useSiteConfig();
  const { whatsapp } = useContact();
  const sawmillPage = pages.sawmill;

  return (
    <div className="maderextk-page">
      <Headerabout/>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">{sawmillPage.hero.title}</h1>
            <div className="hero-underline"></div>
            <h2 className="hero-subtitle">{sawmillPage.hero.subtitle}</h2>
            <p className="hero-description">
              {sawmillPage.hero.description}
            </p>
            {sawmillPage.ctaButton && (
              <button 
                className="btn-action" 
                onClick={() => navig(sawmillPage.ctaButton.whatsappLink)}
              >
                {sawmillPage.ctaButton.text}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="process-title">{sawmillPage.process.title}</h2>
          <div className="process-steps">
            {sawmillPage.process.steps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="process-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="services-title">{sawmillPage.services.title}</h2>
          <div className="services-grid">
            {sawmillPage.services.items.map((service, index) => (
              <div key={index} className="service-card">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-text">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {sawmillPage.sections.map((section, index) => (
        <section 
          key={index} 
          className={`content-section ${section.layout === 'text-right' ? 'alt-section' : ''}`}
        >
          <div className="container">
            <div className="section-content">
              {section.layout === 'text-right' ? (
                <>
                  <div className="image-content">
                    <div className="image-grid">
                      {section.images.map((image, imgIndex) => (
                        <img 
                          key={imgIndex}
                          src={image} 
                          alt={`${section.title} - Imagen ${imgIndex + 1}`} 
                          className="grid-image" 
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-content">
                    <h2 className="section-title">{section.title}</h2>
                    <div className="title-underline"></div>
                    <p className="section-text">{section.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-content">
                    <h2 className="section-title">{section.title}</h2>
                    <div className="title-underline"></div>
                    <p className="section-text">{section.description}</p>
                  </div>
                  <div className="image-content">
                    <div className="image-grid">
                      {section.images.map((image, imgIndex) => (
                        <img 
                          key={imgIndex}
                          src={image} 
                          alt={`${section.title} - Imagen ${imgIndex + 1}`} 
                          className="grid-image" 
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Final Message Section */}
      {sawmillPage.finalMessage && (
        <section className="final-message-section">
          <div className="container">
            <div className="final-content">
              <div className="message-card">
                <h3 className="message-title">{sawmillPage.finalMessage.title}</h3>
                <div className="title-underline center"></div>
                <ul className="message-list">
                  <li>{sawmillPage.finalMessage.content}</li>
                </ul>
                <div className="wood-texture-accent"></div>
              </div>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </div>
  )
};
