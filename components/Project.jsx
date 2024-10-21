import React from 'react';

const Project = ({ title, image, deployedUrl, githubUrl }) => {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <a href={deployedUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  );
};

export default Project;
