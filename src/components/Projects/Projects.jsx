import styles from "./Project.module.css";
import React from 'react'
import projects from '../../data/projects.json';
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    return <section id="Projects" className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
            {
                projects.map((project, id) => {
                    return (
                        <ProjectCard key={id} project={project}/>
                    )
                })
            }
        </div>
    </section>
}