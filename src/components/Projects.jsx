import "../styles/projects.css"
import { Project } from "./Project";

// aquí refactorizé para que sea mas facil
// hacer la pagina editable cuando pongamos
// los datos en un JSON
const projectsData = [
    {
        name: "GHL - Desktop",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt ab exercitationem quod. Provident molestiae illum corporis. Perferendis eligendi quibusdam natus dolore doloribus, alias earum consequatur deleniti labore, amet nemo?",
        // image: "https://res.cloudinary.com/dxr7cjjpa/image/upload/v1746198816/Imagen_de_WhatsApp_2023-07-14_a_las_16.47.25_3a0694e4_uhf7yo.jpg"
    },
    {
        name: "Prodigio",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt ab exercitationem quod. Provident molestiae illum corporis. Perferendis eligendi quibusdam natus dolore doloribus, alias earum consequatur deleniti labore, amet nemo?",
        // image: "https://res.cloudinary.com/dxr7cjjpa/image/upload/v1746198816/Imagen_de_WhatsApp_2023-07-14_a_las_16.47.25_3a0694e4_uhf7yo.jpg"
    },
    {
        name: "Biblioteca",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt ab exercitationem quod. Provident molestiae illum corporis. Perferendis eligendi quibusdam natus dolore doloribus, alias earum consequatur deleniti labore, amet nemo?",
        // image: "https://res.cloudinary.com/dxr7cjjpa/image/upload/v1746198816/Imagen_de_WhatsApp_2023-07-14_a_las_16.47.25_3a0694e4_uhf7yo.jpg"
    }
]

export const Projects = () => {
    return (
        <section className="project-main-container">
            <h2>Proyectos</h2>
            {
                projectsData.map((project, index) => (
                    <Project
                        key={index}
                        name={project.name}
                        description={project.description}
                        // image={project.image}
                    />
                ))
            }
            <hr className="divisor-left" />
        </section>
    )
}
