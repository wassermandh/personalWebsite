import React from 'react';
const pic = require('../../misc/IMG_2306.JPG');

const Aboutme = props => {
  return (
    <div style={{ overflow: 'hidden', height: '100vh', marginTop: '20px' }}>
      <img
        style={{
          transform: 'rotate(90deg)',
          width: '45vw',
        }}
        src={pic}
      />
    </div>
  );
};

export default Aboutme;
