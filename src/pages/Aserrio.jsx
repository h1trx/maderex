import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import "../styles/aserrio.css";

export const Aserrio = () => {
  return (
    <>
      <Header />
      <main className="aserrio-main">
        <section className="hero-aserrio">
          <div className="hero-text">
            <h1>Aserrío de Alta Precisión</h1>
            <p>De la troza a la tabla, con la calidad que nos caracteriza.</p>
          </div>
        </section>

        <section className="process-section">
          <h2>Nuestro Proceso</h2>
          <div className="process-steps">
            <div className="step">
              <span className="step-icon">🚚</span>
              <h3>Recepción y Clasificación</h3>
            </div>
            <div className="step">
              <span className="step-icon">🪚</span>
              <h3>Corte y Dimensionado</h3>
            </div>
            <div className="step">
              <span className="step-icon">🌡️</span>
              <h3>Secado en Horno</h3>
            </div>
            <div className="step">
              <span className="step-icon">🔍</span>
              <h3>Control de Calidad</h3>
            </div>
          </div>
        </section>

        <section className="services-section">
          <h2>Nuestros Servicios</h2>
          <div className="service-cards">
            <div className="card">
              <h3>Cortes a Medida</h3>
              <p>Adaptamos las dimensiones de la madera a las especificaciones exactas de tu proyecto.</p>
            </div>
            <div className="card">
              <h3>Madera Estructural</h3>
              <p>Vigas, columnas y tablas de alta resistencia para construcción.</p>
            </div>
            <div className="card">
              <h3>Tratamientos y Acabados</h3>
              <p>Servicios de secado, cepillado y tratamiento para garantizar la durabilidad.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
