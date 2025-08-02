import '../styles/buenvivir.css';
import { Headerabout } from '../components/about/Headerabout';
import { Footer } from '../components/Footer';

export const Buenvivir = () => {
  return (
    <div className="maderextk-page">
    <Headerabout/>
      <section className="buenvivir-hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="buenvivir-hero-title">Maderex Buenvivir</h1>
            <div className="hero-underline"></div>
            <h2 className="buenvivir-hero-subtitle">Tu Mejor Opción en Casas Prefabricadas</h2>
            <p className="buenvivir-hero-description">
              En MaderexTK International, estamos encantados de presentarte nuestra línea de trabajo especializada en
              casas prefabricadas de madera teca: Maderex Buenvivir. Para aquellos que buscan una vivienda de alta
              calidad, sostenible y personalizada, nuestras casas prefabricadas son la elección perfecta, ofreciendo
              eficiencia y rapidez en el proceso de construcción sin comprometer la excelencia en el diseño y los
              acabados.
            </p>
          </div>
        </div>
      </section>

      <section className="quality-section">
        <div className="container">
          <div className="quality-content">
            <div className="quality-text">
              <h2 className="section-title">Calidad y Sostenibilidad en Cada Hogar</h2>
              <div className="title-underline"></div>
              <p className="quality-paragraph">
                En Maderex Buenvivir, nos comprometemos a ofrecer casas prefabricadas que no solo sean hermosas y
                funcionales, sino también respetuosas con el medio ambiente.
              </p>
              <p className="quality-paragraph">
                La madera teca, conocida por su durabilidad y resistencia natural, es el material ideal para crear
                hogares que perduren por generaciones, mientras que su origen sostenible garantiza un impacto mínimo en
                los recursos naturales.
              </p>
            </div>
            <div className="quality-image">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Casa prefabricada sostenible"
                className="vertical-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏡</div>
              <h3 className="feature-title">Diseños Modernos</h3>
              <p className="feature-text">Arquitectura contemporánea que se adapta a tu estilo de vida</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3 className="feature-title">100% Sostenible</h3>
              <p className="feature-text">Madera teca de fuentes responsables y procesos eco-amigables</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Construcción Rápida</h3>
              <p className="feature-text">Proceso eficiente que reduce tiempos sin comprometer calidad</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3 className="feature-title">Personalizable</h3>
              <p className="feature-text">Adapta cada detalle según tus necesidades y preferencias</p>
            </div>
          </div>
        </div>
      </section>

      <section className="customization-section">
        <div className="container">
          <div className="customization-content">
            <div className="customization-images">
              <div className="image-stack">
                <img
                  src="/placeholder.svg?height=250&width=350"
                  alt="Modelos tradicionales"
                  className="stack-image main"
                />
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Diseños modernos"
                  className="stack-image overlay"
                />
              </div>
            </div>
            <div className="customization-text">
              <h2 className="section-title">Personalización y Variedad de Modelos</h2>
              <div className="title-underline"></div>
              <p className="customization-paragraph">
                Entendemos que cada persona tiene su propio estilo y necesidades únicas, por lo que ofrecemos una amplia
                variedad de modelos de casas prefabricadas que pueden ser personalizados según tus preferencias.
              </p>
              <p className="customization-paragraph">
                Desde diseños modernos hasta opciones más tradicionales, cada modelo puede ser adaptado con diferentes
                opciones de acabado y equipamiento para crear la casa de tus sueños.
              </p>
              <div className="customization-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Diseños modernos y tradicionales</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Acabados personalizables</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Equipamiento a medida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gratitude-section">
        <div className="container">
          <div className="gratitude-card">
            <div className="gratitude-content">
              <h3 className="gratitude-title">Nuestro Compromiso Contigo</h3>
              <div className="gratitude-underline"></div>
              <p className="gratitude-text">
                Gracias por elegir Maderextk como su socio en madera. Esperamos con interés servirle y ayudarlo a
                alcanzar el éxito en todos sus proyectos.
              </p>
              <div className="gratitude-decoration"></div>
            </div>
          </div>
        </div>
      </section>
        <Footer />
    </div>
  )
}