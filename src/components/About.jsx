import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate programmer with a interest in web, mobile, and game development.
          </p>
          
        </div>
        <div className="skills">
          <h3>My Skills</h3>
          <div className="skill-bars">
            <div className="skill">
              <span>HTML/CSS</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "50%" }}></div>
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