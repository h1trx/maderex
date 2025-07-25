import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { IoMenu } from "react-icons/io5";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import "../../styles/header.css"

import { Asidemovil } from "./../Asidemovil";

export const Headerabout = () => {
  const [aside, setAside] = useState(false)
  const navigate = useNavigate();

  // Navega y hace scroll suave si corresponde
  const goToSection = (section) => {
    if (section === "home") {
      navigate("/");
      // Scroll al top después de navegar
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  // logica para manejar el scroll suave y navegación
  return (
    <header className="header-nav">
      <button className="icon menu-icon" onClick={() => { setAside(!aside) }} aria-label="Abrir menú" aria-expanded={aside}>
        <IoMenu />
      </button>
      <nav>
        <ul className="aside-links-container envidia">
          <li className="aside-link-item"><a onClick={() => goToSection("home")}>Home</a></li>
          <li className="aside-link-item"><a onClick={() => goToSection("exports-section")}>Servicios</a></li>
          <li className="aside-link-item"><a onClick={() => goToSection("about-section")}>Conocenos</a></li>
          <li className="aside-link-item"><a onClick={() => goToSection("contact-section")}>Contactanos</a></li>
        </ul>
      </nav>
      <ul className="social-links">
        <li><a href="https://www.facebook.com/profile.php?id=61552174737475" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook className="icon social-icon" /></a></li>
        <li><a href="https://www.instagram.com/maderextkoficial" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram className="icon social-icon" /></a></li>
        <li><a href="https://www.tiktok.com/@maderextkinternat" target="_blank" rel="noopener noreferrer" aria-label="Tiktok"><FaTiktok className="icon social-icon" /></a></li>
        <li><a href="https://x.com/MaderexI57271" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><BsTwitterX className="icon social-icon" /></a></li>
      </ul>
      <Asidemovil isVisible={aside} setIsVisible={setAside} />
    </header>
  )
}
