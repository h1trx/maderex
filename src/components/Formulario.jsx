import { useState } from "react"
import { sendMail } from "../utils/sendMail"
import "../styles/formulario.css"

export const Formulario = () => {
    const [name, setName] = useState("")
    const [asunto, setAsunto] = useState("")
    const [mail, setMail] = useState("")
    const [msg, setMsg] = useState("")
    const [send, setSend] = useState(false)
    return (
        <section className="form-section">
            <form>
                <h2 className="contact-h2">FORMULARIO DE<br/>CONTACTO</h2>
                <img className="logo-form" src="https://res.cloudinary.com/dxr7cjjpa/image/upload/v1751398299/maderexwithfont_csh0um.png" alt="Logo MaderexTK" />
                <div className="form-content">
                    <label htmlFor="name">Nombres</label>
                    <input className="input-form" type="text" name="name" id="name" placeholder="Juan Camilo" value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="form-content">
                    <label htmlFor="asunto">Asunto</label>
                    <input className="input-form" type="text" name="asunto" id="asunto" placeholder="Contacto para proyecto" value={asunto} onChange={(e) => { setAsunto(e.target.value) }} />
                </div>
                <div className="form-content">
                    <label htmlFor="mail">Email</label>
                    <input className="input-form" type="email" name="mail" id="mail" placeholder="anyone@example.com" value={mail} onChange={(e) => { setMail(e.target.value) }} />
                </div>
                <div className="form-content">
                    <label htmlFor="msg">Mensaje</label>
                    <textarea className="input-form" name="msg" id="msg" placeholder="Tu mensaje aquí..." value={msg} onChange={(e) => { setMsg(e.target.value) }}></textarea>
                </div>
                <button className="send-button" type="submit" onClick={(e) => {
                    e.preventDefault();
                    sendMail(name, asunto, mail, msg, setName, setAsunto, setMail, setMsg)
                    setSend(true)
                    setTimeout(() => {
                        //setSend(false)
                        console.log("ok")
                    }, 3000)
                }}>Enviar</button>
            </form>
            <div className="video">
                <video src="https://res.cloudinary.com/dvdhtdzwp/video/upload/v1746241298/e4zulgqf7nctyev2zhjd.mp4"
                    autoPlay
                    muted
                    loop
                >hola</video>
            </div>
        </section>
    )
}

//{send ? <Sended /> : ""}