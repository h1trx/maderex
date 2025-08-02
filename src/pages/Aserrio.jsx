import { Headerabout } from "../components/about/Headerabout";
import { Footer } from "../components/Footer";

import "../styles/aserrio.css";

export const Aserrio = () => {
  return (
    <div className="maderextk-page">
      <Headerabout/>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Servicio de Aserrío</h1>
            <div className="hero-underline"></div>
            <h2 className="hero-subtitle">Su Socio en Aserrío y Madera Dimensionada</h2>
            <p className="hero-description">
              En MaderexTK International, nos destacamos por ofrecer una amplia gama de servicios de aserrío y venta
              nacional de madera dimensionada para satisfacer las necesidades de proyectos inmobiliarios de todos los
              tamaños. Desde la elaboración de machimbre y pisos hasta la creación de decks y piezas a medida, nuestro
              compromiso es proporcionar productos de la más alta calidad y un servicio excepcional que cumpla con las
              expectativas de nuestros clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Banner Images Section */}
      {/* <section className="banner-section">
        <div className="container">
          <div className="banner-images">
            <div className="banner-image-container">
              <img
                src="/placeholder.svg?height=300&width=600"
                alt="Instalaciones de aserrío modernas"
                className="banner-image"
              />
            </div>
            <div className="banner-image-container">
              <img
                src="/placeholder.svg?height=300&width=600"
                alt="Productos de madera de alta calidad"
                className="banner-image"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="process-title">Nuestro Proceso</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="process-icon">🚛</div>
              <h3 className="step-title">Recepción y Clasificación</h3>
            </div>
            <div className="process-step">
              <div className="process-icon">🪚</div>
              <h3 className="step-title">Corte y Dimensionado</h3>
            </div>
            <div className="process-step">
              <div className="process-icon">🌡️</div>
              <h3 className="step-title">Secado en Horno</h3>
            </div>
            <div className="process-step">
              <div className="process-icon">🔍</div>
              <h3 className="step-title">Control de Calidad</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="services-title">Nuestros Servicios</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3 className="service-card-title">Cortes a Medida</h3>
              <p className="service-card-text">
                Adaptamos las dimensiones de la madera a las especificaciones exactas de tu proyecto.
              </p>
            </div>
            <div className="service-card">
              <h3 className="service-card-title">Madera Estructural</h3>
              <p className="service-card-text">Vigas, columnas y tablas de alta resistencia para construcción.</p>
            </div>
            <div className="service-card">
              <h3 className="service-card-title">Tratamientos y Acabados</h3>
              <p className="service-card-text">
                Servicios de secado, cepillado y tratamiento para garantizar la durabilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Sawmill Service Section */}
      <section className="content-section">
        <div className="container">
          <div className="section-content">
            <div className="text-content">
              <h2 className="section-title">Servicio de Aserrío de Calidad</h2>
              <div className="title-underline"></div>
              <p className="section-text">
                Nuestro servicio de aserrío es la columna vertebral de nuestra operación, donde transformamos troncos de
                madera en una variedad de productos dimensionados según las especificaciones precisas de nuestros
                clientes. Con tecnología de vanguardia y un equipo de expertos en aserrío, garantizamos cortes precisos
                y acabados impecables que cumplen con los estándares más exigentes de la industria.
              </p>
            </div>
            <div className="image-content">
              <div className="image-grid">
                <img src="/placeholder.svg?height=200&width=250" alt="Maquinaria de aserrío" className="grid-image" />
                <img
                  src="/placeholder.svg?height=200&width=250"
                  alt="Proceso de corte de precisión"
                  className="grid-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dimensioned Wood Section */}
      <section className="content-section alt-section">
        <div className="container">
          <div className="section-content">
            <div className="image-content">
              <div className="image-grid">
                <img src="/placeholder.svg?height=200&width=250" alt="Pisos y decks de madera" className="grid-image" />
                <img
                  src="/placeholder.svg?height=200&width=250"
                  alt="Machimbre para interiores"
                  className="grid-image"
                />
              </div>
            </div>
            <div className="text-content">
              <h2 className="section-title">Madera Dimensionada para Proyectos Inmobiliarios</h2>
              <div className="title-underline"></div>
              <p className="section-text">
                Entendemos las necesidades únicas de la industria inmobiliaria y nos enorgullece ofrecer una amplia
                selección de productos de madera dimensionada para satisfacer los requisitos específicos de cada
                proyecto. Desde machimbre para revestimientos interiores hasta pisos de madera para áreas comunes y
                decks para espacios al aire libre, nuestros productos son conocidos por su calidad excepcional y su
                capacidad para realzar cualquier ambiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Pieces Section */}
      <section className="content-section">
        <div className="container">
          <div className="section-content">
            <div className="text-content">
              <h2 className="section-title">Piezas a Medida para Proyectos Especiales</h2>
              <div className="title-underline"></div>
              <p className="section-text">
                En MaderexTK International, entendemos que cada proyecto tiene sus propias necesidades y desafíos
                únicos. Es por eso que ofrecemos un servicio de fabricación a medida, donde podemos crear piezas de
                madera personalizadas según las especificaciones exactas de nuestros clientes. Ya sea que necesite
                piezas especiales para una estructura arquitectónica única o componentes específicos para un diseño
                interior personalizado, nuestro equipo está aquí para hacer realidad su visión.
              </p>
            </div>
            <div className="image-content">
              <div className="image-grid">
                <img
                  src="/placeholder.svg?height=200&width=250"
                  alt="Piezas de madera personalizadas"
                  className="grid-image"
                />
                <img
                  src="/placeholder.svg?height=200&width=250"
                  alt="Componentes especializados"
                  className="grid-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
};
