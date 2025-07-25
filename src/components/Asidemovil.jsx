import { IoIosCloseCircleOutline } from "react-icons/io";
import "../styles/asidemobil.css"
import { useNavigate } from "react-router-dom";

export const Asidemovil = ({ isVisible, setIsVisible }) => {
  const navigate = useNavigate();

  // Función para scroll suave y navegación
  const scrollToSection = (id) => {
    setIsVisible(false);
    if (id === "home") {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    } else {
      if (window.location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 400);
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className={`aside-mobil-container ${isVisible? "open" : ""}`}>
      <ul className="aside-links-container">
        <li className="aside-link-item"><a onClick={() => scrollToSection("home")}>Home</a></li>
        <li className="aside-link-item"><a onClick={() => scrollToSection("exports-section")}>Servicios</a></li>
        <li className="aside-link-item"><a onClick={() => scrollToSection("about-section")}>Conocenos</a></li>
        <li className="aside-link-item"><a onClick={() => scrollToSection("contact-section")}>Contactanos</a></li>
      </ul>
      <p className="texto-header-aside">Made with 🧡 for Maderex TK Team</p>
      <button aria-label="Boton de cerrar" className="close-aside" onClick={() => {setIsVisible(false)}}>
        <IoIosCloseCircleOutline />
      </button>
    </section>
  )
}
