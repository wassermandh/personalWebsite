import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Infolinks = props => {
  return (
    <div
      className="infoLinks"
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        maxWidth: '600px',
        margin: '-10px auto -10px auto',
      }}
    >
      <a href="https://www.linkedin.com/in/danielharriswasserman/">
        <h3>LinkedIn</h3>
      </a>
      <a href="https://github.com/wassermandh">
        <h3>Github</h3>
      </a>
      <Link to="/projects">
        <h3>Projects</h3>
      </Link>
      <Link to="/experience">
        <h3>Experience</h3>
      </Link>
      <Link to="/resume">
        <h3>Resume</h3>
      </Link>
    </div>
  );
};

export default Infolinks;
