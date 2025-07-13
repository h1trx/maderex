import "../styles/projects.css"

export const Projects = () => {
    return (
        <section className="project-main-container">
            <h2>Proyectos</h2>
            <article className="project-article">
                <section>
                    <h3>GHL - Desktop</h3>
                    <p className="descripcion-project">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt ab exercitationem quod. Provident molestiae illum corporis. Perferendis eligendi quibusdam natus dolore doloribus, alias earum consequatur deleniti labore, amet nemo?</p>
                    <section className="botones-container">
                        <button className="boton-accion-project">Galeria</button>
                        <button className="boton-accion-project">Reseña</button>
                    </section>
                </section>
                <img className="img-project" src="https://res.cloudinary.com/dxr7cjjpa/image/upload/v1746198816/Imagen_de_WhatsApp_2023-07-14_a_las_16.47.25_3a0694e4_uhf7yo.jpg" alt="" />
            </article>
            <article className="project-article">
                <section>
                    <h3>GHL - Desktop</h3>
                    <p className="descripcion-project">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt ab exercitationem quod. Provident molestiae illum corporis. Perferendis eligendi quibusdam natus dolore doloribus, alias earum consequatur deleniti labore, amet nemo?</p>
                    <section className="botones-container">
                        <button className="boton-accion-project">Galeria</button>
                        <button className="boton-accion-project">Reseña</button>
                    </section>
                </section>
                <img className="img-project" src="https://res.cloudinary.com/dxr7cjjpa/image/upload/v1746198816/Imagen_de_WhatsApp_2023-07-14_a_las_16.47.25_3a0694e4_uhf7yo.jpg" alt="" />
            </article>
            <hr className="divisor-left" />
        </section>
    )
}
