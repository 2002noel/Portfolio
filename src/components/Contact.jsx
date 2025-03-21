import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    // For now, we'll just log the data
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>
            I'm interested in freelance opportunities – especially ambitious or large projects. 
            However, if you have other requests or questions, don't hesitate to contact me using the form.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>email@example.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+1 234 567 890</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>City, Country</span>
            </div>
          </div>
          <div className="social-links">
            <a href="#" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 