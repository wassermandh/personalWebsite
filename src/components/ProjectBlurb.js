import React from 'react';

const ProjectBlurb = props => {
  return (
    <div>
      <a href={props.projectURL}>
        <h3>{props.title}</h3>
      </a>
      <p>{props.info}</p>
    </div>
  );
};

export default ProjectBlurb;
