import { About } from "../components/About.jsx"
import { Footer } from "../components/Footer.jsx"
import { Formulario } from "../components/Formulario.jsx"
import { Header } from "../components/Header.jsx"
import { Main } from "../components/Main.jsx"
import { Map } from "../components/Map.jsx"
import { Projects } from "../components/Projects.jsx"
import { Services } from "../components/Services.jsx"
import '../styles/about.css'

// se agregaron ids a las secciones para el scroll suave
export const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Main />
                {
                    /* <section id="exports-section">
                  <Services />
                </section> */
                }
                <section id="about-section">
                  <About />
                </section>
                <section id="projects-section">
                  <Projects />
                </section>
                <section id="contact-section">
                  <Formulario />
                </section>
                <Map/>
            </main>
            <Footer />
        </>
    )
}
