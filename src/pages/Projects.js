import React from 'react'
import ProjectItem from '../components/project/ProjectItem';
import { projects } from '../helpers/ProjectsList';

export default function Projects() {
  return (
    <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                  {projects.map((item) => <ProjectItem key={item.id} project={item} />)}
            </ul>
        </div>
    </main>
  )
}
