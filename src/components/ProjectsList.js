import React from 'react';
import Project from './Project';

const ProjectsList = ({ projects }) => (
  <div className="projects-grid">
    {projects && projects.map((project, index) => (
      <Project key={index} title={project.title} url={project.url} />
    ))}
  </div>
);

export default ProjectsList;
