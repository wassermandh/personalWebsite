import React, { Fragment } from 'react';

const Infolinks = props => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        maxWidth: '600px',
        margin: 'auto',
      }}
    >
      <a href="https://www.linkedin.com/in/danielharriswasserman/">
        <h3>LinkedIn</h3>
      </a>
      <a href="https://github.com/wassermandh">
        <h3>Github</h3>
      </a>
      <a href="https://github.com/wassermandh">
        <h3>Projects</h3>
      </a>
    </div>
  );
};

export default Infolinks;
