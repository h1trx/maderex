import { Headerabout } from '../components/about/Headerabout';
import { Footer } from '../components/Footer';
import { useSiteConfig, useContact } from '../hooks/useSiteConfig';
import { navig } from '../utils/navig';
import '../styles/exports.css';

export const Exports = () => {
    const { pages } = useSiteConfig();
    const { whatsapp } = useContact();
    const exportsPage = pages.exports;

    return (
    <div className="maderextk-page">
        <Headerabout />
      <section className="hero-section-exports">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">{exportsPage.hero.title}</h1>
            <div className="hero-underline"></div>
            <p className="hero-description">
              {exportsPage.hero.description}
            </p>
          <button className="btn-action" onClick={() => navig(whatsapp.sawmillQuote)}>Cotiza tu exportación</button>
          </div>
        </div>
      </section>

      {exportsPage.sections.map((section, index) => (
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

      <section className="final-message-section">
        <div className="container">
          <div className="final-content">
            <div className="message-card">
              <h3 className="message-title">{exportsPage.finalMessage.title}</h3>
              <div className="title-underline center"></div>
              <ul className="message-list">
                <li>{exportsPage.finalMessage.content}</li>
              </ul>
              <div className="wood-texture-accent"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
