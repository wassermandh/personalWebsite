import React from 'react';
const pic = require('../../misc/IMG_2306.JPG');
const aboutJSON = require('../../misc/aboutme.json');

const Aboutme = props => {
  return (
    <div
      style={{
        overflow: 'hidden',
        display: 'flex',
        marginTop: '20px',
        height: '60vh',
      }}
    >
      <img
        style={{
          transform: 'rotate(90deg)',
          height: '50vh',
          marginRight: '-3vw',
        }}
        src={pic}
      />
      <p style={{ marginRight: '40px', overflow: 'scroll' }}>
        {aboutJSON.about}
      </p>
    </div>
  );
};

export default Aboutme;
