'use client';
import ProjectCard from "./projectCard"

export default function ProjectList({projects}){

    return(
        <ul className={`grid grid-cols-1 md:grid-cols-3 justify-center gap-4 pt-10 `}>
            {projects.map((project, index) => (
                <ProjectCard key={index} id={project.index} title={project.title} type={project.type} image={project.image}/>
            ))}
        </ul>
    )
}