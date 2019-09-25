import React from 'react';
import ProjectBlurb from './ProjectBlurb';
// const knowNYCPic = require('./misc/knownyc.PNG');
// const yourWorldPic = require('./misc/yourWorldPic.PNG');
// const cityPicsPic = require('./misc/city-pics.PNG');
const cityPicsExampleArray = [
  '/misc/citypics3.PNG',
  '/misc/citypics2.PNG',
  '/misc/citypics3.PNG',
];
// const yourWorld1 = require('./misc/yourWorld1.PNG');
// const yourWorld2 = require('./misc/yourWorld2.PNG');
// const yourWorld3 = require('./misc/yourWorld3.PNG');
const yourWorldExampleArray = [
  '/misc/yourWorld2.PNG',
  '/misc/yourWorld1.PNG',
  '/misc/yourWorld3.PNG',
];
// const knownyc1 = require('./misc/knownyc1.PNG');
// const knownyc2 = require('./misc/knownyc2.PNG');
// const knownyc3 = require('./misc/knownyc3.PNG');
const knowNYCExamplesArray = [
  '/misc/knownyc1.PNG',
  '/misc/knownyc2.PNG',
  '/misc/knownyc3.PNG',
];

const ProjectsPage = props => {
  return (
    <div id="ProjectsPageInnerContainer">
      <ProjectBlurb
        title="Map My Pics"
        examplePics={cityPicsExampleArray}
        githubURL="https://github.com/wassermandh/Stackathon"
        deployedURL="http://mapmypics.herokuapp.com"
        info="This website allows users to upload pictures to an online gallery. The application uses an API that scrapes time and location data from each picture. If there is no data to scrape, users can enter the information manually. All pictures are dislpayed on a map on the home page of the site."
        img="/misc/city-pics.PNG"
      />
      <ProjectBlurb
        examplePics={knowNYCExamplesArray}
        githubURL="https://github.com/lima-dove/311-Capstone"
        deployedURL="http://knownyc.co"
        title="Know NYC"
        info="Know NYC renders all 311 data (since 2017) onto a Map, which users can explore in two views: a neighborhood view, where users can see aggregate data for a given neighborhood, and an address view, where users can look at all complaints for a given address. The data is shown in graph and table form. Users can also add their own complaints, and resolve pre-existing complaints."
        img="/misc/knownyc.PNG"
      />
      <ProjectBlurb
        examplePics={yourWorldExampleArray}
        githubURL="https://github.com/1904-gs-rr/graceshopper"
        deployedURL="http://yourworldindustries.herokuapp.com"
        title="Your World Industries"
        info="Your World Industries is a gag e-commerce site where users can purchase planets. Both users and guests can add items to their cart, while one needs to log in in order to checkout."
        img="/misc/yourWorldPic.PNG"
      />
    </div>
  );
};

export default ProjectsPage;
