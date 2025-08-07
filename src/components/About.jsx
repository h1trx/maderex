import { useNavigate } from "react-router-dom"
import { useSiteConfig } from "../hooks/useSiteConfig"

import "../styles/about.css"

export const About = () => {
    const navigation = useNavigate();
    const { about } = useSiteConfig();
    
    return (
        <>
            <section className="about-container">
                <div className="sombra">
                    <p className="text-about">
                        {about.home.text.split('\n').map((line, index) => (
                            <span key={index}>
                                {line}
                                {index < about.home.text.split('\n').length - 1 && <br />}
                            </span>
                        ))}
                    </p>
                    <button className="enlace-about" onClick={() => navigation("/about")}>
                        {about.home.button}
                    </button>
                </div>
            </section>
        </>
    )
}
