import "../styles/projects.css"
import { Project } from "./Project";
import { useProjects } from '../context/SiteConfigContext';

export const Projects = () => {
    const { projects } = useProjects();
    
    return (
        <section className="project-main-container">
            <h2>Proyectos</h2>
            {
                projects.map((project, index) => (
                    <Project
                        key={index}
                        name={project.name}
                        description={project.description}
                        image={project.image}
                    />
                ))
            }
            <hr className="divisor-left" />
        </section>
    )
}
