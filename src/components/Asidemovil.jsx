import { IoIosCloseCircleOutline } from "react-icons/io";
import "../styles/asidemobil.css"

export const Asidemovil = ({ isVisible, setIsVisible }) => {
  return (
    <section className={`aside-mobil-container ${isVisible? "open" : ""}`}>
      <ul className="aside-links-container">
        <li className="aside-link-item"><a href="#">Home</a></li>
        <li className="aside-link-item"><a href="#">Servicios</a></li>
        <li className="aside-link-item"><a href="#">Conocenos</a></li>
        <li className="aside-link-item"><a href="#">Contactanos</a></li>
      </ul>
      <p className="texto-header-aside">Made with 🧡 for Maderex TK Team</p>
      <button aria-label="Boton de cerrar" className="close-aside" onClick={() => {setIsVisible(false)}}>
        <IoIosCloseCircleOutline />
      </button>
    </section>
  )
}
