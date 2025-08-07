import { useState, useEffect, useRef } from "react";
import { FaArrowDown, FaHome } from "react-icons/fa";
import { GiWoodCabin, GiWoodBeam, GiHandTruck } from "react-icons/gi";
import { PiShippingContainerLight } from "react-icons/pi";
import { BsChatDots } from "react-icons/bs";
import { Acedro } from "./Acedro";
import DynamicIcon from "./common/DynamicIcon";

import { navig } from "../utils/navig";
import { useSiteConfig, useServices } from "../context/SiteConfigContext";

import "../styles/landingpage.css"
import "../styles/carousel.css"
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const dotsRef = useRef(null);
  const [chat, setChat] = useState(false);
  const [slide, setSlide] = useState(0);
  // Swipe/drag state
  const [dragStartX, setDragStartX] = useState(null);
  const [dragging, setDragging] = useState(false);
  const navigate = useNavigate();
  
  // Obtener configuración del JSON
  const { hero, logos, services, loading } = useSiteConfig();
  
  // No renderizar hasta que los datos estén cargados
  if (loading || !hero || !logos || !services) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '1.2rem'
      }}>
        Cargando...
      </div>
    );
  }

  // Handlers para swipe/touch/drag
  const handleTouchStart = (e) => {
    setDragStartX(e.touches[0].clientX);
    setDragging(true);
  };
  const handleTouchMove = (e) => {
    if (!dragging) return;
    // No se hace nada visual, solo se detecta el movimiento
  };
  const handleTouchEnd = (e) => {
    if (!dragging || dragStartX === null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - dragStartX;
    if (diff > 60) {
      setSlide((s) => (s - 1 + slides.length) % slides.length);
    } else if (diff < -60) {
      setSlide((s) => (s + 1) % slides.length);
    }
    setDragging(false);
    setDragStartX(null);
  };

  // Mouse drag para desktop
  const [mouseDownX, setMouseDownX] = useState(null);
  const handleMouseDown = (e) => {
    setMouseDownX(e.clientX);
    setDragging(true);
  };
  const handleMouseUp = (e) => {
    if (!dragging || mouseDownX === null) return;
    const diff = e.clientX - mouseDownX;
    if (diff > 60) {
      setSlide((s) => (s - 1 + slides.length) % slides.length);
    } else if (diff < -60) {
      setSlide((s) => (s + 1) % slides.length);
    }
    setDragging(false);
    setMouseDownX(null);
  };
  const handleMouseLeave = () => {
    setDragging(false);
    setMouseDownX(null);
  };
  // Crear slides dinámicos desde la configuración JSON
  const slides = [
    {
      type: 'main',
      content: (
        <>
          <div className="back-container">
            <video
              className="videoback"
              autoPlay
              muted
              loop
              src={hero.video}
            >Thoi source not found in your browser</video>
            <div className="opaco"></div>
          </div>
          <img loading="lazy" className="logopng" src={logos.main} alt="Logo MaderexTK" />
          <div className="text-container">
            <div className="title-containter">
              <h1 className="title">{hero.title.split(' ')[0]} <span>{hero.title.split(' ')[1]}</span><br /></h1>
              <p id="internacional">{hero.subtitle}</p>
            </div>
            <p className="desc">{hero.description}</p>
          </div>
        </>
      )
    },
    ...services.map(service => ({
      type: 'service',
      title: service.title,
      desc: service.description,
      bg: service.background,
      icon: service.icon,
      button: {
        text: service.button.text,
        onClick: () => {
          if (service.type === 'external') {
            navig(service.route);
          } else {
            navigate(service.route);
          }
        }
      }
    }))
  ];

  const nextSlide = () => setSlide((s) => (s + 1) % slides.length);
  const prevSlide = () => setSlide((s) => (s - 1 + slides.length) % slides.length);

  // Ocultar dots al hacer scroll si el navbar está visible
  useEffect(() => {
    const handleScroll = () => {
      if (!dotsRef.current) return;
      // Ajusta el valor 60 según la altura de tu navbar
      if (window.scrollY > 60) {
        dotsRef.current.classList.add('hide-on-scroll');
      } else {
        dotsRef.current.classList.remove('hide-on-scroll');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="landing-container">
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${slide * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          draggable={false}
          role="presentation"
        >
          {slides.map((slideObj, idx) => (
            <div className={`carousel-slide${slide === idx ? ' active' : ''}`} key={idx} style={slideObj.type === 'service' ? { backgroundImage: `url(${slideObj.bg})` } : {}}>
              {slideObj.type === 'main' ? slideObj.content : (
                <div className="carousel-service-content">
                  <div className="carousel-service-text">
                    <div className="carousel-service-bg"></div>
                    <h2 className="carousel-service-title">{slideObj.title}</h2>
                    <p className="carousel-service-desc">{slideObj.desc}</p>
                  </div>
                  {slideObj.button && (
                    <button
                      className="btn-services"
                      onClick={slideObj.button.onClick}
                    >
                      {slideObj.button.text}
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <nav className="carousel-nav" ref={dotsRef} aria-label="Navegación de servicios">
          <button
            className={`carousel-nav-btn${slide === 0 ? ' active' : ''}`}
            onClick={() => setSlide(0)}
            aria-label="Ir al inicio"
            style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <FaHome className="carousel-nav-icon" />
          </button>
          <span className="carousel-nav-sep" aria-hidden="true">|</span>
          {slides.map((slideObj, idx) => {
            if (slideObj.type !== 'service') return null;
            return (
              <>
                <button
                  key={slideObj.title}
                  className={`carousel-nav-btn${slide === idx ? ' active' : ''}`}
                  onClick={() => setSlide(idx)}
                  aria-label={`Ir a ${slideObj.title}`}
                >
                  <span className="carousel-nav-btn-text">{slideObj.title}</span>
                  <span className="carousel-nav-btn-icon">
                    <DynamicIcon iconName={slideObj.icon} className="carousel-nav-icon" />
                  </span>
                </button>
                {idx < slides.length - 1 && slides[idx + 1]?.type === 'service' ? (
                  <span className="carousel-nav-sep" aria-hidden="true">|</span>
                ) : null}
              </>
            );
          })}
        </nav>
      </div>
      <a aria-label="Ir a servicios" href="#hola">
        <FaArrowDown className="downrow" />
      </a>
      <button aria-label="Abrir chat de Inteligencia Artificial" className="btn-ia-chat" onClick={() => { setChat(!chat) }}>
        <BsChatDots className="ia-chat-inside" aria-hidden="true" />
      </button>
      {chat ? <Acedro /> : ""}
    </section>
  )
}
