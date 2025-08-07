import "../styles/projects.css"

export const Project = ({ name, description, image = 'https://res.cloudinary.com/dxr7cjjpa/image/upload/v1746198816/Imagen_de_WhatsApp_2023-07-14_a_las_16.47.25_3a0694e4_uhf7yo.jpg' }) => {
    return (
        <article className="project-article">
            <section>
                <h3>{name}</h3>
                <p className="descripcion-project">{description}</p>
                <section className="botones-container">
                    <button className="boton-accion-project">Galeria</button>
                    <button className="boton-accion-project">Reseña</button>
                </section>
            </section>
            <img className="img-project" src={image} alt="" />
        </article>
    )
}
