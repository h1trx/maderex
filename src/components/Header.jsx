import { useState } from "react";

import { IoMenu } from "react-icons/io5";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


import "../styles/header.css"

import { Asidemovil } from "./Asidemovil";

export const Header = () => {
  const [aside, setAside] = useState(false)
  // Función para scroll suave
  const scrollToSection = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // cambios hechos: 
  // - Navegación directa a la sección sin usar useNavigate
  // - Simplificación de la función scrollToSection
  // - Eliminación de lógica de navegación que no se usa en este contexto
  return (
    <header className="header-nav">
      <button className="icon menu-icon" onClick={() => { setAside(!aside) }} aria-label="Abrir menú" aria-expanded={aside}>
        <IoMenu />
      </button>
      <nav>
        <ul className="aside-links-container envidia">
          <li className="aside-link-item"><a onClick={() => scrollToSection("home")}>Home</a></li>
          <li className="aside-link-item"><a onClick={() => scrollToSection("exports-section")}>Servicios</a></li>
          <li className="aside-link-item"><a onClick={() => scrollToSection("about-section")}>Conocenos</a></li>
          <li className="aside-link-item"><a onClick={() => scrollToSection("contact-section")}>Contactanos</a></li>
        </ul>
      </nav>
      <ul className="social-links">
        <li><a href="https://www.facebook.com/profile.php?id=61552174737475" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook className="icon social-icon" /></a></li>
        <li><a href="https://www.instagram.com/maderextkoficial" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram className="icon social-icon" /></a></li>
        <li><a href="https://www.tiktok.com/@maderextkinternat" target="_blank" rel="noopener noreferrer" aria-label="Tiktok"><FaTiktok className="icon social-icon" /></a></li>
        <li><a href="https://api.whatsapp.com/send?phone=573127093619&text=Hola%2C%20quiero%20cotizar%20una%20exportaci%C3%B3n" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp className="icon social-icon" /></a></li>
      </ul>
      <Asidemovil isVisible={aside} setIsVisible={setAside} />
    </ header>
  )
}
