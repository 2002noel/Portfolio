import React from 'react';
import '../styles/Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A fully responsive e-commerce website with product listings, shopping cart, and checkout functionality.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: 'project1.jpg',
    link: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A task management application that helps users organize their daily activities and track progress.',
    technologies: ['React', 'Redux', 'Firebase'],
    image: 'project2.jpg',
    link: '#'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather dashboard that provides real-time weather information and forecasts for different locations.',
    technologies: ['JavaScript', 'HTML/CSS', 'Weather API'],
    image: 'project3.jpg',
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectsData.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              {/* Replace with actual image later */}
              <div className="image-placeholder" alt={project.title}></div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="btn project-btn">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 