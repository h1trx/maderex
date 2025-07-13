import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { Acedro } from "./Acedro";

import { navig } from "../utils/navig";

import "../styles/landingpage.css"

export const Main = () => {
    const [chat, setChat] = useState(false)
    return (
        <section className="landing-container">
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
                <h1 className="title" >MADEREX <spam>TK</spam><br />INTERNACIONAL</h1>
                <p className="desc">Somos una empresa dedicada a la exportación y transformación de madera teca y roble. Nuestros productos provienen de bosques reforestados,  garantizando la sostenibilidad con el medio ambiente</p>
            </div>
            <button className="btn-action" onClick={() => navig(`https://api.whatsapp.com/send?phone=573127093619&text=Hola%2C%20quiero%20cotizar%20una%20exportaci%C3%B3n`)}>Cotiza tu exportación</button>
            <a href="#hola">
                <FaArrowDown className="downrow" />
            </a>
            <button aria-label="Abrir chat de Inteligencia Artificial" className="btn-ia-chat" onClick={() => { setChat(!chat) }}>
                <BsChatDots className="ia-chat-inside" aria-hidden="true" />
            </button>
            {chat ? <Acedro /> : ""}
        </section>
    )
}
