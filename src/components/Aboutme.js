import React from 'react';
const pic = require('../../misc/IMG_2306.JPG');
const aboutJSON = require('../../misc/aboutme.json');

const Aboutme = props => {
  return (
    <div id="aboutMeContainer">
      <img className="curve" src={pic} />
      <h1>Welcome to my site!</h1>
      <p>{aboutJSON.about}</p>
    </div>
  );
};

export default Aboutme;
