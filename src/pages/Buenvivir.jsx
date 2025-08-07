import '../styles/buenvivir.css';
import { Headerabout } from '../components/about/Headerabout';
import { Footer } from '../components/Footer';
import { useSiteConfig } from '../context/SiteConfigContext';

export const Buenvivir = () => {
  const { pages } = useSiteConfig();
  const buenvivirPage = pages.buenvivir;

  return (
    <div className="maderextk-page">
    <Headerabout/>
      <section className="buenvivir-hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="buenvivir-hero-title">{buenvivirPage.hero.title}</h1>
            <div className="hero-underline"></div>
            <h2 className="buenvivir-hero-subtitle">{buenvivirPage.hero.subtitle}</h2>
            <p className="buenvivir-hero-description">
              {buenvivirPage.hero.description}
            </p>
          </div>
        </div>
      </section>

      <section className="quality-section">
        <div className="container">
          <div className="quality-content">
            <div className="quality-text">
              <h2 className="section-title">{buenvivirPage.quality.title}</h2>
              <div className="title-underline"></div>
              {buenvivirPage.quality.description.map((paragraph, index) => (
                <p key={index} className="quality-paragraph">{paragraph}</p>
              ))}
            </div>
            <div className="quality-image">
              <img
                src={buenvivirPage.quality.image}
                alt="Casa prefabricada sostenible"
                className="vertical-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="features-title">{buenvivirPage.features.title}</h2>
          <div className="features-grid">
            {buenvivirPage.features.items.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-text">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="customization-section">
        <div className="container">
          <div className="customization-content">
            <div className="customization-images">
              <div className="image-stack">
                {buenvivirPage.customization.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Modelo ${index === 0 ? 'tradicional' : 'moderno'}`}
                    className={`stack-image ${index === 0 ? 'main' : 'overlay'}`}
                  />
                ))}
              </div>
            </div>
            <div className="customization-text">
              <h2 className="section-title">{buenvivirPage.customization.title}</h2>
              <div className="title-underline"></div>
              {buenvivirPage.customization.description.map((paragraph, index) => (
                <p key={index} className="customization-paragraph">{paragraph}</p>
              ))}
              <div className="customization-highlights">
                {buenvivirPage.customization.highlights.map((highlight, index) => (
                  <div key={index} className="highlight-item">
                    <span className="highlight-icon">✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gratitude-section">
        <div className="container">
          <div className="gratitude-card">
            <div className="gratitude-content">
              <h3 className="gratitude-title">{buenvivirPage.commitment.title}</h3>
              <div className="gratitude-underline"></div>
              <p className="gratitude-text">{buenvivirPage.commitment.description}</p>
              <div className="gratitude-decoration"></div>
            </div>
          </div>
        </div>
      </section>
        <Footer />
    </div>
  )
}
