import React from 'react';

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <a href="/path/to/my-resume.pdf" download>Download My Resume</a>

      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript (ES6+)</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>HTML & CSS</li>
        <li>Express.js</li>
        <li>MongoDB / MySQL</li>
        <li>Git & GitHub</li>
        {/* Add more skills */}
      </ul>
    </section>
  );
};

export default Resume;
