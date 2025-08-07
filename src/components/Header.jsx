import { useState } from "react";

import { IoMenu } from "react-icons/io5";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import "../styles/header.css"

import { Asidemovil } from "./Asidemovil";
import { useNavigation, useContact } from "../context/SiteConfigContext";

export const Header = () => {
  const [aside, setAside] = useState(false);
  const { mainNavigation } = useNavigation();
  const { socialMedia, whatsapp } = useContact();

  // Función para scroll suave
  const scrollToSection = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header-nav">
      <button className="icon menu-icon" onClick={() => { setAside(!aside) }} aria-label="Abrir menú" aria-expanded={aside}>
        <IoMenu />
      </button>
      <nav>
        <ul className="aside-links-container envidia">
          {mainNavigation.map((item) => (
            <li key={item.id} className="aside-link-item">
              <a onClick={() => scrollToSection(item.target)}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <ul className="social-links">
        <li><a href={socialMedia?.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook className="icon social-icon" /></a></li>
        <li><a href={socialMedia?.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram className="icon social-icon" /></a></li>
        <li><a href={socialMedia?.tiktok} target="_blank" rel="noopener noreferrer" aria-label="Tiktok"><FaTiktok className="icon social-icon" /></a></li>
        <li><a href={whatsapp?.exportQuote} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp className="icon social-icon" /></a></li>
      </ul>
      <Asidemovil isVisible={aside} setIsVisible={setAside} />
    </header>
  )
}
