import React from 'react';

const Project = ({ title, url }) => (
  <div className="project">
    <h2>{title}</h2>
    <iframe src={url} title={title} frameBorder="0"></iframe>
    <p className="project-link">
      <a href={url} target="_blank" rel="noopener noreferrer">Ver projeto</a>
    </p>
  </div>
);

export default Project;
