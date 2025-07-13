import { IoIosCloseCircleOutline } from "react-icons/io";
import "../styles/asidemobil.css"

export const Asidemovil = ({ isVisible, setIsVisible }) => {
  console.log(setIsVisible)
  return (
    <section className={`aside-mobil-container ${isVisible? "open" : ""}`}>
      <ul className="aside-links-container">
        <li className="aside-link-item">Home</li>
        <li className="aside-link-item">Servicios</li>
        <li className="aside-link-item">Conocenos</li>
        <li className="aside-link-item">Contactanos</li>
      </ul>
      <p className="texto-header-aside">Made with 🧡 for Maderex TK Team</p>
      <button className="close-aside" onClick={() => {setIsVisible(false)}}>
        <IoIosCloseCircleOutline />
      </button>
    </section>
  )
}
