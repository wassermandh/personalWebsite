import React from 'react';

const ExperiencePage = props => {
  return (
    <div className="experienceContainer">
      <h1 className="header">Skills</h1>
      <p>
        <strong>Proficient:</strong> JavaScript, React, Redux, Node, Express,
        Sequelize, Git/Github, HTML, CSS, Material-UI, Axios
        <br />
        <strong>Knowledgeable:</strong> TDD (Mocha, Chai, Enzyme), SQL,
        PostgreSQL, Heroku
      </p>
      <h1 className="header">Work Experience</h1>
      <h2>
        Teaching Fellow at Fullstack Academy <br /> Dates: July 2019 - Present
      </h2>
      <ul>
        <li>One of 12 students selected for the position</li>
      </ul>
    </div>
  );
};

export default ExperiencePage;
