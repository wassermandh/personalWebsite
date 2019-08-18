import React from 'react';
import ProjectBlurb from './ProjectBlurb';
const knowNYCPic = require('../../misc/knownyc.PNG');
const yourWorldPic = require('../../misc/yourWorldPic.PNG');
const cityPicsPic = require('../../misc/city-pics.PNG');
const cityPicsExample1 = require('../../misc/LoggedInUserExample.PNG');
const cityPicsExample2 = require('../../misc/picOnMapExample.PNG');
const cityPicsExamlpe3 = require('../../misc/picGallery.PNG');
const cityPicsExampleArray = [
  cityPicsExample1,
  cityPicsExample2,
  cityPicsExamlpe3,
];
const yourWorld1 = require('../../misc/yourWorld1.PNG');
const yourWorld2 = require('../../misc/yourWorld2.PNG');
const yourWorld3 = require('../../misc/yourWorld3.PNG');
const yourWorldExampleArray = [yourWorld2, yourWorld1, yourWorld3];
const knownyc1 = require('../../misc/knownyc1.PNG');
const knownyc2 = require('../../misc/knownyc2.PNG');
const knownyc3 = require('../../misc/knownyc3.PNG');
const knowNYCExamplesArray = [knownyc1, knownyc2, knownyc3];

const ProjectsPage = props => {
  return (
    <div id="ProjectsPageInnerContainer">
      <ProjectBlurb
        examplePics={cityPicsExampleArray}
        projectURL="https://github.com/wassermandh/Stackathon"
        title="Stackathon"
        info="this is my stackathon"
        img={cityPicsPic}
      />
      <ProjectBlurb
        examplePics={knowNYCExamplesArray}
        projectURL="knownyc.co"
        title="Know NYC"
        info="this is know nyc"
        img={knowNYCPic}
      />
      <ProjectBlurb
        examplePics={yourWorldExampleArray}
        projectURL="https://github.com/1904-gs-rr/graceshopper"
        title="Your World"
        info="gag ecommerce site"
        img={yourWorldPic}
      />
    </div>
  );
};

export default ProjectsPage;
