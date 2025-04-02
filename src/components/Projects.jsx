import React from 'react';
import '../styles/Projects.css';
import IOSAPP from '../assets/IOSAPP.png';
import FarmGameVideo from '../assets/GameDemo.mp4';

const projectsData = [
  {
    id: 1,
    title: 'IOS App',
    description: 'A mobile application similar to Yelp that helps users see the accessbility of a location.',
    technologies: ['SwiftUI', 'MapBox', 'FireBase'],
    image: IOSAPP,
    video: null,
    link: '#'
  },
  {
    id: 2,
    title: 'Farm Inc.',
    description: 'A barebones farmning game that allows users to plant crops, harvest them, and also automate the process with added features',
    technologies: ['C#', 'Unity'],
    image: null,
    video: FarmGameVideo,
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
              {project.video ? (
                <video controls className="project-video">
                  <source src={project.video} type="video/mp4" />
                </video>
              ) : (
              <img src={project.image} alt={project.title} />
              )}
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;