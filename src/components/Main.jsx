import { useState, useEffect, useRef } from "react";
import { FaArrowDown, FaHome } from "react-icons/fa";
import { GiWoodCabin, GiWoodBeam, GiHandTruck } from "react-icons/gi";
import { PiShippingContainerLight } from "react-icons/pi";
import { BsChatDots } from "react-icons/bs";
import { Acedro } from "./Acedro";

import { navig } from "../utils/navig";

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
  const navigate = useNavigate()

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
              src="https://res.cloudinary.com/dxr7cjjpa/video/upload/v1751939629/06_1_oadnlg.mp4"
            >Thoi source not found in your browser</video>
            <div className="opaco"></div>
          </div>
          <img loading="lazy" className="logopng" src="https://res.cloudinary.com/dxr7cjjpa/image/upload/v1749575085/image_onikyk.png" alt="Logo MaderexTK" />
          <div className="text-container">
            <div className="title-containter">
              <h1 className="title" >MADEREX <spam>TK</spam><br /></h1>
              <p id="internacional">INTERNACIONAL</p>
            </div>
            <p className="desc">Somos una empresa dedicada a la exportación y transformación de madera teca y roble. Nuestros productos provienen de bosques reforestados,  garantizando la sostenibilidad con el medio ambiente</p>
          </div>
          {/* <button className="btn-action" onClick={() => navig(`https://api.whatsapp.com/send?phone=573127093619&text=Hola%2C%20quiero%20cotizar%20una%20exportaci%C3%B3n`)}>Cotiza tu exportación</button> */}
          {/* <button className="btn-services" onClick={() => setSlide((s) => (s + 1) % slides.length)}>conoce nuestros servicios</button> */}
        </>
      )
    },
    {
      type: 'service',
      title: 'Store',
      desc: 'Compra productos de madera de alta calidad en nuestra tienda.',
      bg: 'https://res.cloudinary.com/dxr7cjjpa/image/upload/v1746198851/IMG_20210513_120545_h7ev5l.jpg',
      button: {
        text: 'Ir a la tienda',
        onClick: () => navig('/tienda')
      }
    },
    {
      type: 'service',
      title: 'Maderex Exports',
      desc: 'Somos líderes en la industria de la madera, especializados en la venta y exportación de productos de teca y roble, dos de las maderas más apreciadas en el mercado.',
      bg: 'https://res.cloudinary.com/dxr7cjjpa/image/upload/v1746198811/Imagen_de_WhatsApp_2022-11-09_a_las_17.32.23_be7zz7.jpg',
      button: {
        text: 'Mas información',
        onClick: () => navigate('/exports')
      }
    },
    {
      type: 'service',
      title: 'Aserrío',
      desc: 'Nos destacamos por ofrecer una amplia gama de servicios de aserrío y venta nacional de madera dimensionada para satisfacer las necesidades de proyectos inmobiliarios de todos los tamaños',
      bg: 'https://res.cloudinary.com/dxr7cjjpa/image/upload/v1750347855/IMG_20211130_075138_ll7ugt_zxyoii.jpg',
      button: {
        text: 'Solicita servicio de aserrío',
        onClick: () => navigate('/acerrio')
      }
    },
    {
      type: 'service',
      title: 'Buenvivir',
      desc: 'En MaderexTK International, estamos encantados de presentarte nuestra línea de trabajo especializada en casas prefabricadas de madera teca: Maderex Buenvivir. Para aquellos que buscan una vivienda de alta calidad, sostenible y personalizada.',
      bg: 'https://res.cloudinary.com/dxr7cjjpa/image/upload/v1754174932/productos12_jia0l5.png',
      button: {
        text: 'Ver más información',
        onClick: () => navigate('/buenvivir')
      }
    },
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
            let icon = null;
            if (slideObj.title === 'Maderex Exports') icon = <PiShippingContainerLight className="carousel-nav-icon" />;
            else if (slideObj.title === 'Store') icon = <GiHandTruck className="carousel-nav-icon" />;
            else if (slideObj.title === 'Aserrío' || slideObj.title === 'Acerrio') icon = <GiWoodBeam className="carousel-nav-icon" />;
            else if (slideObj.title === 'Buenvivir') icon = <GiWoodCabin className="carousel-nav-icon" />;
            return (
              <>
                <button
                  key={slideObj.title}
                  className={`carousel-nav-btn${slide === idx ? ' active' : ''}`}
                  onClick={() => setSlide(idx)}
                  aria-label={`Ir a ${slideObj.title}`}
                >
                  <span className="carousel-nav-btn-text">{slideObj.title}</span>
                  <span className="carousel-nav-btn-icon">{icon}</span>
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
