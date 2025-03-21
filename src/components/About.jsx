import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate web developer with expertise in creating dynamic, 
            user-friendly websites and applications. With a strong foundation in 
            frontend and backend technologies, I enjoy bringing ideas to life in 
            the digital space.
          </p>
          <p>
            My journey in web development began several years ago, and since then, 
            I've worked on various projects that have helped me refine my skills and 
            expand my knowledge in modern web technologies.
          </p>
        </div>
        <div className="skills">
          <h3>My Skills</h3>
          <div className="skill-bars">
            <div className="skill">
              <span>HTML/CSS</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="skill">
              <span>JavaScript</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="skill">
              <span>React</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="skill">
              <span>Node.js</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "75%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 