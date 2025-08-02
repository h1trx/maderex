import {Headerabout} from '../components/about/Headerabout';
import { Footer } from '../components/Footer'; 
import '../styles/exports.css';


export const Exports = () => {
    return (
    <div className="maderextk-page">
        <Headerabout />
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            {/* <div className="logo-container">
              <div className="logo-circle">
                <span className="logo-text">M</span>
              </div>
            </div> */}
            <h1 className="hero-title">Su Socio En Madera de Excelencia</h1>
            <div className="hero-underline"></div>
            <p className="hero-description">
              En Maderextk, nos enorgullece ser su proveedor confiable de madera de calidad suprema. Somos líderes en la
              industria de la madera, especializados en la venta y exportación de productos de teca y roble, dos de las
              maderas más apreciadas en el mercado.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-content">
            <div className="text-content">
              <h2 className="section-title">Compromiso con el Cliente</h2>
              <div className="title-underline"></div>
              <p className="section-text">
                En Maderextk, nos enorgullece ser su proveedor confiable de madera de calidad suprema. Somos líderes en
                la industria de la madera, especializados en la venta y exportación de productos de teca y roble, dos de
                las maderas más apreciadas en el mercado.
              </p>
            </div>
            <div className="image-content">
              <div className="image-grid">
                <img
                  src="/placeholder.svg?height=200&width=250"
                  alt="Compromiso con el cliente"
                  className="grid-image"
                />
                <img src="/placeholder.svg?height=200&width=250" alt="Control de calidad" className="grid-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section alt-section">
        <div className="container">
          <div className="section-content">
            <div className="image-content">
              <div className="image-grid">
                <img src="/placeholder.svg?height=200&width=250" alt="Bosque sostenible" className="grid-image" />
                <img src="/placeholder.svg?height=200&width=250" alt="Conservación ambiental" className="grid-image" />
              </div>
            </div>
            <div className="text-content">
              <h2 className="section-title">Sostenibilidad y Responsabilidad Ambiental</h2>
              <div className="title-underline"></div>
              <p className="section-text">
                Nos preocupamos por el futuro de nuestros bosques, por lo que nos aseguramos de que todas nuestras
                maderas provengan de fuentes sostenibles y gestionadas de manera responsable. Con un enfoque en la
                conservación del medio ambiente, nos esforzamos por promover prácticas forestales sostenibles que
                protejan nuestros recursos naturales para las generaciones venideras.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-content">
            <div className="text-content">
              <h2 className="section-title">Exportación Global</h2>
              <div className="title-underline"></div>
              <p className="section-text">
                Con una sólida red de distribución internacional, atendemos a clientes en todo el mundo, garantizando
                entregas rápidas y seguras en cualquier ubicación. Ya sea que necesite un pequeño pedido para un
                proyecto personal o un envío a gran escala para un proyecto comercial, puede confiar en nosotros para
                cumplir con sus requisitos con profesionalismo y eficiencia.
              </p>
            </div>
            <div className="image-content">
              <div className="image-grid">
                <img src="/placeholder.svg?height=200&width=250" alt="Exportación global" className="grid-image" />
                <img src="/placeholder.svg?height=200&width=250" alt="Red de distribución" className="grid-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-message-section">
        <div className="container">
          <div className="final-content">
            <div className="message-card">
              <h3 className="message-title">Nuestro Compromiso</h3>
              <div className="title-underline center"></div>
              <ul className="message-list">
                <li>
                  Gracias por elegir Maderextk como su socio en madera. Esperamos con interés servirle y ayudarlo a
                  alcanzar el éxito en todos sus proyectos.
                </li>
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