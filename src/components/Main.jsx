import { useState, useEffect, useRef } from "react";
import { FaArrowDown } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { Acedro } from "./Acedro";

import { navig } from "../utils/navig";

import "../styles/landingpage.css"
import "../styles/carousel.css"

export const Main = () => {
  const dotsRef = useRef(null);
  const [chat, setChat] = useState(false);
  const [slide, setSlide] = useState(0);
  // Swipe/drag state
  const [dragStartX, setDragStartX] = useState(null);
  const [dragging, setDragging] = useState(false);

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
          <button className="btn-services" onClick={() => setSlide((s) => (s + 1) % slides.length)}>conoce nuestros servicios</button>
        </>
      )
    },
    {
      type: 'service',
      title: 'Store',
      desc: 'Compra productos de madera de alta calidad en nuestra tienda.',
      bg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      button: {
        text: 'Ir a la tienda',
        onClick: () => navig('/tienda')
      }
    },
    {
      type: 'service',
      title: 'Maderex Exports',
      desc: 'En Maderextk, nos enorgullece ser su proveedor confiable de madera de calidad suprema. Somos líderes en la industria de la madera, especializados en la venta y exportación de productos de teca y roble, dos de las maderas más apreciadas en el mercado.',
      bg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      button: {
        text: 'Cotiza tu exportación',
        onClick: () => navig(`https://api.whatsapp.com/send?phone=573127093619&text=Hola%2C%20quiero%20cotizar%20una%20exportaci%C3%B3n`)
      }
    },
    {
      type: 'service',
      title: 'Acerrio',
      desc: 'n MaderexTK International, nos destacamos por ofrecer una amplia gama de servicios de aserrío y venta nacional de madera dimensionada para satisfacer las necesidades de proyectos inmobiliarios de todos los tamaños',
      bg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      button: {
        text: 'Solicita servicio de aserrío',
        onClick: () => navig(`https://api.whatsapp.com/send?phone=573127093619&text=Hola%2C%20quiero%20información%20sobre%20servicio%20de%20aserrío`)
      }
    },
    {
      type: 'service',
      title: 'Buenvivir',
      desc: 'En MaderexTK International, estamos encantados de presentarte nuestra línea de trabajo especializada en casas prefabricadas de madera teca: Maderex Buenvivir. Para aquellos que buscan una vivienda de alta calidad, sostenible y personalizada.',
      bg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      button: {
        text: 'Ver más información',
        onClick: () => navig(`https://api.whatsapp.com/send?phone=573127093619&text=Hola%2C%20quiero%20información%20sobre%20casas%20prefabricadas`)
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
                    {slideObj.button && (
                      <button
                        className="carousel-service-btn"
                        onClick={slideObj.button.onClick}
                      >
                        {slideObj.button.text}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="carousel-dots" ref={dotsRef}>
          {slides.map((_, idx) => (
            <button key={idx} className={`carousel-dot${slide === idx ? ' active' : ''}`} onClick={() => setSlide(idx)} aria-label={`Ir al slide ${idx + 1}`}></button>
          ))}
        </div>
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
