import React from 'react';
import Project from '../components/Project';

const projects = [
  { title: 'Project 1', image: '/path/to/image1.jpg', deployedUrl: 'https://project1.com', githubUrl: 'https://github.com/your-username/project1' },
  { title: 'Project 2', image: '/path/to/image2.jpg', deployedUrl: 'https://project2.com', githubUrl: 'https://github.com/your-username/project2' },
  // Add more projects
];

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <Project 
            key={index}
            title={project.title}
            image={project.image}
            deployedUrl={project.deployedUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
