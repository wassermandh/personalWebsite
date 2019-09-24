import React from 'react';
const pic = require('./misc/IMG_2306.JPG');
import ProjectsPage from './ProjectsPage';
const aboutJSON = require('./misc/aboutme.json');
import Sidebar from './Sidebar';

const Aboutme = props => {
  return (
    <div>
      <div>
        <br />
        <div id="aboutMeContainer">
          <img className="curve" src={pic} />
          <h1>Welcome to my site!</h1>
          <p>{aboutJSON.about}</p>
        </div>
        <div id="ProjectsPageOuterContainer">
          <h1>What I've Done</h1>
          <ProjectsPage />
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Aboutme;
