import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="left-section">
        <div className="content">
          <h1>Hi, I am Tomasz Gajda</h1>
          <p>Front-end Developer / UI Designer</p>
          <div className="social-icons">
            <a href="mailto:example@mail.com">✉️</a>
            <a href="https://github.com/example">GitHub</a>
            <a href="https://linkedin.com/in/example">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="right-section">
        <img 
          src="your-image-path.jpg" 
          alt="Tomasz Gajda" 
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default HeroSection;
