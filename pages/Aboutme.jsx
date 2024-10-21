import React from 'react';

const AboutMe = () => {
  return (
    <section>
      <h2>About Me</h2>
      <div className="about-me">
        <img 
          src="/path/to/your-photo.jpg" 
          alt="Your Name" 
          className="about-me-photo" 
          style={{ width: '150px', borderRadius: '50%' }} 
        />
        <p>
          Hello! I'm Alisha, a web developer with a passion for building dynamic and responsive web applications. 
          I have experience with modern web technologies like React, JavaScript, and Node.js. My goal is to create 
          user-friendly, efficient, and scalable web solutions that address real-world problems.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
