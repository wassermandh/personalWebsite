import React from 'react';
const pic = require('../../misc/IMG_2306.JPG');
import ProjectsPage from '../components/ProjectsPage';
const aboutJSON = require('../../misc/aboutme.json');

const Aboutme = props => {
  return (
    <div>
      <br />
      <div id="aboutMeContainer">
        <img className="curve" src={pic} />
        <h1>Welcome to my site!</h1>
        <p>{aboutJSON.about}</p>
      </div>
      <div id="ProjectsPageOuterContainer">
        <h1>My Projects</h1>
        <ProjectsPage />
      </div>
    </div>
  );
};

export default Aboutme;
