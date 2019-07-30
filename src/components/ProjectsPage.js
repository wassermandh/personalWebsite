import React from 'react';
import ProjectBlurb from './ProjectBlurb';

const ProjectsPage = props => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>My projects</h1>
      <div id="projectsBox">
        <ProjectBlurb
          projectURL="https://github.com/wassermandh/Stackathon"
          title="Stackathon"
          info="this is my stackathon"
        />
        <ProjectBlurb
          projectURL="knownyc.co"
          title="Know NYC"
          info="this is know nyc"
        />
        <ProjectBlurb
          projectURL="https://github.com/1904-gs-rr/graceshopper"
          title="Your World"
          info="gag ecommerce site"
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
