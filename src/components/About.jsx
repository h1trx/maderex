import { useNavigate } from "react-router-dom"

import "../styles/about.css"

export const About = () => {
    const navigation = useNavigate()
    return (
        <>
            {/* <h2 className="title-about">Conocenos</h2> */}
            <section className="about-container">
                <div className="sombra">
                    <p className="text-about">
                        Más de 25 años cultivando Madera<br />TECA de forma sostenible.
                    </p>
                    <button className="enlace-about" onClick={() => navigation("/about")}>Conocenos</button>
                </div>
            </section>
        </>

    )
}
