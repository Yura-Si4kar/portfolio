import React from 'react';
import { NavLink } from 'react-router-dom';
import './ProjectItem.css';

export default function ProjectItem({ project }) {
  return (
    <NavLink to={`/project/${project.id}`}>
      <li className="project">
        <img src={project.img} alt="Project img" className="project__img" />
        <h3 className="project__title">{project.title}</h3>
      </li>
    </NavLink>
  )
}
