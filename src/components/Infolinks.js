import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Infolinks = props => {
  return (
    <div id="InfoLinksContainer">
      <a href="https://www.linkedin.com/in/danielharriswasserman/">
        <h3>LinkedIn</h3>
      </a>
      <a href="https://github.com/wassermandh">
        <h3>Github</h3>
      </a>
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
